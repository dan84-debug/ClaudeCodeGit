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

        this.init();
    }

    async init() {
        await this.loadQuestions();
        this.bindEvents();
        this.updateStartScreen();
    }

    async loadQuestions() {
        try {
            const response = await fetch('questions.json');
            const data = await response.json();
            // Normalize questions - add defaults for optional fields
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
        // Start screen
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());

        // Quiz screen
        document.getElementById('submit-btn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());

        // Results screen
        document.getElementById('new-quiz-btn').addEventListener('click', () => this.showScreen('start-screen'));
        document.getElementById('retry-wrong-btn').addEventListener('click', () => this.retryWrongAnswers());

        // Options
        document.getElementById('shuffle-questions').addEventListener('change', (e) => {
            this.settings.shuffleQuestions = e.target.checked;
        });
        document.getElementById('shuffle-choices').addEventListener('change', (e) => {
            this.settings.shuffleChoices = e.target.checked;
        });
    }

    updateStartScreen() {
        document.getElementById('total-questions').textContent = this.questions.length;

        // Get unique topics
        const topics = [...new Set(this.questions.map(q => q.topic))];
        document.getElementById('total-topics').textContent = topics.length;

        // Populate topic filter
        const topicSelect = document.getElementById('topic-filter');
        topicSelect.innerHTML = '<option value="all">All Topics</option>';
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        });

        // Update number of questions options based on available questions
        const numSelect = document.getElementById('num-questions');
        const maxQuestions = this.questions.length;
        Array.from(numSelect.options).forEach(option => {
            if (option.value !== 'all' && parseInt(option.value) > maxQuestions) {
                option.disabled = true;
            }
        });
    }

    startQuiz() {
        // Get settings from UI
        const numQuestions = document.getElementById('num-questions').value;
        const topicFilter = document.getElementById('topic-filter').value;

        // Filter questions by topic
        let availableQuestions = topicFilter === 'all'
            ? [...this.questions]
            : this.questions.filter(q => q.topic === topicFilter);

        if (availableQuestions.length === 0) {
            alert('No questions available for the selected topic.');
            return;
        }

        // Shuffle if enabled
        if (this.settings.shuffleQuestions) {
            availableQuestions = this.shuffle(availableQuestions);
        }

        // Select number of questions
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

        // Update progress
        document.getElementById('question-counter').textContent =
            `Question ${this.currentIndex + 1} of ${this.currentQuiz.length}`;
        document.getElementById('score-display').textContent =
            `Score: ${this.score}/${this.currentIndex}`;
        document.getElementById('progress-fill').style.width =
            `${((this.currentIndex) / this.currentQuiz.length) * 100}%`;

        // Update topic badge
        document.getElementById('topic-badge').textContent = question.topic || 'General';

        // Display question
        document.getElementById('question-title').textContent = question.title || `Question ${question.id}`;
        document.getElementById('question-text').textContent = question.question;

        // Display choices
        let choices = [...question.choices];
        if (this.settings.shuffleChoices) {
            choices = this.shuffle(choices);
        }

        const container = document.getElementById('choices-container');
        container.innerHTML = '';

        choices.forEach((choice, index) => {
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

        // Reset UI
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('explanation-panel').classList.add('hidden');
    }

    selectChoice(element, letter) {
        // Remove previous selection
        document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));

        // Select new choice
        element.classList.add('selected');
        this.selectedAnswer = letter;

        // Enable submit button
        document.getElementById('submit-btn').disabled = false;
    }

    submitAnswer() {
        if (!this.selectedAnswer) return;

        const question = this.currentQuiz[this.currentIndex];
        const isCorrect = this.selectedAnswer === question.correctAnswer;

        if (isCorrect) {
            this.score++;
        }

        // Store result
        this.results.push({
            question: question,
            userAnswer: this.selectedAnswer,
            correct: isCorrect
        });

        // Update choices UI
        document.querySelectorAll('.choice').forEach(choice => {
            choice.classList.add('disabled');
            const letter = choice.dataset.letter;

            if (letter === question.correctAnswer) {
                choice.classList.add('correct');
            } else if (letter === this.selectedAnswer && !isCorrect) {
                choice.classList.add('incorrect');
            }
        });

        // Show explanation
        this.showExplanation(question, isCorrect);

        // Hide submit button
        document.getElementById('submit-btn').style.display = 'none';
    }

    showExplanation(question, isCorrect) {
        const panel = document.getElementById('explanation-panel');
        panel.classList.remove('hidden');

        // Result header
        const header = document.getElementById('result-header');
        header.className = `result-header ${isCorrect ? 'correct' : 'incorrect'}`;
        document.getElementById('result-icon').textContent = isCorrect ? '✓' : '✗';
        document.getElementById('result-text').textContent = isCorrect ? 'Correct!' : 'Incorrect';

        // Explanation text
        document.getElementById('explanation-text').textContent = question.explanation || 'No explanation provided.';

        // Key formulas
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

        // Your original mistake (only show if they got it wrong and mistake info exists)
        const mistakeSection = document.getElementById('your-mistake');
        if (!isCorrect && question.yourMistake) {
            mistakeSection.classList.remove('hidden');
            document.getElementById('mistake-text').textContent = question.yourMistake;
        } else {
            mistakeSection.classList.add('hidden');
        }

        // Update next button text
        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = this.currentIndex < this.currentQuiz.length - 1
            ? 'Next Question'
            : 'See Results';
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

        // Final score
        const percent = Math.round((this.score / this.currentQuiz.length) * 100);
        document.getElementById('final-percent').textContent = `${percent}%`;
        document.getElementById('final-score-detail').textContent =
            `${this.score} out of ${this.currentQuiz.length} correct`;

        // Topic breakdown
        const topicStats = {};
        this.results.forEach(result => {
            const topic = result.question.topic || 'General';
            if (!topicStats[topic]) {
                topicStats[topic] = { correct: 0, total: 0 };
            }
            topicStats[topic].total++;
            if (result.correct) {
                topicStats[topic].correct++;
            }
        });

        const breakdownContainer = document.getElementById('topic-breakdown');
        breakdownContainer.innerHTML = '';
        Object.entries(topicStats).forEach(([topic, stats]) => {
            const percent = Math.round((stats.correct / stats.total) * 100);
            const div = document.createElement('div');
            div.className = 'topic-result';
            div.innerHTML = `
                <span class="topic-name">${topic}</span>
                <span class="topic-score ${percent >= 70 ? 'good' : 'bad'}">${stats.correct}/${stats.total} (${percent}%)</span>
            `;
            breakdownContainer.appendChild(div);
        });

        // Question review
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

        // Show/hide retry wrong button
        const wrongAnswers = this.results.filter(r => !r.correct);
        document.getElementById('retry-wrong-btn').style.display =
            wrongAnswers.length > 0 ? 'block' : 'none';
    }

    retryWrongAnswers() {
        const wrongQuestions = this.results.filter(r => !r.correct).map(r => r.question);

        if (wrongQuestions.length === 0) {
            alert('You got all questions correct!');
            return;
        }

        this.currentQuiz = this.settings.shuffleQuestions
            ? this.shuffle(wrongQuestions)
            : wrongQuestions;
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];

        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');

        // Reset submit button visibility when showing quiz screen
        if (screenId === 'quiz-screen') {
            document.getElementById('submit-btn').style.display = 'block';
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
