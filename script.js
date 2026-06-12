document.addEventListener('DOMContentLoaded', () => {
    const categoryContainer = document.getElementById('category-container');
    const questionSection = document.getElementById('question-section');
    const selectedSubjectTitle = document.getElementById('selected-subject-title');
    const backBtn = document.getElementById('back-btn');
    const cards = document.querySelectorAll('.category-card');
    const questionsContainer = document.getElementById('questions-container');
    const questionCounter = document.getElementById('question-counter');

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;

    const subjectMap = {
        'numerical': 'Numerical Ability',
        'analytical': 'Analytical Ability',
        'verbal': 'Verbal Ability',
        'general': 'General Information'
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.getAttribute('data-subject');
            
            categoryContainer.style.opacity = '0';
            categoryContainer.style.transform = 'scale(0.95)';
            categoryContainer.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                categoryContainer.classList.add('hidden');
                selectedSubjectTitle.textContent = subjectMap[subject];
                
                questionSection.classList.remove('hidden');
                questionSection.style.opacity = '0';
                questionSection.style.transform = 'translateY(20px)';
                
                void questionSection.offsetWidth;
                
                questionSection.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                questionSection.style.opacity = '1';
                questionSection.style.transform = 'translateY(0)';
                
                startQuiz(subject);
            }, 400);
        });
    });

    backBtn.addEventListener('click', () => {
        questionSection.style.opacity = '0';
        questionSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            questionSection.classList.add('hidden');
            categoryContainer.classList.remove('hidden');
            
            void categoryContainer.offsetWidth;
            
            categoryContainer.style.opacity = '1';
            categoryContainer.style.transform = 'scale(1)';
        }, 400);
    });

    function startQuiz(subject) {
        if (typeof questionsData !== 'undefined' && questionsData[subject]) {
            currentQuestions = questionsData[subject];
            currentIndex = 0;
            score = 0;
            renderQuestion();
        } else {
            questionsContainer.innerHTML = `
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p class="placeholder-text">Questions for ${subjectMap[subject]} are not available yet.</p>
                </div>
            `;
            questionCounter.textContent = '0 Questions Ready';
        }
    }

    function renderQuestion() {
        if (currentIndex >= currentQuestions.length) {
            showResults();
            return;
        }

        const q = currentQuestions[currentIndex];
        questionCounter.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;

        let optionsHtml = '';
        q.options.forEach(opt => {
            let optText = opt.text.replace(/\n\nPART.*$/, '');
            optionsHtml += `
                <button class="option-btn" data-letter="${opt.letter}">
                    <span class="opt-letter">${opt.letter}</span>
                    <span class="opt-text">${optText}</span>
                </button>
            `;
        });

        questionsContainer.innerHTML = `
            <div class="quiz-content animate-fade-in">
                <div class="topic-badge">${q.topic}</div>
                <h3 class="question-text">${q.id}. ${q.question}</h3>
                <div class="options-grid">
                    ${optionsHtml}
                </div>
                <div class="solution-box hidden" id="solution-box">
                    <h4>Solution</h4>
                    <pre>${q.solution}</pre>
                </div>
                <button class="next-btn hidden" id="next-btn">Next Question</button>
            </div>
        `;

        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(btn, q));
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            currentIndex++;
            renderQuestion();
        });
    }

    function handleAnswer(selectedBtn, q) {
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => btn.disabled = true);

        const selectedLetter = selectedBtn.getAttribute('data-letter');
        const correctLetter = q.answer_letter;

        if (selectedLetter === correctLetter) {
            selectedBtn.classList.add('correct');
            score++;
        } else {
            selectedBtn.classList.add('wrong');
            optionBtns.forEach(btn => {
                if (btn.getAttribute('data-letter') === correctLetter) {
                    btn.classList.add('correct');
                }
            });
        }

        document.getElementById('solution-box').classList.remove('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
    }

    function showResults() {
        questionCounter.textContent = 'Quiz Completed';
        questionsContainer.innerHTML = `
            <div class="quiz-content animate-fade-in result-view">
                <h2>Quiz Complete!</h2>
                <div class="score-display">
                    <span class="score-number">${score}</span>
                    <span class="score-total">/ ${currentQuestions.length}</span>
                </div>
                <p>You have finished the ${selectedSubjectTitle.textContent} section.</p>
                <button class="restart-btn" id="restart-btn">Restart Subject</button>
            </div>
        `;

        document.getElementById('restart-btn').addEventListener('click', () => {
            currentIndex = 0;
            score = 0;
            renderQuestion();
        });
    }
});
