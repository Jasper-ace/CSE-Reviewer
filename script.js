document.addEventListener('DOMContentLoaded', () => {
    const categoryContainer = document.getElementById('category-container');
    const subCategoryContainer = document.getElementById('sub-category-container');
    const questionSection = document.getElementById('question-section');
    
    const selectedSubjectTitle = document.getElementById('selected-subject-title');
    const subCategoryTitle = document.getElementById('sub-category-title');
    const subCategoryList = document.getElementById('sub-category-list');
    
    const backBtn = document.getElementById('back-btn');
    const subBackBtn = document.getElementById('sub-back-btn');
    const cards = document.querySelectorAll('.category-card');
    const questionsContainer = document.getElementById('questions-container');
    const questionCounter = document.getElementById('question-counter');

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let currentMainSubject = '';

    const subjectMap = {
        'numerical': 'Numerical Ability',
        'analytical': 'Analytical Ability',
        'verbal': 'Verbal Ability',
        'general': 'General Information'
    };

    const subCategoryMap = {
        'analytical': [
            { id: 'analytical_word', title: 'Word Association', description: 'Identifying Assumptions & Conclusions' },
            { id: 'analytical_logical', title: 'Logical Reasoning', description: 'Logical sequences, deductions, and syllogisms' },
            { id: 'analytical_data', title: 'Data Interpretation', description: 'Analyzing charts, graphs, and tables' }
        ],
        'verbal': [
            { id: 'verbal_grammar', title: 'Grammar and Correct Usage', description: 'Sentence structure and proper English usage' },
            { id: 'verbal_vocab', title: 'Vocabulary', description: 'Word meanings, synonyms, and antonyms' },
            { id: 'verbal_paragraph', title: 'Paragraph Organization', description: 'Sequencing sentences to form coherent paragraphs' },
            { id: 'verbal_reading', title: 'Reading Comprehension', description: 'Understanding and analyzing written passages' }
        ],
        'general': [
            { id: 'geninfo_const', title: 'Philippine Constitution', description: 'Basic principles and state policies' },
            { id: 'geninfo_conduct', title: 'Code of Conduct (R.A 6713)', description: 'Ethical standards for public officials and employees' },
            { id: 'geninfo_peace', title: 'Peace and Human Rights', description: 'Peace issues and human rights concepts' },
            { id: 'geninfo_environment', title: 'Environment Management', description: 'Environmental protection and management' }
        ]
    };

    // Main Categories Click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.getAttribute('data-subject');
            currentMainSubject = subject;
            
            categoryContainer.style.opacity = '0';
            categoryContainer.style.transform = 'scale(0.95)';
            categoryContainer.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                categoryContainer.classList.add('hidden');
                
                if (subCategoryMap[subject]) {
                    // Show Sub-categories
                    subCategoryTitle.textContent = subjectMap[subject] + ' Topics';
                    renderSubCategories(subject);
                    
                    subCategoryContainer.classList.remove('hidden');
                    subCategoryContainer.style.opacity = '0';
                    subCategoryContainer.style.transform = 'translateY(20px)';
                    void subCategoryContainer.offsetWidth;
                    subCategoryContainer.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    subCategoryContainer.style.opacity = '1';
                    subCategoryContainer.style.transform = 'translateY(0)';
                } else {
                    // No sub-categories, go straight to quiz
                    selectedSubjectTitle.textContent = subjectMap[subject];
                    showQuizSection(subject);
                }
            }, 400);
        });
    });

    function renderSubCategories(mainSubject) {
        subCategoryList.innerHTML = '';
        const subs = subCategoryMap[mainSubject];
        
        subs.forEach((sub, index) => {
            const delay = 0.1 * (index + 1);
            const card = document.createElement('button');
            card.className = 'category-card';
            card.style.animationDelay = `${delay}s`;
            card.setAttribute('data-sub', sub.id);
            
            card.innerHTML = `
                <div class="icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h2>${sub.title}</h2>
                <p>${sub.description}</p>
            `;
            
            card.addEventListener('click', () => {
                subCategoryContainer.style.opacity = '0';
                subCategoryContainer.style.transform = 'scale(0.95)';
                subCategoryContainer.style.transition = 'all 0.4s ease';
                
                setTimeout(() => {
                    subCategoryContainer.classList.add('hidden');
                    selectedSubjectTitle.textContent = `${subjectMap[mainSubject]} - ${sub.title}`;
                    showQuizSection(sub.id);
                }, 400);
            });
            
            subCategoryList.appendChild(card);
        });
    }

    function showQuizSection(subjectId) {
        questionSection.classList.remove('hidden');
        questionSection.style.opacity = '0';
        questionSection.style.transform = 'translateY(20px)';
        
        void questionSection.offsetWidth;
        
        questionSection.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        questionSection.style.opacity = '1';
        questionSection.style.transform = 'translateY(0)';
        
        startQuiz(subjectId);
    }

    // Back from Sub-categories to Main
    subBackBtn.addEventListener('click', () => {
        subCategoryContainer.style.opacity = '0';
        subCategoryContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            subCategoryContainer.classList.add('hidden');
            categoryContainer.classList.remove('hidden');
            
            void categoryContainer.offsetWidth;
            
            categoryContainer.style.opacity = '1';
            categoryContainer.style.transform = 'scale(1)';
        }, 400);
    });

    // Back from Quiz to previous screen
    backBtn.addEventListener('click', () => {
        questionSection.style.opacity = '0';
        questionSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            questionSection.classList.add('hidden');
            
            if (subCategoryMap[currentMainSubject]) {
                // Go back to sub-categories
                subCategoryContainer.classList.remove('hidden');
                void subCategoryContainer.offsetWidth;
                subCategoryContainer.style.opacity = '1';
                subCategoryContainer.style.transform = 'scale(1)';
            } else {
                // Go back to main categories
                categoryContainer.classList.remove('hidden');
                void categoryContainer.offsetWidth;
                categoryContainer.style.opacity = '1';
                categoryContainer.style.transform = 'scale(1)';
            }
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
                    <p class="placeholder-text">Questions for this topic are not available yet.</p>
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

        function parseMarkdownTable(text) {
            // Very simple parser for our specific markdown tables
            if (!text.includes('|')) {
                return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
            }
            const lines = text.split('\n');
            let inTable = false;
            let html = '';
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (line.includes('|') && !line.includes('---')) {
                    const cells = line.split('|').map(c => c.trim()).filter(c => c);
                    if (!inTable) {
                        html += '<table>';
                        if (i === 1 || lines[i-1].includes('**')) { // Header row
                            html += '<thead><tr>';
                            cells.forEach(c => html += `<th>${c}</th>`);
                            html += '</tr></thead><tbody>';
                        } else {
                            html += '<tbody><tr>';
                            cells.forEach(c => html += `<td>${c}</td>`);
                            html += '</tr>';
                        }
                        inTable = true;
                    } else {
                        html += '<tr>';
                        cells.forEach(c => html += `<td>${c}</td>`);
                        html += '</tr>';
                    }
                } else if (line.includes('---')) {
                    continue; // Skip separator row
                } else {
                    if (inTable) {
                        html += '</tbody></table>';
                        inTable = false;
                    }
                    html += line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '<br>';
                }
            }
            if (inTable) html += '</tbody></table>';
            
            return html;
        }

        questionsContainer.innerHTML = `
            <div class="quiz-content animate-fade-in">
                <div class="topic-badge">${q.topic}</div>
                <div class="question-text">
                    <strong>${q.id}.</strong> ${parseMarkdownTable(q.question)}
                </div>
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
                <p>You have finished this section.</p>
                <button class="restart-btn" id="restart-btn">Restart Topic</button>
            </div>
        `;

        document.getElementById('restart-btn').addEventListener('click', () => {
            currentIndex = 0;
            score = 0;
            renderQuestion();
        });
    }
});
