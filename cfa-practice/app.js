/**
 * CFA Level III Practice - application logic
 *
 * Modes:  Quiz and Learn (multiple choice only), Item sets (vignette + MC/essay),
 *         Essays (self-graded), Qbank (browse/search).
 * Data:   questions.json (schema v2), generated from the *_qbank.md files by
 *         build_questions.py. Markdown is rendered with the vendored marked.min.js.
 */

const STATS_KEY = 'cfa-question-stats-v2';
const LEARN_KEY = 'cfa-learn-progress-v2';
const LEGACY_LEARN_KEY = 'cfa-learn-progress'; // old numeric-id format, ignored and cleared
const SECTION_ORDER = ['Asset Allocation', 'Derivatives', 'Performance',
    'Portfolio Construction', 'PM Pathway', 'CME'];
const RESULTS = ['correct', 'incorrect', 'partial'];
const RESULT_LABEL = { correct: 'Got it', partial: 'Partial', incorrect: 'Missed' };
const QBANK_PAGE = 40;
const LETTER_REF = /\b(?:see|same as|as in|vs\.?|than|choice|option|answer)\s+\(?[A-C]\b|\b[A-C]['’]s\b|\b[A-C] (?:at|is|and)\b/;

class CFAPracticeTester {
    constructor() {
        this.questions = [];
        this.byId = new Map();
        this.vignettes = {};
        this.groupById = new Map();
        this.itemSets = [];
        this.currentMode = 'quiz'; // 'quiz' | 'learn' | 'itemset' | 'essay' | 'qbank'
        this.selectedAnswer = null;
        this.currentOrder = [];   // original letters in displayed order (quiz/learn)

        this.settings = { shuffleQuestions: true, shuffleChoices: true, weighted: true };
        this.filters = { sections: new Set(), topic: 'all', missedOnly: false };

        // Quiz state
        this.currentQuiz = [];
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];

        // Learn state
        this.learnPool = [];
        this.learnMastered = [];
        this.learnTotal = 0;
        this.learnFilters = null;

        // Essay state (drafts live in memory only)
        this.essayQueue = [];
        this.essayIndex = 0;
        this.essayDrafts = {};
        this.essaySnap = null;
        this.essayGraded = false;

        // Item-set state
        this.is = null;

        // Qbank state
        this.qbankBase = [];
        this.qbankFiltered = [];
        this.qbankShown = 0;

        this.stats = {};
        this.init();
    }

    async init() {
        await this.loadQuestions();
        this.loadStats();
        this.clearLegacyStorage();
        this.bindEvents();
        this.buildFilters();
        this.selectMode('quiz');
        this.refreshStartScreen();
        this.checkLearnProgress();
    }

    async loadQuestions() {
        try {
            const response = await fetch('questions.json');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            this.vignettes = data.vignettes || {};
            this.questions = (data.questions || []).map(q => ({
                ...q,
                choices: q.choices || [],
                choiceNotes: q.choiceNotes || {},
                context: q.context || '',
                keyPrinciple: q.keyPrinciple || '',
                flag: q.flag || ''
            }));
        } catch (error) {
            console.error('Error loading questions:', error);
            this.questions = [];
        }
        this.byId = new Map(this.questions.map(q => [q.id, q]));
        this.buildGroups();
    }

    buildGroups() {
        const groups = new Map();
        this.questions.forEach(q => {
            if (!q.group) return;
            if (!groups.has(q.group)) {
                const v = this.vignettes[q.group] || {};
                groups.set(q.group, {
                    id: q.group, title: v.title || q.group, section: q.section, questions: []
                });
            }
            groups.get(q.group).questions.push(q);
        });
        groups.forEach(g => g.questions.sort((a, b) => a.groupOrder - b.groupOrder));
        this.groupById = groups;
        this.itemSets = [...groups.values()].filter(g => g.questions.length >= 2);
    }

    // ==================== HELPERS ====================

    md(text) {
        if (!text) return '';
        return marked.parse(text, { gfm: true, breaks: true });
    }

    mdi(text) {
        if (!text) return '';
        return marked.parseInline(text, { gfm: true, breaks: true });
    }

    esc(text) {
        return String(text == null ? '' : text).replace(/[&<>"']/g, c =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    $(id) {
        return document.getElementById(id);
    }

    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        this.$(screenId).classList.add('active');
        this.$('app-container').classList.toggle('wide', screenId === 'itemset-screen');
        if (screenId === 'start-screen') this.refreshStartScreen();
        window.scrollTo(0, 0);
    }

    goHome() {
        this.showScreen('start-screen');
    }

    // ==================== EVENT BINDING ====================

    bindEvents() {
        ['quiz', 'learn', 'itemset', 'essay', 'qbank'].forEach(mode =>
            this.$(`${mode}-mode-btn`).addEventListener('click', () => this.selectMode(mode)));
        this.$('start-btn').addEventListener('click', () => this.startCurrentMode());

        // Filters
        this.$('section-clear-btn').addEventListener('click', () => this.toggleAllSections());
        this.$('topic-select').addEventListener('change', e => {
            this.filters.topic = e.target.value;
            this.updateAvailability();
        });
        this.$('missed-only').addEventListener('change', e => {
            this.filters.missedOnly = e.target.checked;
            this.updateAvailability();
        });
        this.$('essay-scope').addEventListener('change', () => this.updateAvailability());

        // Quiz / Learn question screen
        this.$('q-submit-btn').addEventListener('click', () => this.submitAnswer());
        this.$('q-idk-btn').addEventListener('click', () => this.handleIDontKnow());
        this.$('q-next-btn').addEventListener('click', () => this.nextQuestion());
        this.$('q-home-btn').addEventListener('click', () => this.leaveQuestionScreen());

        // Quiz results
        this.$('new-quiz-btn').addEventListener('click', () => this.goHome());
        this.$('retry-wrong-btn').addEventListener('click', () => this.retryWrongAnswers());

        // Learn
        this.$('learn-again-btn').addEventListener('click', () => this.startLearn());
        this.$('learn-home-btn').addEventListener('click', () => this.goHome());
        this.$('learn-resume-btn').addEventListener('click', () => this.resumeLearn());
        this.$('learn-reset-btn').addEventListener('click', () => this.resetLearnProgress());
        this.$('learn-export-btn').addEventListener('click', () => this.exportLearnProgress());
        this.$('learn-import-btn').addEventListener('click', () => this.$('learn-import-file').click());
        this.$('learn-import-file').addEventListener('change', e => this.importLearnProgress(e));

        // Essays
        this.$('essay-home-btn').addEventListener('click', () => this.goHome());
        this.$('essay-reveal-btn').addEventListener('click', () => this.revealEssay());
        this.$('essay-skip-btn').addEventListener('click', () => this.nextEssay());
        this.$('essay-next-btn').addEventListener('click', () => this.nextEssay());
        this.$('essay-draft').addEventListener('input', e => {
            const q = this.essayQueue[this.essayIndex];
            if (q) this.essayDrafts[q.id] = e.target.value;
        });
        document.querySelectorAll('#essay-grade-block .btn-grade').forEach(btn =>
            btn.addEventListener('click', () => this.gradeEssay(btn.dataset.grade)));

        // Item sets
        this.$('isl-back-btn').addEventListener('click', () => this.goHome());
        this.$('is-home-btn').addEventListener('click', () => this.leaveItemSet());
        this.$('is-submit-btn').addEventListener('click', () => {
            if (this.is.mode === 'review') this.showItemSetResults();
            else this.submitItemSet();
        });
        this.$('is-vignette-toggle').addEventListener('click', () => {
            const panel = this.$('is-vignette');
            const collapsed = panel.classList.toggle('collapsed');
            this.$('is-vignette-toggle').textContent = collapsed ? 'Show' : 'Hide';
        });
        this.$('isr-back-btn').addEventListener('click', () => this.openItemSetList());
        this.$('isr-retake-btn').addEventListener('click', () => this.startItemSet(this.is.group.id));

        // Qbank
        this.$('qbank-back-btn').addEventListener('click', () => this.goHome());
        this.$('qbank-search').addEventListener('input', () => this.applyQbankFilters());
        this.$('qbank-type').addEventListener('change', () => this.applyQbankFilters());
        this.$('qbank-more-btn').addEventListener('click', () => this.renderQbankPage());
        this.$('qbank-content').addEventListener('toggle', e => {
            if (e.target.matches && e.target.matches('details.qbank-item') && e.target.open) {
                this.fillQbankItem(e.target);
            }
        }, true);

        // Stats
        this.$('stats-export-btn').addEventListener('click', () => this.exportQuestionStats());
        this.$('stats-import-btn').addEventListener('click', () => this.$('stats-import-file').click());
        this.$('stats-import-file').addEventListener('change', e => this.importQuestionStats(e));

        // Options
        this.$('shuffle-questions').addEventListener('change', e => {
            this.settings.shuffleQuestions = e.target.checked;
        });
        this.$('shuffle-choices').addEventListener('change', e => {
            this.settings.shuffleChoices = e.target.checked;
        });
        this.$('weighted-sampling').addEventListener('change', e => {
            this.settings.weighted = e.target.checked;
        });
    }

    // ==================== MODE SELECTION ====================

    selectMode(mode) {
        this.currentMode = mode;
        document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('btn-mode-active'));
        this.$(`${mode}-mode-btn`).classList.add('btn-mode-active');

        ['quiz', 'learn', 'itemset', 'essay', 'qbank'].forEach(m =>
            this.$(`${m}-options`).classList.toggle('hidden', m !== mode));

        const labels = {
            quiz: 'Start Quiz', learn: 'Start Learning', itemset: 'Browse Item Sets',
            essay: 'Start Essays', qbank: 'Open Qbank'
        };
        this.$('start-btn').textContent = labels[mode];
        this.$('missed-only-row').classList.toggle('hidden', mode === 'qbank');
        this.updateAvailability();
    }

    startCurrentMode() {
        const start = {
            quiz: () => this.startQuiz(), learn: () => this.startLearn(),
            itemset: () => this.openItemSetList(), essay: () => this.startEssays(),
            qbank: () => this.startQbank()
        };
        start[this.currentMode]();
    }

    // ==================== FILTERS ====================

    sectionList() {
        const present = [...new Set(this.questions.map(q => q.section))];
        const known = SECTION_ORDER.filter(s => present.includes(s));
        return known.concat(present.filter(s => !SECTION_ORDER.includes(s)));
    }

    buildFilters() {
        const container = this.$('section-chips');
        container.innerHTML = '';
        this.sectionList().forEach(section => {
            const label = document.createElement('label');
            label.className = 'topic-chip';
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.value = section;
            cb.addEventListener('change', () => this.onSectionChange());
            label.appendChild(cb);
            label.appendChild(document.createTextNode(section));
            container.appendChild(label);
        });
        this.refreshTopicOptions();
        this.syncSectionChips();
    }

    onSectionChange() {
        this.filters.sections = new Set(
            [...document.querySelectorAll('#section-chips input:checked')].map(cb => cb.value));
        this.refreshTopicOptions();
        this.syncSectionChips();
        this.updateAvailability();
    }

    toggleAllSections() {
        const boxes = [...document.querySelectorAll('#section-chips input')];
        const anyChecked = boxes.some(cb => cb.checked);
        boxes.forEach(cb => { cb.checked = !anyChecked; });
        this.onSectionChange();
    }

    syncSectionChips() {
        document.querySelectorAll('#section-chips .topic-chip').forEach(chip => {
            chip.classList.toggle('selected', chip.querySelector('input').checked);
        });
        const none = this.filters.sections.size === 0;
        this.$('section-clear-btn').textContent = none ? 'Select all' : 'Clear';
    }

    /** Topics listed depend on the selected sections (none selected = all). */
    refreshTopicOptions() {
        const counts = new Map();
        this.questions.forEach(q => {
            if (this.filters.sections.size && !this.filters.sections.has(q.section)) return;
            counts.set(q.topic, (counts.get(q.topic) || 0) + 1);
        });
        const select = this.$('topic-select');
        select.innerHTML = '';
        const all = document.createElement('option');
        all.value = 'all';
        all.textContent = 'All topics';
        select.appendChild(all);
        [...counts.keys()].sort((a, b) => a.localeCompare(b)).forEach(topic => {
            const opt = document.createElement('option');
            opt.value = topic;
            opt.textContent = `${topic} (${counts.get(topic)})`;
            select.appendChild(opt);
        });
        if (!counts.has(this.filters.topic)) this.filters.topic = 'all';
        select.value = this.filters.topic;
    }

    /** Set both filters programmatically (weak-topic links). */
    applyTopicFilter(section, topic) {
        this.filters.sections = new Set([section]);
        document.querySelectorAll('#section-chips input').forEach(cb => {
            cb.checked = cb.value === section;
        });
        this.refreshTopicOptions();
        this.filters.topic = topic;
        this.$('topic-select').value = topic;
        this.syncSectionChips();
        this.updateAvailability();
    }

    matchesFilter(q) {
        const f = this.filters;
        if (f.sections.size && !f.sections.has(q.section)) return false;
        if (f.topic !== 'all' && q.topic !== f.topic) return false;
        return true;
    }

    isMissed(q) {
        const s = this.stats[q.id];
        return !!s && (s.lastResult === 'incorrect' || s.lastResult === 'partial');
    }

    /** Questions available to a mode under the current filters. */
    poolFor(mode, missedOnly = this.filters.missedOnly) {
        let qs = this.questions;
        if (mode === 'quiz' || mode === 'learn') qs = qs.filter(q => q.type === 'mc');
        if (mode === 'essay') {
            const scope = this.$('essay-scope').value;
            qs = qs.filter(q => q.type === 'essay' &&
                (scope === 'all' || (scope === 'group' ? !!q.group : !q.group)));
        }
        qs = qs.filter(q => this.matchesFilter(q));
        if (missedOnly && mode !== 'qbank') qs = qs.filter(q => this.isMissed(q));
        return qs;
    }

    /** Item sets (>= 2 questions) that have a question passing the filters. */
    setsFor(missedOnly = this.filters.missedOnly) {
        return this.itemSets.filter(g => g.questions.some(q =>
            this.matchesFilter(q) && (!missedOnly || this.isMissed(q))));
    }

    modeCount(mode, missedOnly) {
        return mode === 'itemset' ? this.setsFor(missedOnly).length : this.poolFor(mode, missedOnly).length;
    }

    updateAvailability() {
        const mode = this.currentMode;
        const missedN = mode === 'qbank' ? 0 : this.modeCount(mode, true);
        const box = this.$('missed-only');
        const unit = mode === 'itemset' ? 'sets' : 'questions';
        if (missedN === 0) {
            this.filters.missedOnly = false;
            box.checked = false;
            box.disabled = true;
            this.$('missed-only-label').textContent = 'Missed only (none available)';
        } else {
            box.disabled = false;
            this.$('missed-only-label').textContent = `Missed only (${missedN} ${unit} available)`;
        }
        const n = this.modeCount(mode, this.filters.missedOnly);
        const noun = { quiz: 'multiple-choice questions', learn: 'multiple-choice questions',
            itemset: 'item sets', essay: 'essays', qbank: 'questions' }[mode];
        this.$('availability').textContent = `${n} ${noun} match the current filters`;
        this.$('start-btn').disabled = n === 0;
    }

    describeFilters(f = this.filters) {
        const sections = f.sections.size || f.sections.length ? [...f.sections].join(', ') : 'All sections';
        const topic = f.topic && f.topic !== 'all' ? ` / ${f.topic}` : '';
        return `${sections}${topic}${f.missedOnly ? ' / missed only' : ''}`;
    }

    // ==================== START SCREEN SUMMARY ====================

    refreshStartScreen() {
        this.$('total-questions').textContent = this.questions.length;
        const s = this.statsSummary();
        this.$('attempted-count').textContent = `${s.attempted}/${this.questions.length}`;
        this.$('accuracy-pct').textContent = s.accuracy == null ? '–' : `${Math.round(s.accuracy * 100)}%`;
        this.$('missed-count').textContent = s.missed;
        this.renderWeakTopics();
        this.updateAvailability();
        if (!this.questions.length) {
            this.$('availability').textContent =
                'No questions loaded. Serve this folder over http (python3 -m http.server) and run build_questions.py.';
        }
    }

    renderWeakTopics() {
        const weak = this.weakTopics();
        const panel = this.$('weak-topics');
        panel.classList.toggle('hidden', weak.length === 0);
        const list = this.$('weak-topics-list');
        list.innerHTML = '';
        weak.forEach(w => {
            const li = document.createElement('li');
            li.innerHTML = `<button type="button" class="weak-topic-link">${this.esc(w.topic)}</button>
                <span class="weak-meta">${Math.round(w.rate * 100)}% missed · ${w.attempts} attempts · ${this.esc(w.section)}</span>`;
            li.querySelector('button').addEventListener('click', () => this.applyTopicFilter(w.section, w.topic));
            list.appendChild(li);
        });
    }

    // ==================== STATS ====================

    loadStats() {
        try {
            const saved = localStorage.getItem(STATS_KEY);
            this.stats = saved ? JSON.parse(saved) : {};
        } catch (e) {
            this.stats = {};
        }
    }

    saveStats() {
        try {
            localStorage.setItem(STATS_KEY, JSON.stringify(this.stats));
        } catch (e) {
            console.warn('Could not save stats:', e);
        }
    }

    /** Old learn-progress used numeric ids from the retired L2 set. Drop it. */
    clearLegacyStorage() {
        try { localStorage.removeItem(LEGACY_LEARN_KEY); } catch (e) { /* storage unavailable */ }
    }

    /** Record one attempt. Returns the previous entry (or null) so a grade can be corrected. */
    recordResult(id, result) {
        const prev = this.stats[id] ? { ...this.stats[id] } : null;
        const s = this.stats[id] || { attempts: 0, correct: 0, incorrect: 0, partial: 0, lastSeen: '', lastResult: '' };
        s.attempts++;
        s[result]++;
        s.lastSeen = new Date().toISOString();
        s.lastResult = result;
        this.stats[id] = s;
        this.saveStats();
        return prev;
    }

    /** Undo a recordResult (used when an essay grade is changed in the same session). */
    revertResult(id, prev) {
        if (prev) this.stats[id] = prev;
        else delete this.stats[id];
        this.saveStats();
    }

    missRate(s) {
        return s && s.attempts ? ((s.incorrect || 0) + 0.5 * (s.partial || 0)) / s.attempts : 0;
    }

    topicKey(q) {
        return `${q.section}|${q.topic}`;
    }

    topicAggregates() {
        const agg = new Map();
        this.questions.forEach(q => {
            const s = this.stats[q.id];
            if (!s || !s.attempts) return;
            const k = this.topicKey(q);
            if (!agg.has(k)) agg.set(k, { section: q.section, topic: q.topic, attempts: 0, miss: 0 });
            const a = agg.get(k);
            a.attempts += s.attempts;
            a.miss += (s.incorrect || 0) + 0.5 * (s.partial || 0);
        });
        return agg;
    }

    statsSummary() {
        let attempted = 0, attempts = 0, credit = 0, missed = 0;
        this.questions.forEach(q => {
            const s = this.stats[q.id];
            if (!s || !s.attempts) return;
            attempted++;
            attempts += s.attempts;
            credit += (s.correct || 0) + 0.5 * (s.partial || 0);
            if (this.isMissed(q)) missed++;
        });
        return { attempted, missed, attempts, accuracy: attempts ? credit / attempts : null };
    }

    /** Worst 5 topics by miss rate, at least 3 attempts, only topics with a nonzero miss rate. */
    weakTopics() {
        return [...this.topicAggregates().values()]
            .filter(a => a.attempts >= 3 && a.miss > 0)
            .map(a => ({ ...a, rate: a.miss / a.attempts }))
            .sort((a, b) => b.rate - a.rate || b.attempts - a.attempts)
            .slice(0, 5);
    }

    /** w = 1 + 3*missRate(topic) + 2*missRate(question); never-seen questions get 1.5 */
    questionWeight(q, topicAgg = this.topicAggregates()) {
        const s = this.stats[q.id];
        if (!s || !s.attempts) return 1.5;
        const t = topicAgg.get(this.topicKey(q));
        const topicRate = t && t.attempts ? t.miss / t.attempts : 0;
        return 1 + 3 * topicRate + 2 * this.missRate(s);
    }

    /** Weighted sampling without replacement (Efraimidis-Spirakis keys). */
    weightedSample(items, k) {
        const agg = this.topicAggregates();
        return items
            .map(q => ({ q, key: Math.pow(Math.random(), 1 / this.questionWeight(q, agg)) }))
            .sort((a, b) => b.key - a.key)
            .slice(0, k)
            .map(x => x.q);
    }

    exportQuestionStats() {
        if (Object.keys(this.stats).length === 0) {
            alert('No stats to export yet. Answer some questions first.');
            return;
        }
        this.download(JSON.stringify(this.stats, null, 2),
            `cfa-question-stats-v2-${new Date().toISOString().slice(0, 10)}.json`);
    }

    /** Merge one imported entry (old {correct, incorrect} or new shape) into this.stats. */
    mergeStat(id, inc) {
        const num = v => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.floor(Number(v)) : 0);
        const c = num(inc.correct), i = num(inc.incorrect), p = num(inc.partial);
        const attempts = Math.max(num(inc.attempts), c + i + p);
        if (attempts === 0) return false;
        const cur = this.stats[id] || { attempts: 0, correct: 0, incorrect: 0, partial: 0, lastSeen: '', lastResult: '' };
        cur.attempts += attempts;
        cur.correct += c;
        cur.incorrect += i;
        cur.partial += p;
        const incTime = Date.parse(inc.lastSeen);
        if (!Number.isNaN(incTime) && (!cur.lastSeen || incTime > Date.parse(cur.lastSeen))) {
            cur.lastSeen = new Date(incTime).toISOString();
            if (RESULTS.includes(inc.lastResult)) cur.lastResult = inc.lastResult;
        }
        this.stats[id] = cur;
        return true;
    }

    importQuestionStats(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
            try {
                const imported = JSON.parse(e.target.result);
                if (!imported || typeof imported !== 'object' || Array.isArray(imported)) {
                    throw new Error('Unexpected shape');
                }
                let merged = 0, skipped = 0;
                Object.entries(imported).forEach(([id, inc]) => {
                    if (!this.byId.has(id) || !inc || typeof inc !== 'object') { skipped++; return; }
                    if (this.mergeStat(id, inc)) merged++; else skipped++;
                });
                this.saveStats();
                this.refreshStartScreen();
                alert(`Stats imported: ${merged} merged, ${skipped} skipped (ids not in the current question set).`);
            } catch (err) {
                alert('Invalid stats file.');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    download(text, filename) {
        const blob = new Blob([text], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    // ==================== MULTIPLE-CHOICE RENDERING (shared) ====================

    buildChoiceOrder(q, shuffle) {
        const letters = q.choices.map(c => c.letter);
        return shuffle ? this.shuffle(letters) : letters;
    }

    createChoiceEl(q, origLetter, displayLetter) {
        const choice = q.choices.find(c => c.letter === origLetter);
        const el = document.createElement('div');
        el.className = 'choice';
        el.dataset.letter = origLetter;
        el.innerHTML = `
            <span class="choice-letter">${displayLetter}</span>
            <div class="choice-text"><div class="choice-label md">${this.mdi(choice.text)}</div></div>`;
        return el;
    }

    /** Per-choice note shown next to the choice as displayed (shuffle-safe). */
    addChoiceNote(el, q, origLetter) {
        const note = q.choiceNotes[origLetter];
        if (!note) return;
        const div = document.createElement('div');
        div.className = `choice-note ${note.verdict}`;
        const label = note.verdict === 'correct' ? 'Correct.' : 'Wrong.';
        div.innerHTML = this.md(`**${label}** ${note.text}`);
        el.querySelector('.choice-text').appendChild(div);
    }

    /** Explanation text sometimes cites "see C"; tell the user the shuffle mapping when it could mislead. */
    shuffleNote(q, order) {
        const shuffled = order.some((l, i) => l !== q.choices[i].letter);
        const cites = Object.values(q.choiceNotes).some(n => LETTER_REF.test(n.text));
        if (!shuffled || !cites) return '';
        const map = order.map((orig, i) => `${String.fromCharCode(65 + i)} was ${orig}`).join(', ');
        return `Choices were shuffled. Letters inside the explanations refer to the original order (${map}).`;
    }

    fillCallouts(q, principleEl, flagEl) {
        if (q.keyPrinciple) {
            principleEl.innerHTML = `<h4>Key principle</h4>${this.md(q.keyPrinciple)}`;
            principleEl.classList.remove('hidden');
        } else {
            principleEl.classList.add('hidden');
        }
        if (q.flag) {
            flagEl.innerHTML = `<strong>⚠ Flag:</strong> ${this.mdi(q.flag)}`;
            flagEl.classList.remove('hidden');
        } else {
            flagEl.classList.add('hidden');
        }
    }

    // ==================== UNIFIED QUESTION ENGINE (Quiz + Learn) ====================

    getCurrentQuestion() {
        if (this.currentMode === 'learn') return this.learnPool[0];
        return this.currentQuiz[this.currentIndex];
    }

    renderQuestion() {
        const question = this.getCurrentQuestion();
        if (!question) return;
        this.selectedAnswer = null;

        if (this.currentMode === 'learn') {
            this.$('q-counter').textContent = `Remaining: ${this.learnPool.length}`;
            this.$('q-status').textContent = `Mastered: ${this.learnMastered.length}`;
            this.$('q-progress-fill').style.width = `${(this.learnMastered.length / this.learnTotal) * 100}%`;
        } else {
            this.$('q-counter').textContent = `Question ${this.currentIndex + 1} of ${this.currentQuiz.length}`;
            this.$('q-status').textContent = `Score: ${this.score}/${this.currentIndex}`;
            this.$('q-progress-fill').style.width = `${(this.currentIndex / this.currentQuiz.length) * 100}%`;
        }

        this.$('q-topic-badge').textContent = `${question.section} · ${question.topic}`;
        this.$('q-title').textContent = question.title;
        const ctx = this.$('q-context');
        ctx.innerHTML = this.md(question.context);
        ctx.classList.toggle('hidden', !question.context);
        this.$('q-text').innerHTML = this.md(question.stem);

        const shuffle = this.settings.shuffleChoices || this.currentMode === 'learn';
        this.currentOrder = this.buildChoiceOrder(question, shuffle);
        const container = this.$('q-choices');
        container.innerHTML = '';
        this.currentOrder.forEach((orig, i) => {
            const el = this.createChoiceEl(question, orig, String.fromCharCode(65 + i));
            el.addEventListener('click', () => this.selectChoice(el, orig));
            container.appendChild(el);
        });

        this.$('q-submit-btn').disabled = true;
        this.$('q-submit-btn').style.display = 'block';
        this.$('q-idk-btn').style.display = this.currentMode === 'learn' ? 'block' : 'none';
        this.$('q-explanation').classList.add('hidden');
    }

    selectChoice(element, letter) {
        document.querySelectorAll('#q-choices .choice').forEach(c => c.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedAnswer = letter;
        this.$('q-submit-btn').disabled = false;
    }

    submitAnswer() {
        if (!this.selectedAnswer) return;
        const question = this.getCurrentQuestion();
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        this.recordResult(question.id, isCorrect ? 'correct' : 'incorrect');

        this.markChoices(question, this.selectedAnswer);

        if (this.currentMode === 'quiz') {
            if (isCorrect) this.score++;
            this.results.push({ question, userAnswer: this.selectedAnswer, correct: isCorrect });
        } else if (this.currentMode === 'learn') {
            if (isCorrect) this.learnMastered.push(this.learnPool.shift());
            else this.moveToBackHalf();
            this.saveLearnProgress();
        }
        this.showExplanation(question, isCorrect);
    }

    handleIDontKnow() {
        const question = this.getCurrentQuestion();
        this.recordResult(question.id, 'incorrect');
        this.markChoices(question, null);
        this.moveToBackHalf();
        this.saveLearnProgress();
        this.showExplanation(question, false, '?', "You'll see this again.");
    }

    markChoices(question, picked) {
        document.querySelectorAll('#q-choices .choice').forEach(el => {
            el.classList.add('disabled');
            const letter = el.dataset.letter;
            if (letter === question.correctAnswer) el.classList.add('correct');
            else if (letter === picked) el.classList.add('incorrect');
            this.addChoiceNote(el, question, letter);
        });
    }

    showExplanation(question, isCorrect, icon, text) {
        this.$('q-explanation').classList.remove('hidden');
        this.$('q-result-header').className = `result-header ${isCorrect ? 'correct' : 'incorrect'}`;
        this.$('q-result-icon').textContent = icon || (isCorrect ? '✓' : '✗');

        if (text) this.$('q-result-text').textContent = text;
        else if (this.currentMode === 'learn') {
            this.$('q-result-text').textContent =
                isCorrect ? 'Correct! Question mastered.' : "Incorrect. You'll see this again.";
        } else {
            this.$('q-result-text').textContent = isCorrect ? 'Correct!' : 'Incorrect';
        }

        const note = this.$('q-shuffle-note');
        const msg = this.shuffleNote(question, this.currentOrder);
        note.textContent = msg;
        note.classList.toggle('hidden', !msg);

        this.fillCallouts(question, this.$('q-principle'), this.$('q-flag'));

        this.$('q-submit-btn').style.display = 'none';
        this.$('q-idk-btn').style.display = 'none';
        this.$('q-next-btn').textContent = this.currentMode === 'quiz' &&
            this.currentIndex >= this.currentQuiz.length - 1 ? 'See Results' : 'Next Question';
        this.$('q-explanation').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    nextQuestion() {
        if (this.currentMode === 'quiz') {
            this.currentIndex++;
            if (this.currentIndex >= this.currentQuiz.length) {
                this.showResults();
                return;
            }
        } else if (this.currentMode === 'learn') {
            if (this.learnPool.length === 0) {
                this.clearLearnProgress();
                this.showScreen('learn-complete-screen');
                return;
            }
        }
        this.renderQuestion();
        window.scrollTo(0, 0);
    }

    leaveQuestionScreen() {
        if (this.currentMode === 'quiz' && this.currentIndex < this.currentQuiz.length &&
            !confirm('Leave this quiz? Your progress in this quiz will be lost (answers already given are kept in your stats).')) {
            return;
        }
        this.goHome();
        this.checkLearnProgress();
    }

    // ==================== QUIZ MODE ====================

    startQuiz() {
        const numQuestions = this.$('num-questions').value;
        const available = this.poolFor('quiz');
        if (available.length === 0) {
            alert('No questions available for the current filters.');
            return;
        }
        const count = numQuestions === 'all'
            ? available.length
            : Math.min(parseInt(numQuestions, 10), available.length);

        let picked;
        if (this.settings.weighted && count < available.length) {
            picked = this.weightedSample(available, count);
            if (!this.settings.shuffleQuestions) {
                picked.sort((a, b) => this.questions.indexOf(a) - this.questions.indexOf(b));
            }
        } else {
            picked = (this.settings.shuffleQuestions ? this.shuffle(available) : [...available]).slice(0, count);
        }

        this.currentMode = 'quiz';
        this.currentQuiz = picked;
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];
        this.showScreen('question-screen');
        this.renderQuestion();
    }

    showResults() {
        this.showScreen('results-screen');
        const percent = Math.round((this.score / this.currentQuiz.length) * 100);
        this.$('final-percent').textContent = `${percent}%`;
        this.$('final-score-detail').textContent = `${this.score} out of ${this.currentQuiz.length} correct`;

        const topicStats = {};
        this.results.forEach(r => {
            const topic = r.question.topic;
            if (!topicStats[topic]) topicStats[topic] = { correct: 0, total: 0 };
            topicStats[topic].total++;
            if (r.correct) topicStats[topic].correct++;
        });

        const breakdown = this.$('topic-breakdown');
        breakdown.innerHTML = '';
        Object.entries(topicStats).forEach(([topic, st]) => {
            const pct = Math.round((st.correct / st.total) * 100);
            const div = document.createElement('div');
            div.className = 'topic-result';
            div.innerHTML = `<span class="topic-name">${this.esc(topic)}</span>
                <span class="topic-score ${pct >= 70 ? 'good' : 'bad'}">${st.correct}/${st.total} (${pct}%)</span>`;
            breakdown.appendChild(div);
        });

        const review = this.$('question-review');
        review.innerHTML = '';
        this.results.forEach(r => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `<span class="review-status">${r.correct ? '✓' : '✗'}</span>
                <span class="review-title">${this.esc(r.question.title)}</span>`;
            review.appendChild(div);
        });
        this.$('retry-wrong-btn').style.display = this.results.some(r => !r.correct) ? 'block' : 'none';
    }

    retryWrongAnswers() {
        const wrong = this.results.filter(r => !r.correct).map(r => r.question);
        if (wrong.length === 0) {
            alert('You got all questions correct!');
            return;
        }
        this.currentQuiz = this.settings.shuffleQuestions ? this.shuffle(wrong) : wrong;
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];
        this.showScreen('question-screen');
        this.renderQuestion();
    }

    // ==================== LEARN MODE ====================

    startLearn() {
        const available = this.poolFor('learn');
        if (available.length === 0) {
            alert('No questions available for the current filters.');
            return;
        }
        this.currentMode = 'learn';
        this.learnPool = this.shuffle(available);
        this.learnMastered = [];
        this.learnTotal = available.length;
        this.learnFilters = this.filterSnapshot();
        this.clearLearnProgress();
        this.showScreen('question-screen');
        this.renderQuestion();
    }

    filterSnapshot() {
        return { sections: [...this.filters.sections], topic: this.filters.topic, missedOnly: this.filters.missedOnly };
    }

    moveToBackHalf() {
        const q = this.learnPool.shift();
        const minPos = Math.floor(this.learnPool.length / 2);
        const insertPos = minPos + Math.floor(Math.random() * (this.learnPool.length - minPos + 1));
        this.learnPool.splice(insertPos, 0, q);
    }

    saveLearnProgress() {
        const progress = {
            masteredIds: this.learnMastered.map(q => q.id),
            poolIds: this.learnPool.map(q => q.id),
            filters: this.learnFilters || this.filterSnapshot(),
            total: this.learnTotal,
            timestamp: Date.now()
        };
        try { localStorage.setItem(LEARN_KEY, JSON.stringify(progress)); } catch (e) { console.warn(e); }
    }

    clearLearnProgress() {
        try { localStorage.removeItem(LEARN_KEY); } catch (e) { /* ignore */ }
        this.$('learn-resume-banner').classList.add('hidden');
    }

    checkLearnProgress() {
        let saved = null;
        try { saved = localStorage.getItem(LEARN_KEY); } catch (e) { /* ignore */ }
        if (!saved) return;
        try {
            const progress = JSON.parse(saved);
            const known = id => this.byId.has(id);
            const remaining = (progress.poolIds || []).filter(known).length;
            if (remaining > 0) {
                const mastered = (progress.masteredIds || []).filter(known).length;
                const date = new Date(progress.timestamp).toLocaleDateString();
                this.$('learn-resume-detail').textContent =
                    `${mastered} mastered, ${remaining} remaining (${this.describeFilters(progress.filters || this.filters)}) — saved ${date}`;
                this.$('learn-resume-banner').classList.remove('hidden');
            }
        } catch (e) {
            this.clearLearnProgress();
        }
    }

    resumeLearn() {
        let saved = null;
        try { saved = localStorage.getItem(LEARN_KEY); } catch (e) { /* ignore */ }
        if (!saved) return;
        try {
            const progress = JSON.parse(saved);
            this.learnPool = progress.poolIds.map(id => this.byId.get(id)).filter(Boolean);
            this.learnMastered = (progress.masteredIds || []).map(id => this.byId.get(id)).filter(Boolean);
            this.learnTotal = this.learnPool.length + this.learnMastered.length;
            this.learnFilters = progress.filters || this.filterSnapshot();
            if (this.learnPool.length === 0) throw new Error('empty pool');
            this.currentMode = 'learn';
            this.showScreen('question-screen');
            this.renderQuestion();
        } catch (e) {
            alert('Could not restore progress. Starting fresh.');
            this.startLearn();
        }
    }

    resetLearnProgress() {
        this.clearLearnProgress();
    }

    exportLearnProgress() {
        let saved = null;
        try { saved = localStorage.getItem(LEARN_KEY); } catch (e) { /* ignore */ }
        if (!saved) {
            alert('No learn progress to export. Start a learn session first.');
            return;
        }
        this.download(saved, `cfa-learn-progress-v2-${new Date().toISOString().slice(0, 10)}.json`);
    }

    importLearnProgress(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
            try {
                const progress = JSON.parse(e.target.result);
                if (!progress.poolIds || !Array.isArray(progress.poolIds)) throw new Error('Invalid format');
                if (!progress.poolIds.some(id => this.byId.has(id))) {
                    alert('That learn session has no questions from the current question set (old L2 ids?).');
                    return;
                }
                localStorage.setItem(LEARN_KEY, JSON.stringify(progress));
                this.checkLearnProgress();
                alert('Progress imported! Click Resume to continue.');
            } catch (err) {
                alert('Invalid progress file.');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    // ==================== ESSAY MODE ====================

    startEssays() {
        const available = this.poolFor('essay');
        if (available.length === 0) {
            alert('No essays available for the current filters.');
            return;
        }
        const n = this.$('essay-num').value;
        const shuffled = this.shuffle(available);
        this.essayQueue = n === 'all' ? shuffled : shuffled.slice(0, parseInt(n, 10));
        this.essayIndex = 0;
        this.currentMode = 'essay';
        this.showScreen('essay-screen');
        this.renderEssay();
    }

    renderEssay() {
        const q = this.essayQueue[this.essayIndex];
        this.essayGraded = false;
        this.essaySnap = null;
        this.$('essay-counter').textContent = `Essay ${this.essayIndex + 1} of ${this.essayQueue.length}`;
        this.$('essay-progress-fill').style.width = `${(this.essayIndex / this.essayQueue.length) * 100}%`;
        this.$('essay-topic-badge').textContent = `${q.section} · ${q.topic}`;
        this.$('essay-title').textContent = q.title;
        const ctx = this.$('essay-context');
        ctx.innerHTML = this.md(q.context);
        ctx.classList.toggle('hidden', !q.context);
        this.$('essay-text').innerHTML = this.md(q.stem);
        this.$('essay-draft').value = this.essayDrafts[q.id] || '';
        this.$('essay-actions').classList.remove('hidden');
        this.$('essay-answer').classList.add('hidden');
        this.$('essay-grade-block').classList.remove('hidden');
        this.$('essay-graded-msg').classList.add('hidden');
        this.$('essay-next-btn').classList.add('hidden');
        document.querySelectorAll('#essay-grade-block .btn-grade').forEach(b => b.classList.remove('chosen'));
        this.$('essay-draft').focus({ preventScroll: true });
    }

    revealEssay() {
        const q = this.essayQueue[this.essayIndex];
        this.$('essay-model').innerHTML = this.md(q.modelAnswer);
        this.fillCallouts(q, this.$('essay-principle'), this.$('essay-flag'));
        this.$('essay-answer').classList.remove('hidden');
        this.$('essay-actions').classList.add('hidden');
        this.$('essay-answer').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    /** Self-grade; changing the grade in the same session replaces the earlier record. */
    gradeEssay(result) {
        const q = this.essayQueue[this.essayIndex];
        if (this.essayGraded) this.revertResult(q.id, this.essaySnap);
        this.essaySnap = this.recordResult(q.id, result);
        this.essayGraded = true;
        document.querySelectorAll('#essay-grade-block .btn-grade').forEach(b =>
            b.classList.toggle('chosen', b.dataset.grade === result));
        const msg = this.$('essay-graded-msg');
        msg.textContent = `Recorded: ${RESULT_LABEL[result]}. You can change it before moving on.`;
        msg.classList.remove('hidden');
        const last = this.essayIndex >= this.essayQueue.length - 1;
        this.$('essay-next-btn').textContent = last ? 'Finish' : 'Next Essay';
        this.$('essay-next-btn').classList.remove('hidden');
    }

    nextEssay() {
        this.essayIndex++;
        if (this.essayIndex >= this.essayQueue.length) {
            this.goHome();
            return;
        }
        this.renderEssay();
        window.scrollTo(0, 0);
    }

    // ==================== ITEM-SET MODE ====================

    openItemSetList() {
        this.currentMode = 'itemset';
        this.renderItemSetList();
        this.showScreen('itemset-list-screen');
    }

    renderItemSetList() {
        const sets = this.setsFor();
        this.$('isl-count').textContent = `${sets.length} item set${sets.length === 1 ? '' : 's'}`;
        const list = this.$('isl-list');
        list.innerHTML = '';
        if (sets.length === 0) {
            list.innerHTML = '<p class="empty-note">No item sets match the current filters.</p>';
            return;
        }
        sets.forEach(g => {
            const mc = g.questions.filter(q => q.type === 'mc').length;
            const essays = g.questions.length - mc;
            const attempted = g.questions.filter(q => this.stats[q.id] && this.stats[q.id].attempts).length;
            const missed = g.questions.filter(q => this.isMissed(q)).length;
            const topics = [...new Set(g.questions.map(q => q.topic))];
            const topicText = topics.slice(0, 2).join(' · ') + (topics.length > 2 ? ` +${topics.length - 2}` : '');
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'isl-card';
            card.dataset.group = g.id;
            card.innerHTML = `
                <span class="isl-card-title">${this.esc(g.title)}</span>
                <span class="isl-meta">${this.esc(g.section)} · ${g.questions.length} questions
                    (${mc} MC${essays ? `, ${essays} essay` : ''})</span>
                <span class="isl-topics">${this.esc(topicText)}</span>
                <span class="isl-stats">Attempted ${attempted}/${g.questions.length}${missed ? ` · <b class="isl-missed">${missed} missed</b>` : ''}</span>`;
            card.addEventListener('click', () => this.startItemSet(g.id));
            list.appendChild(card);
        });
    }

    startItemSet(groupId) {
        const g = this.groupById.get(groupId);
        const shuffle = this.$('itemset-shuffle-choices').checked;
        this.is = {
            group: g, qs: g.questions, mode: 'exam', index: 0, submitted: false,
            answers: {}, drafts: {}, order: {}, grades: {}, snaps: {}
        };
        g.questions.forEach(q => {
            if (q.type === 'mc') this.is.order[q.id] = this.buildChoiceOrder(q, shuffle);
        });
        this.currentMode = 'itemset';
        this.$('is-vignette-title').textContent = g.title;
        this.$('is-vignette-body').innerHTML = this.md((this.vignettes[g.id] || {}).text || '');
        this.$('is-vignette').classList.remove('collapsed');
        this.$('is-vignette-toggle').textContent = 'Hide';
        this.showScreen('itemset-screen');
        this.renderItemSet();
    }

    leaveItemSet() {
        if (this.is.mode === 'exam' && !this.is.submitted &&
            !confirm('Leave this set? Your answers will be lost.')) {
            return;
        }
        this.openItemSetList();
    }

    renderItemSet() {
        const is = this.is;
        const q = is.qs[is.index];
        const review = is.mode === 'review';

        this.$('is-title').textContent = is.group.title;
        this.$('is-counter').textContent =
            `${review ? 'Review · ' : ''}Question ${is.index + 1} of ${is.qs.length}`;
        this.$('is-submit-btn').textContent = review ? 'Back to results' : 'Submit set';

        // question navigation strip
        const nav = this.$('is-qnav');
        nav.innerHTML = '';
        is.qs.forEach((item, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'is-qnav-btn';
            b.textContent = i + 1;
            if (i === is.index) b.classList.add('current');
            const status = review ? this.itemStatus(item) : (this.isAnswered(item) ? 'answered' : '');
            if (status) b.classList.add(status);
            b.addEventListener('click', () => { is.index = i; this.renderItemSet(); });
            nav.appendChild(b);
        });

        const pane = this.$('is-question');
        pane.innerHTML = '';
        const card = document.createElement('div');
        card.className = 'question-card is-card';
        const kind = q.type === 'essay' ? 'Essay' : 'Multiple choice';
        card.innerHTML = `
            <div class="is-q-head"><span class="topic-badge">${kind}</span>
                <span class="is-q-num">Question ${is.index + 1}</span>
                ${review ? `<span class="topic-badge">${this.esc(q.topic)}</span>` : ''}</div>
            ${review ? `<h2 class="question-title">${this.esc(q.title)}</h2>` : ''}
            <div class="question-text md">${this.md(q.stem)}</div>`;
        pane.appendChild(card);

        if (q.type === 'mc') this.renderItemChoices(card, q, review);
        else this.renderItemEssay(card, q, review);

        if (review) this.renderItemReviewExtras(pane, q);

        const nav2 = document.createElement('div');
        nav2.className = 'is-nav-buttons';
        nav2.innerHTML = `<button type="button" class="btn btn-secondary" id="is-prev-btn">← Previous</button>
            <button type="button" class="btn btn-secondary" id="is-next-btn">Next →</button>`;
        pane.appendChild(nav2);
        const prev = nav2.querySelector('#is-prev-btn'), next = nav2.querySelector('#is-next-btn');
        prev.disabled = is.index === 0;
        next.disabled = is.index === is.qs.length - 1;
        prev.addEventListener('click', () => { is.index--; this.renderItemSet(); });
        next.addEventListener('click', () => { is.index++; this.renderItemSet(); });
    }

    isAnswered(q) {
        const is = this.is;
        return q.type === 'mc' ? !!is.answers[q.id] : !!(is.drafts[q.id] && is.drafts[q.id].trim());
    }

    renderItemChoices(card, q, review) {
        const is = this.is;
        const container = document.createElement('div');
        container.className = 'choices';
        const order = is.order[q.id];
        const picked = is.answers[q.id];
        order.forEach((orig, i) => {
            const el = this.createChoiceEl(q, orig, String.fromCharCode(65 + i));
            if (review) {
                el.classList.add('disabled');
                if (orig === q.correctAnswer) el.classList.add('correct');
                else if (orig === picked) el.classList.add('incorrect');
                this.addChoiceNote(el, q, orig);
            } else {
                if (orig === picked) el.classList.add('selected');
                el.addEventListener('click', () => { is.answers[q.id] = orig; this.renderItemSet(); });
            }
            container.appendChild(el);
        });
        card.appendChild(container);
    }

    renderItemEssay(card, q, review) {
        const is = this.is;
        if (review) {
            const draft = (is.drafts[q.id] || '').trim();
            const box = document.createElement('div');
            box.className = 'essay-yours';
            box.innerHTML = `<h4>Your answer</h4>${draft ? `<p>${this.esc(draft).replace(/\n/g, '<br>')}</p>` : '<p class="muted">(left blank)</p>'}`;
            card.appendChild(box);
            return;
        }
        const ta = document.createElement('textarea');
        ta.className = 'essay-draft';
        ta.rows = 8;
        ta.placeholder = 'Write your answer here (not saved)';
        ta.value = is.drafts[q.id] || '';
        ta.addEventListener('input', () => {
            is.drafts[q.id] = ta.value;
            const btn = this.$('is-qnav').children[is.index];
            if (btn) btn.classList.toggle('answered', ta.value.trim().length > 0);
        });
        card.appendChild(ta);
    }

    /** Review view: model answer + grading for essays, key principle and flag for all. */
    renderItemReviewExtras(pane, q) {
        const is = this.is;
        const extras = document.createElement('div');
        extras.className = 'explanation-panel';
        if (q.type === 'essay') {
            extras.innerHTML = `<h3 class="panel-heading">Model answer</h3>
                <div class="model-answer md">${this.md(q.modelAnswer)}</div>`;
        } else {
            const picked = is.answers[q.id];
            const ok = picked === q.correctAnswer;
            const cls = !picked ? 'incorrect' : (ok ? 'correct' : 'incorrect');
            const txt = !picked ? 'Not answered' : (ok ? 'Correct' : 'Incorrect');
            extras.innerHTML = `<div class="result-header ${cls}"><span class="result-text">${txt}</span></div>`;
            const msg = this.shuffleNote(q, is.order[q.id]);
            if (msg) extras.innerHTML += `<p class="shuffle-note">${this.esc(msg)}</p>`;
        }
        const principle = document.createElement('div');
        principle.className = 'callout principle hidden';
        const flag = document.createElement('div');
        flag.className = 'callout flag hidden';
        extras.appendChild(principle);
        extras.appendChild(flag);
        this.fillCallouts(q, principle, flag);

        if (q.type === 'essay') {
            const block = document.createElement('div');
            block.innerHTML = `<p class="grade-prompt">How did you do?</p>
                <div class="grade-row">
                    <button class="btn btn-grade grade-got" data-grade="correct">Got it</button>
                    <button class="btn btn-grade grade-partial" data-grade="partial">Partial</button>
                    <button class="btn btn-grade grade-missed" data-grade="incorrect">Missed</button>
                </div>`;
            const current = is.grades[q.id];
            block.querySelectorAll('.btn-grade').forEach(b => {
                if (b.dataset.grade === current) b.classList.add('chosen');
                b.addEventListener('click', () => this.gradeItemEssay(q, b.dataset.grade));
            });
            extras.appendChild(block);
        }
        pane.appendChild(extras);
    }

    gradeItemEssay(q, result) {
        const is = this.is;
        if (is.grades[q.id]) this.revertResult(q.id, is.snaps[q.id]);
        is.snaps[q.id] = this.recordResult(q.id, result);
        is.grades[q.id] = result;
        this.renderItemSet();
    }

    /** 'correct' | 'incorrect' | 'partial' | 'ungraded' | 'unanswered' for review/results. */
    itemStatus(q) {
        const is = this.is;
        if (q.type === 'essay') return is.grades[q.id] || 'ungraded';
        if (!is.answers[q.id]) return 'unanswered';
        return is.answers[q.id] === q.correctAnswer ? 'correct' : 'incorrect';
    }

    submitItemSet() {
        const is = this.is;
        const open = is.qs.filter(q => q.type === 'mc' && !is.answers[q.id]).length;
        if (open && !confirm(`${open} multiple-choice question${open > 1 ? 's are' : ' is'} unanswered. Submit anyway?`)) {
            return;
        }
        is.qs.forEach(q => {
            if (q.type === 'mc' && is.answers[q.id]) {
                this.recordResult(q.id, is.answers[q.id] === q.correctAnswer ? 'correct' : 'incorrect');
            }
        });
        is.submitted = true;
        is.mode = 'review';
        this.showItemSetResults();
    }

    showItemSetResults() {
        const is = this.is;
        is.mode = 'review';
        this.showScreen('itemset-results-screen');
        this.$('isr-title').textContent = is.group.title;

        const mc = is.qs.filter(q => q.type === 'mc');
        const essays = is.qs.filter(q => q.type === 'essay');
        const mcRight = mc.filter(q => this.itemStatus(q) === 'correct').length;
        const tally = r => essays.filter(q => is.grades[q.id] === r).length;
        const ungraded = essays.filter(q => !is.grades[q.id]).length;
        const points = mcRight + tally('correct') + 0.5 * tally('partial');
        const pct = Math.round((points / is.qs.length) * 100);

        this.$('isr-percent').textContent = `${pct}%`;
        this.$('isr-detail').textContent = `Multiple choice: ${mcRight} of ${mc.length} correct`;
        this.$('isr-essay-detail').textContent = essays.length
            ? `Essays: ${tally('correct')} got it, ${tally('partial')} partial, ${tally('incorrect')} missed` +
              (ungraded ? `, ${ungraded} not yet self-graded (open them below)` : '')
            : '';

        const list = this.$('isr-list');
        list.innerHTML = '';
        const icons = { correct: '✓', incorrect: '✗', partial: '◐', ungraded: '…', unanswered: '–' };
        is.qs.forEach((q, i) => {
            const status = this.itemStatus(q);
            const row = document.createElement('div');
            row.className = 'review-item isr-row';
            row.innerHTML = `<span class="review-status status-${status}">${icons[status]}</span>
                <span class="review-title">Q${i + 1}. ${this.esc(q.title)}
                    <small class="isr-kind">${q.type === 'essay' ? 'Essay' : 'MC'} · ${status}</small></span>
                <button type="button" class="btn btn-secondary btn-small">Review</button>`;
            row.querySelector('button').addEventListener('click', () => {
                is.index = i;
                is.mode = 'review';
                this.showScreen('itemset-screen');
                this.renderItemSet();
            });
            list.appendChild(row);
        });
    }

    // ==================== QBANK MODE ====================

    startQbank() {
        this.qbankBase = this.poolFor('qbank');
        if (this.qbankBase.length === 0) {
            alert('No questions available for the current filters.');
            return;
        }
        this.currentMode = 'qbank';
        this.$('qbank-search').value = '';
        this.$('qbank-type').value = 'all';
        this.showScreen('qbank-screen');
        this.applyQbankFilters();
    }

    haystack(q) {
        if (!q._hay) {
            q._hay = [q.title, q.section, q.topic, q.context, q.stem,
                q.choices.map(c => c.text).join(' '),
                Object.values(q.choiceNotes).map(n => n.text).join(' '),
                q.modelAnswer || '', q.keyPrinciple, q.flag].join(' ').toLowerCase();
        }
        return q._hay;
    }

    applyQbankFilters() {
        const terms = this.$('qbank-search').value.toLowerCase().split(/\s+/).filter(Boolean);
        const type = this.$('qbank-type').value;
        this.qbankFiltered = this.qbankBase.filter(q =>
            (type === 'all' || q.type === type) && terms.every(t => this.haystack(q).includes(t)));
        this.qbankShown = 0;
        this.$('qbank-content').innerHTML = '';
        this.$('qbank-counter').textContent =
            `${this.qbankFiltered.length} of ${this.qbankBase.length} questions`;
        this.renderQbankPage();
    }

    renderQbankPage() {
        const container = this.$('qbank-content');
        const slice = this.qbankFiltered.slice(this.qbankShown, this.qbankShown + QBANK_PAGE);
        slice.forEach((q, i) => {
            const item = document.createElement('details');
            item.className = 'qbank-item';
            item.dataset.id = q.id;
            const s = this.stats[q.id];
            const stat = s && s.attempts ? `<span class="qbank-stat">${s.correct || 0}✓ ${s.incorrect || 0}✗${s.partial ? ` ${s.partial}◐` : ''}</span>` : '';
            item.innerHTML = `<summary>
                <span class="qbank-number">#${this.qbankShown + i + 1}</span>
                <span class="qbank-sum-title">${this.esc(q.title)}</span>
                <span class="topic-badge">${q.type === 'essay' ? 'Essay' : 'MC'}</span>
                <span class="topic-badge">${this.esc(q.topic)}</span>${stat}</summary>
                <div class="qbank-body"></div>`;
            container.appendChild(item);
        });
        this.qbankShown += slice.length;
        const left = this.qbankFiltered.length - this.qbankShown;
        const more = this.$('qbank-more-btn');
        more.classList.toggle('hidden', left <= 0);
        more.textContent = `Show more (${left} left)`;
        if (this.qbankFiltered.length === 0) {
            container.innerHTML = '<p class="empty-note">No questions match.</p>';
        }
    }

    /** Render a Qbank entry lazily, the first time it is opened. */
    fillQbankItem(item) {
        const body = item.querySelector('.qbank-body');
        if (body.dataset.filled) return;
        body.dataset.filled = '1';
        const q = this.byId.get(item.dataset.id);
        let html = `<div class="qbank-meta">${this.esc(q.section)} · ${this.esc(q.topic)} · <code>${this.esc(q.source)}</code></div>`;
        if (q.group && this.vignettes[q.group]) {
            html += `<details class="qbank-vignette"><summary>Full vignette: ${this.esc(this.vignettes[q.group].title)}</summary>
                <div class="md">${this.md(this.vignettes[q.group].text)}</div></details>`;
        }
        if (q.context) html += `<div class="q-context md">${this.md(q.context)}</div>`;
        html += `<div class="question-text md">${this.md(q.stem)}</div>`;
        if (q.type === 'mc') {
            html += '<div class="qbank-choices">';
            q.choices.forEach(c => {
                const note = q.choiceNotes[c.letter];
                const correct = c.letter === q.correctAnswer;
                html += `<div class="qbank-choice ${correct ? 'correct' : ''}">
                    <div class="qbank-choice-head"><strong>${c.letter}.</strong> <span class="md">${this.mdi(c.text)}</span>${correct ? ' ✓' : ''}</div>
                    ${note ? `<div class="choice-note ${note.verdict} md">${this.md(`**${note.verdict === 'correct' ? 'Correct.' : 'Wrong.'}** ${note.text}`)}</div>` : ''}
                </div>`;
            });
            html += '</div>';
        } else {
            html += `<div class="qbank-answer"><h4>Model answer</h4><div class="model-answer md">${this.md(q.modelAnswer)}</div></div>`;
        }
        if (q.keyPrinciple) html += `<div class="callout principle"><h4>Key principle</h4>${this.md(q.keyPrinciple)}</div>`;
        if (q.flag) html += `<div class="callout flag"><strong>⚠ Flag:</strong> ${this.mdi(q.flag)}</div>`;
        body.innerHTML = html;
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CFAPracticeTester();
});
