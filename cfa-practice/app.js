/**
 * CFA Practice Tester - Main Application Logic
 */

class CFAPracticeTester {
    constructor() {
        this.questions = [];
        this.currentQuiz = [];
        this.currentIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.results = [];
        this.settings = {
            questionsPerQuiz: 10,
            shuffleQuestions: true,
            shuffleChoices: true
        };

        // Mode state
        this.currentMode = 'quiz'; // 'quiz', 'learn', 'qbank'

        // Learn mode state
        this.learnPool = [];
        this.learnMastered = [];
        this.learnTotal = 0;

        // Qbank state
        this.qbankQuestions = [];
        this.qbankIndex = 0;

        // Long-term per-question stats
        this.questionStats = {};

        this.init();
    }

    async init() {
        await this.loadQuestions();
        this.loadQuestionStats();
        this.bindEvents();
        this.updateStartScreen();
        this.checkLearnProgress();
    }

    async loadQuestions() {
        try {
            const response = await fetch('questions.json');
            const data = await response.json();
            this.questions = (data.questions || []).map((q, index) => ({
                id: q.id || index + 1,
                title: q.title || `Question ${index + 1}`,
                topic: q.topic || 'General',
                question: q.question || '',
                choices: q.choices || [],
                correctAnswer: q.correctAnswer || 'A',
                explanation: q.explanation || '',
                keyFormulas: q.keyFormulas || [],
                yourMistake: q.yourMistake || ''
            }));
            this.examTitle = data.examTitle || 'CFA Practice Tester';
            if (data.settings) {
                this.settings = { ...this.settings, ...data.settings };
            }
        } catch (error) {
            console.error('Error loading questions:', error);
            this.questions = [];
        }
    }

    bindEvents() {
        // Mode buttons
        document.getElementById('quiz-mode-btn').addEventListener('click', () => this.selectMode('quiz'));
        document.getElementById('learn-mode-btn').addEventListener('click', () => this.selectMode('learn'));
        document.getElementById('qbank-mode-btn').addEventListener('click', () => this.selectMode('qbank'));

        // Start button
        document.getElementById('start-btn').addEventListener('click', () => this.startCurrentMode());

        // Quiz screen
        document.getElementById('submit-btn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());

        // Results screen
        document.getElementById('new-quiz-btn').addEventListener('click', () => this.showScreen('start-screen'));
        document.getElementById('retry-wrong-btn').addEventListener('click', () => this.retryWrongAnswers());

        // Learn screen
        document.getElementById('learn-submit-btn').addEventListener('click', () => this.submitLearnAnswer());
        document.getElementById('learn-idk-btn').addEventListener('click', () => this.learnIDontKnow());
        document.getElementById('learn-next-btn').addEventListener('click', () => this.nextLearnQuestion());
        document.getElementById('learn-again-btn').addEventListener('click', () => this.startLearn());
        document.getElementById('learn-home-btn').addEventListener('click', () => this.showScreen('start-screen'));

        // Learn progress persistence
        document.getElementById('learn-resume-btn').addEventListener('click', () => this.resumeLearn());
        document.getElementById('learn-reset-btn').addEventListener('click', () => this.resetLearnProgress());
        document.getElementById('learn-export-btn').addEventListener('click', () => this.exportLearnProgress());
        document.getElementById('learn-import-btn').addEventListener('click', () => {
            document.getElementById('learn-import-file').click();
        });
        document.getElementById('learn-import-file').addEventListener('change', (e) => this.importLearnProgress(e));

        // Qbank screen
        document.getElementById('qbank-back-btn').addEventListener('click', () => this.showScreen('start-screen'));

        // Long-term stats export/import
        document.getElementById('stats-export-btn').addEventListener('click', () => this.exportQuestionStats());
        document.getElementById('stats-import-btn').addEventListener('click', () => {
            document.getElementById('stats-import-file').click();
        });
        document.getElementById('stats-import-file').addEventListener('change', (e) => this.importQuestionStats(e));

        // Options
        document.getElementById('shuffle-questions').addEventListener('change', (e) => {
            this.settings.shuffleQuestions = e.target.checked;
        });
        document.getElementById('shuffle-choices').addEventListener('change', (e) => {
            this.settings.shuffleChoices = e.target.checked;
        });
    }

    selectMode(mode) {
        this.currentMode = mode;

        // Update button states
        document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('btn-mode-active'));
        document.getElementById(`${mode}-mode-btn`).classList.add('btn-mode-active');

        // Show/hide option panels
        document.getElementById('quiz-options').classList.toggle('hidden', mode !== 'quiz');
        document.getElementById('learn-options').classList.toggle('hidden', mode !== 'learn');
        document.getElementById('qbank-options').classList.toggle('hidden', mode !== 'qbank');

        // Update start button text
        const startBtn = document.getElementById('start-btn');
        if (mode === 'quiz') startBtn.textContent = 'Start Quiz';
        else if (mode === 'learn') startBtn.textContent = 'Start Learning';
        else if (mode === 'qbank') startBtn.textContent = 'Open Qbank';
    }

    startCurrentMode() {
        if (this.currentMode === 'quiz') this.startQuiz();
        else if (this.currentMode === 'learn') this.startLearn();
        else if (this.currentMode === 'qbank') this.startQbank();
    }

    updateStartScreen() {
        document.getElementById('total-questions').textContent = this.questions.length;

        const topics = [...new Set(this.questions.map(q => q.topic))];
        document.getElementById('total-topics').textContent = topics.length;

        // Populate single shared topic filter
        const select = document.getElementById('topic-filter');
        if (select) {
            select.innerHTML = '<option value="all">All Topics</option>';
            topics.forEach(topic => {
                const option = document.createElement('option');
                option.value = topic;
                option.textContent = topic;
                select.appendChild(option);
            });
        }

        const numSelect = document.getElementById('num-questions');
        const maxQuestions = this.questions.length;
        Array.from(numSelect.options).forEach(option => {
            if (option.value !== 'all' && parseInt(option.value) > maxQuestions) {
                option.disabled = true;
            }
        });
    }

    // ==================== QUIZ MODE ====================

    startQuiz() {
        const numQuestions = document.getElementById('num-questions').value;
        const topicFilter = document.getElementById('topic-filter').value;

        let availableQuestions = topicFilter === 'all'
            ? [...this.questions]
            : this.questions.filter(q => q.topic === topicFilter);

        if (availableQuestions.length === 0) {
            alert('No questions available for the selected topic.');
            return;
        }

        if (this.settings.shuffleQuestions) {
            availableQuestions = this.shuffle(availableQuestions);
        }

        const count = numQuestions === 'all'
            ? availableQuestions.length
            : Math.min(parseInt(numQuestions), availableQuestions.length);

        this.currentQuiz = availableQuestions.slice(0, count);
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];

        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.currentQuiz[this.currentIndex];
        this.selectedAnswer = null;

        document.getElementById('question-counter').textContent =
            `Question ${this.currentIndex + 1} of ${this.currentQuiz.length}`;
        document.getElementById('score-display').textContent =
            `Score: ${this.score}/${this.currentIndex}`;
        document.getElementById('progress-fill').style.width =
            `${((this.currentIndex) / this.currentQuiz.length) * 100}%`;

        document.getElementById('topic-badge').textContent = question.topic || 'General';
        document.getElementById('question-title').textContent = question.title || `Question ${question.id}`;
        document.getElementById('question-text').textContent = question.question;

        let choices = [...question.choices];
        if (this.settings.shuffleChoices) {
            choices = this.shuffle(choices);
        }

        const container = document.getElementById('choices-container');
        container.innerHTML = '';

        choices.forEach((choice) => {
            const choiceEl = document.createElement('div');
            choiceEl.className = 'choice';
            choiceEl.dataset.letter = choice.letter;
            choiceEl.innerHTML = `
                <span class="choice-letter">${choice.letter}</span>
                <span class="choice-text">${choice.text}</span>
            `;
            choiceEl.addEventListener('click', () => this.selectChoice(choiceEl, choice.letter));
            container.appendChild(choiceEl);
        });

        document.getElementById('submit-btn').disabled = true;
        document.getElementById('explanation-panel').classList.add('hidden');
    }

    selectChoice(element, letter) {
        document.querySelectorAll('#choices-container .choice').forEach(c => c.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedAnswer = letter;
        document.getElementById('submit-btn').disabled = false;
    }

    submitAnswer() {
        if (!this.selectedAnswer) return;

        const question = this.currentQuiz[this.currentIndex];
        const isCorrect = this.selectedAnswer === question.correctAnswer;

        if (isCorrect) this.score++;
        this.recordQuestionStat(question.id, isCorrect);

        this.results.push({
            question: question,
            userAnswer: this.selectedAnswer,
            correct: isCorrect
        });

        document.querySelectorAll('#choices-container .choice').forEach(choice => {
            choice.classList.add('disabled');
            const letter = choice.dataset.letter;
            if (letter === question.correctAnswer) {
                choice.classList.add('correct');
            } else if (letter === this.selectedAnswer && !isCorrect) {
                choice.classList.add('incorrect');
            }
        });

        this.showExplanation(question, isCorrect);
        document.getElementById('submit-btn').style.display = 'none';
    }

    showExplanation(question, isCorrect) {
        const panel = document.getElementById('explanation-panel');
        panel.classList.remove('hidden');

        const header = document.getElementById('result-header');
        header.className = `result-header ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('result-icon').textContent = isCorrect ? '✓' : '✗';
        document.getElementById('result-text').textContent = isCorrect ? 'Correct!' : 'Incorrect';

        document.getElementById('explanation-text').textContent = question.explanation || 'No explanation provided.';

        const formulasSection = document.getElementById('key-formulas');
        if (question.keyFormulas && question.keyFormulas.length > 0) {
            formulasSection.classList.remove('hidden');
            const list = document.getElementById('formulas-list');
            list.innerHTML = '';
            question.keyFormulas.forEach(formula => {
                const li = document.createElement('li');
                li.textContent = formula;
                list.appendChild(li);
            });
        } else {
            formulasSection.classList.add('hidden');
        }

        const mistakeSection = document.getElementById('your-mistake');
        if (!isCorrect && question.yourMistake) {
            mistakeSection.classList.remove('hidden');
            document.getElementById('mistake-text').textContent = question.yourMistake;
        } else {
            mistakeSection.classList.add('hidden');
        }

        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = this.currentIndex < this.currentQuiz.length - 1 ? 'Next Question' : 'See Results';
    }

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex >= this.currentQuiz.length) {
            this.showResults();
        } else {
            document.getElementById('submit-btn').style.display = 'block';
            this.displayQuestion();
        }
    }

    showResults() {
        this.showScreen('results-screen');

        const percent = Math.round((this.score / this.currentQuiz.length) * 100);
        document.getElementById('final-percent').textContent = `${percent}%`;
        document.getElementById('final-score-detail').textContent =
            `${this.score} out of ${this.currentQuiz.length} correct`;

        const topicStats = {};
        this.results.forEach(result => {
            const topic = result.question.topic || 'General';
            if (!topicStats[topic]) topicStats[topic] = { correct: 0, total: 0 };
            topicStats[topic].total++;
            if (result.correct) topicStats[topic].correct++;
        });

        const breakdownContainer = document.getElementById('topic-breakdown');
        breakdownContainer.innerHTML = '';
        Object.entries(topicStats).forEach(([topic, stats]) => {
            const pct = Math.round((stats.correct / stats.total) * 100);
            const div = document.createElement('div');
            div.className = 'topic-result';
            div.innerHTML = `
                <span class="topic-name">${topic}</span>
                <span class="topic-score ${pct >= 70 ? 'good' : 'bad'}">${stats.correct}/${stats.total} (${pct}%)</span>
            `;
            breakdownContainer.appendChild(div);
        });

        const reviewContainer = document.getElementById('question-review');
        reviewContainer.innerHTML = '';
        this.results.forEach((result, index) => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `
                <span class="review-status">${result.correct ? '✓' : '✗'}</span>
                <span class="review-title">${result.question.title || `Question ${index + 1}`}</span>
            `;
            reviewContainer.appendChild(div);
        });

        const wrongAnswers = this.results.filter(r => !r.correct);
        document.getElementById('retry-wrong-btn').style.display = wrongAnswers.length > 0 ? 'block' : 'none';
    }

    retryWrongAnswers() {
        const wrongQuestions = this.results.filter(r => !r.correct).map(r => r.question);
        if (wrongQuestions.length === 0) {
            alert('You got all questions correct!');
            return;
        }

        this.currentQuiz = this.settings.shuffleQuestions ? this.shuffle(wrongQuestions) : wrongQuestions;
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];

        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    // ==================== LEARN MODE ====================

    startLearn() {
        const topicFilter = document.getElementById('topic-filter').value;

        let availableQuestions = topicFilter === 'all'
            ? [...this.questions]
            : this.questions.filter(q => q.topic === topicFilter);

        if (availableQuestions.length === 0) {
            alert('No questions available for the selected topic.');
            return;
        }

        this.learnPool = this.shuffle([...availableQuestions]);
        this.learnMastered = [];
        this.learnTotal = availableQuestions.length;
        this.learnTopic = topicFilter;

        localStorage.removeItem('cfa-learn-progress');
        document.getElementById('learn-resume-banner').classList.add('hidden');

        this.showScreen('learn-screen');
        this.displayLearnQuestion();
    }

    displayLearnQuestion() {
        if (this.learnPool.length === 0) {
            localStorage.removeItem('cfa-learn-progress');
            this.showScreen('learn-complete-screen');
            return;
        }

        const question = this.learnPool[0];
        this.selectedAnswer = null;

        // Update progress
        document.getElementById('learn-counter').textContent = `Remaining: ${this.learnPool.length}`;
        document.getElementById('learn-mastered').textContent = `Mastered: ${this.learnMastered.length}`;
        document.getElementById('learn-progress-fill').style.width =
            `${(this.learnMastered.length / this.learnTotal) * 100}%`;

        document.getElementById('learn-topic-badge').textContent = question.topic || 'General';
        document.getElementById('learn-question-title').textContent = question.title || `Question ${question.id}`;
        document.getElementById('learn-question-text').textContent = question.question;

        let choices = this.shuffle([...question.choices]);

        const container = document.getElementById('learn-choices-container');
        container.innerHTML = '';

        choices.forEach((choice) => {
            const choiceEl = document.createElement('div');
            choiceEl.className = 'choice';
            choiceEl.dataset.letter = choice.letter;
            choiceEl.innerHTML = `
                <span class="choice-letter">${choice.letter}</span>
                <span class="choice-text">${choice.text}</span>
            `;
            choiceEl.addEventListener('click', () => this.selectLearnChoice(choiceEl, choice.letter));
            container.appendChild(choiceEl);
        });

        document.getElementById('learn-submit-btn').disabled = true;
        document.getElementById('learn-submit-btn').style.display = 'block';
        document.getElementById('learn-idk-btn').style.display = 'block';
        document.getElementById('learn-explanation-panel').classList.add('hidden');
    }

    selectLearnChoice(element, letter) {
        document.querySelectorAll('#learn-choices-container .choice').forEach(c => c.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedAnswer = letter;
        document.getElementById('learn-submit-btn').disabled = false;
    }

    submitLearnAnswer() {
        if (!this.selectedAnswer) return;

        const question = this.learnPool[0];
        const isCorrect = this.selectedAnswer === question.correctAnswer;
        this.recordQuestionStat(question.id, isCorrect);

        document.querySelectorAll('#learn-choices-container .choice').forEach(choice => {
            choice.classList.add('disabled');
            const letter = choice.dataset.letter;
            if (letter === question.correctAnswer) {
                choice.classList.add('correct');
            } else if (letter === this.selectedAnswer && !isCorrect) {
                choice.classList.add('incorrect');
            }
        });

        // Show explanation
        const panel = document.getElementById('learn-explanation-panel');
        panel.classList.remove('hidden');

        const header = document.getElementById('learn-result-header');
        header.className = `result-header ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('learn-result-icon').textContent = isCorrect ? '✓' : '✗';
        document.getElementById('learn-result-text').textContent = isCorrect
            ? 'Correct! Question mastered.'
            : 'Incorrect. You\'ll see this again.';

        document.getElementById('learn-explanation-text').textContent = question.explanation || 'No explanation provided.';

        const formulasSection = document.getElementById('learn-key-formulas');
        if (question.keyFormulas && question.keyFormulas.length > 0) {
            formulasSection.classList.remove('hidden');
            const list = document.getElementById('learn-formulas-list');
            list.innerHTML = '';
            question.keyFormulas.forEach(formula => {
                const li = document.createElement('li');
                li.textContent = formula;
                list.appendChild(li);
            });
        } else {
            formulasSection.classList.add('hidden');
        }

        document.getElementById('learn-submit-btn').style.display = 'none';
        document.getElementById('learn-idk-btn').style.display = 'none';

        // Update pool
        if (isCorrect) {
            this.learnMastered.push(this.learnPool.shift());
        } else {
            // Move to random position in back half of pool
            const q = this.learnPool.shift();
            const minPos = Math.floor(this.learnPool.length / 2);
            const insertPos = minPos + Math.floor(Math.random() * (this.learnPool.length - minPos + 1));
            this.learnPool.splice(insertPos, 0, q);
        }

        // Auto-save progress
        this.saveLearnProgress();
    }

    learnIDontKnow() {
        const question = this.learnPool[0];
        this.recordQuestionStat(question.id, false);

        // Highlight correct answer
        document.querySelectorAll('#learn-choices-container .choice').forEach(choice => {
            choice.classList.add('disabled');
            if (choice.dataset.letter === question.correctAnswer) {
                choice.classList.add('correct');
            }
        });

        // Show explanation
        const panel = document.getElementById('learn-explanation-panel');
        panel.classList.remove('hidden');

        const header = document.getElementById('learn-result-header');
        header.className = 'result-header incorrect';
        document.getElementById('learn-result-icon').textContent = '?';
        document.getElementById('learn-result-text').textContent = 'You\'ll see this again.';

        document.getElementById('learn-explanation-text').textContent = question.explanation || 'No explanation provided.';

        const formulasSection = document.getElementById('learn-key-formulas');
        if (question.keyFormulas && question.keyFormulas.length > 0) {
            formulasSection.classList.remove('hidden');
            const list = document.getElementById('learn-formulas-list');
            list.innerHTML = '';
            question.keyFormulas.forEach(formula => {
                const li = document.createElement('li');
                li.textContent = formula;
                list.appendChild(li);
            });
        } else {
            formulasSection.classList.add('hidden');
        }

        document.getElementById('learn-submit-btn').style.display = 'none';
        document.getElementById('learn-idk-btn').style.display = 'none';

        // Move to back half of pool (same as wrong answer)
        const q = this.learnPool.shift();
        const minPos = Math.floor(this.learnPool.length / 2);
        const insertPos = minPos + Math.floor(Math.random() * (this.learnPool.length - minPos + 1));
        this.learnPool.splice(insertPos, 0, q);

        this.saveLearnProgress();
    }

    nextLearnQuestion() {
        this.displayLearnQuestion();
    }

    // Learn mode persistence

    saveLearnProgress() {
        const progress = {
            masteredIds: this.learnMastered.map(q => q.id),
            poolIds: this.learnPool.map(q => q.id),
            topic: this.learnTopic || 'all',
            total: this.learnTotal,
            timestamp: Date.now()
        };
        localStorage.setItem('cfa-learn-progress', JSON.stringify(progress));
    }

    checkLearnProgress() {
        const saved = localStorage.getItem('cfa-learn-progress');
        if (!saved) return;

        try {
            const progress = JSON.parse(saved);
            if (progress.poolIds && progress.poolIds.length > 0) {
                const banner = document.getElementById('learn-resume-banner');
                const detail = document.getElementById('learn-resume-detail');
                const mastered = progress.masteredIds ? progress.masteredIds.length : 0;
                const remaining = progress.poolIds.length;
                const topic = progress.topic === 'all' ? 'All Topics' : progress.topic;
                const date = new Date(progress.timestamp).toLocaleDateString();
                detail.textContent = `${mastered} mastered, ${remaining} remaining (${topic}) — saved ${date}`;
                banner.classList.remove('hidden');
            }
        } catch (e) {
            localStorage.removeItem('cfa-learn-progress');
        }
    }

    resumeLearn() {
        const saved = localStorage.getItem('cfa-learn-progress');
        if (!saved) return;

        try {
            const progress = JSON.parse(saved);
            const questionMap = new Map(this.questions.map(q => [q.id, q]));

            this.learnPool = progress.poolIds
                .map(id => questionMap.get(id))
                .filter(q => q !== undefined);
            this.learnMastered = (progress.masteredIds || [])
                .map(id => questionMap.get(id))
                .filter(q => q !== undefined);
            this.learnTotal = progress.total || (this.learnPool.length + this.learnMastered.length);
            this.learnTopic = progress.topic || 'all';

            this.showScreen('learn-screen');
            this.displayLearnQuestion();
        } catch (e) {
            alert('Could not restore progress. Starting fresh.');
            this.startLearn();
        }
    }

    resetLearnProgress() {
        localStorage.removeItem('cfa-learn-progress');
        document.getElementById('learn-resume-banner').classList.add('hidden');
    }

    exportLearnProgress() {
        const saved = localStorage.getItem('cfa-learn-progress');
        if (!saved) {
            alert('No learn progress to export. Start a learn session first.');
            return;
        }

        const blob = new Blob([saved], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cfa-learn-progress-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importLearnProgress(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const progress = JSON.parse(e.target.result);
                if (!progress.poolIds || !Array.isArray(progress.poolIds)) {
                    throw new Error('Invalid format');
                }
                localStorage.setItem('cfa-learn-progress', JSON.stringify(progress));
                this.checkLearnProgress();
                alert('Progress imported! Click Resume to continue.');
            } catch (err) {
                alert('Invalid progress file.');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    // ==================== QBANK MODE ====================

    startQbank() {
        const topicFilter = document.getElementById('topic-filter').value;

        this.qbankQuestions = topicFilter === 'all'
            ? [...this.questions]
            : this.questions.filter(q => q.topic === topicFilter);

        if (this.qbankQuestions.length === 0) {
            alert('No questions available for the selected topic.');
            return;
        }

        this.showScreen('qbank-screen');
        this.displayAllQbankQuestions();
    }

    displayAllQbankQuestions() {
        document.getElementById('qbank-counter').textContent =
            `${this.qbankQuestions.length} Questions`;

        const container = document.getElementById('qbank-content');
        container.innerHTML = '';

        this.qbankQuestions.forEach((question, index) => {
            let formulasHtml = '';
            if (question.keyFormulas && question.keyFormulas.length > 0) {
                formulasHtml = `
                    <div class="qbank-formulas">
                        <h5>Key Formulas</h5>
                        <ul>
                            ${question.keyFormulas.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            const questionHtml = `
                <div class="qbank-item" id="qbank-q-${index}">
                    <div class="qbank-question">
                        <div class="qbank-question-header">
                            <span class="qbank-number">#${index + 1}</span>
                            <div class="topic-badge">${question.topic}</div>
                        </div>
                        <h3>${question.title}</h3>
                        <p>${question.question}</p>
                    </div>
                    <div class="qbank-choices">
                        ${question.choices.map(c => `
                            <div class="qbank-choice ${c.letter === question.correctAnswer ? 'correct' : ''}">
                                <strong>${c.letter}.</strong> ${c.text}
                                ${c.letter === question.correctAnswer ? ' ✓' : ''}
                            </div>
                        `).join('')}
                    </div>
                    <div class="qbank-answer">
                        <h4>Correct Answer: ${question.correctAnswer}</h4>
                    </div>
                    <div class="qbank-explanation">
                        <h4>Explanation</h4>
                        <p>${question.explanation || 'No explanation provided.'}</p>
                        ${formulasHtml}
                    </div>
                </div>
            `;

            container.innerHTML += questionHtml;
        });

        // Hide nav buttons since we show all questions now
        document.querySelector('.qbank-nav').style.display = 'none';
    }

    // ==================== LONG-TERM STATS ====================

    loadQuestionStats() {
        try {
            const saved = localStorage.getItem('cfa-question-stats');
            if (saved) this.questionStats = JSON.parse(saved);
        } catch (e) {
            this.questionStats = {};
        }
    }

    recordQuestionStat(questionId, isCorrect) {
        if (!this.questionStats[questionId]) {
            this.questionStats[questionId] = { correct: 0, incorrect: 0 };
        }
        if (isCorrect) {
            this.questionStats[questionId].correct++;
        } else {
            this.questionStats[questionId].incorrect++;
        }
        localStorage.setItem('cfa-question-stats', JSON.stringify(this.questionStats));
    }

    exportQuestionStats() {
        if (Object.keys(this.questionStats).length === 0) {
            alert('No stats to export yet. Answer some questions first.');
            return;
        }
        const blob = new Blob([JSON.stringify(this.questionStats, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cfa-question-stats-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importQuestionStats(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                // Merge: add imported counts to existing
                Object.entries(imported).forEach(([id, stats]) => {
                    if (!this.questionStats[id]) {
                        this.questionStats[id] = { correct: 0, incorrect: 0 };
                    }
                    this.questionStats[id].correct += (stats.correct || 0);
                    this.questionStats[id].incorrect += (stats.incorrect || 0);
                });
                localStorage.setItem('cfa-question-stats', JSON.stringify(this.questionStats));
                alert('Stats imported and merged successfully!');
            } catch (err) {
                alert('Invalid stats file.');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    // ==================== UTILS ====================

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');

        if (screenId === 'quiz-screen') {
            document.getElementById('submit-btn').style.display = 'block';
        }
        if (screenId === 'learn-screen') {
            document.getElementById('learn-submit-btn').style.display = 'block';
        }
    }

    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CFAPracticeTester();
});
