document.addEventListener('DOMContentLoaded', () => {
    const categoryContainer = document.getElementById('category-container');
    const subCategoryContainer = document.getElementById('sub-category-container');
    const questionSection = document.getElementById('question-section');
    
    const selectedSubjectTitle = document.getElementById('selected-subject-title');
    const subCategoryTitle = document.getElementById('sub-category-title');
    const subCategoryList = document.getElementById('sub-category-list');
    
    const backBtn = document.getElementById('back-btn');
    const inQuizRestartBtn = document.getElementById('in-quiz-restart-btn');
    const customModal = document.getElementById('custom-modal');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');
    const subBackBtn = document.getElementById('sub-back-btn');
    const cards = document.querySelectorAll('.category-card');
    const questionsContainer = document.getElementById('questions-container');
    const questionCounter = document.getElementById('question-counter');

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let currentMainSubject = '';
    let currentQuizId = '';
    let userProgress = JSON.parse(localStorage.getItem('cse_reviewer_progress')) || {};

    function saveProgress() {
        if (!currentQuizId) return;
        userProgress[currentQuizId] = {
            currentIndex: currentIndex,
            score: score,
            total: currentQuestions.length
        };
        localStorage.setItem('cse_reviewer_progress', JSON.stringify(userProgress));
    }

    const subjectMap = {
        'numerical': 'Numerical Ability',
        'analytical': 'Analytical Ability',
        'verbal': 'Verbal Ability',
        'general': 'General Information'
    };

    const subCategoryMap = {
        'numerical': [
            { id: 'numerical', title: 'Numerical Ability', description: 'Mathematics, word problems, sequences, and data interpretation', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="8" y1="10" x2="8" y2="10.01"></line></svg>' }
        ],
        'analytical': [
            { id: 'analytical_word', title: 'Word Association', description: 'Identifying Assumptions & Conclusions', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>' },
            { id: 'analytical_logical', title: 'Logical Reasoning', description: 'Logical sequences, deductions, and syllogisms', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>' },
            { id: 'analytical_data', title: 'Data Interpretation', description: 'Analyzing charts, graphs, and tables', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>' }
        ],
        'verbal': [
            { id: 'verbal_grammar', title: 'Grammar and Correct Usage', description: 'Sentence structure and proper English usage', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>' },
            { id: 'verbal_vocab', title: 'Vocabulary', description: 'Word meanings, synonyms, and antonyms', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>' },
            { id: 'verbal_paragraph', title: 'Paragraph Organization', description: 'Sequencing sentences to form coherent paragraphs', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>' },
            { id: 'verbal_reading', title: 'Reading Comprehension', description: 'Understanding and analyzing written passages', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' }
        ],
        'general': [
            { id: 'geninfo_const', title: 'Philippine Constitution', description: 'Basic principles and state policies', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>' },
            { id: 'geninfo_conduct', title: 'Code of Conduct (R.A 6713)', description: 'Ethical standards for public officials and employees', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>' },
            { id: 'geninfo_peace', title: 'Peace and Human Rights', description: 'Peace issues and human rights concepts', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' },
            { id: 'geninfo_environment', title: 'Environment Management', description: 'Environmental protection and management', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>' }
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
            
            let progressHtml = '<div class="progress-badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); border: 1px solid rgba(255, 255, 255, 0.1);">0% Complete</div>';
            if (userProgress[sub.id]) {
                const p = userProgress[sub.id];
                if (p.completed) {
                    progressHtml = '<div class="progress-badge completed">✓ Completed</div>';
                } else if (p.currentIndex > 0 && p.total) {
                    const percent = Math.round((p.currentIndex / p.total) * 100);
                    progressHtml = `<div class="progress-badge in-progress">${percent}% Complete</div>`;
                }
            }

            card.innerHTML = `
                <div class="icon-wrapper">
                    ${sub.icon}
                </div>
                <h2>${sub.title}</h2>
                <p>${sub.description}</p>
                ${progressHtml}
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
                // Re-render sub-categories to update progress badges
                renderSubCategories(currentMainSubject);
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

    // In-Quiz Restart
    if (inQuizRestartBtn && customModal) {
        inQuizRestartBtn.addEventListener('click', () => {
            customModal.classList.remove('hidden');
        });
        
        modalCancelBtn.addEventListener('click', () => {
            customModal.classList.add('hidden');
        });

        modalConfirmBtn.addEventListener('click', () => {
            customModal.classList.add('hidden');
            currentIndex = 0;
            score = 0;
            userProgress[currentQuizId].completed = false;
            saveProgress();
            renderQuestion();
        });
    }

    function startQuiz(subject) {
        if (typeof questionsData !== 'undefined' && questionsData[subject]) {
            currentQuestions = questionsData[subject];
            currentQuizId = subject;
            
            if (userProgress[subject] && !userProgress[subject].completed) {
                currentIndex = userProgress[subject].currentIndex || 0;
                score = userProgress[subject].score || 0;
            } else {
                currentIndex = 0;
                score = 0;
            }
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
                        html += '<div class="table-responsive"><table>';
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
                        html += '</tbody></table></div>';
                        inTable = false;
                    }
                    html += line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '<br>';
                }
            }
            if (inTable) html += '</tbody></table></div>';
            
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
            saveProgress();
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
        if (currentQuizId) {
            userProgress[currentQuizId] = { completed: true, score: score, total: currentQuestions.length };
            localStorage.setItem('cse_reviewer_progress', JSON.stringify(userProgress));
        }

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
            saveProgress();
            renderQuestion();
        });
    }
});
