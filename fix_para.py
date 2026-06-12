import re
import json

with open('raw_verbal_para.txt', 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('Answer Key')
questions_text = parts[0]
solutions_text = parts[1]

questions = []
q_blocks = re.split(r'\n(?=\d+\.\s*\n)', '\n' + questions_text.strip())

current_topic = "Paragraph Organization"
for block in q_blocks:
    if not block.strip(): continue
    
    q_match = re.search(r'^(\d+)\.\s*\n(.*?)(?=\nA\.\s+[A-Z]-[A-Z]-[A-Z]-[A-Z])', block, re.DOTALL | re.MULTILINE)
    if not q_match:
        continue
        
    q_num = int(q_match.group(1))
    q_text = q_match.group(2).strip()
    
    options = []
    opt_matches = re.finditer(r'([A-D])\.\s([A-Z]-[A-Z]-[A-Z]-[A-Z])(?=\n[A-D]\.\s|$)', block[q_match.end():], re.DOTALL)
    for o in opt_matches:
        options.append({
            'letter': o.group(1),
            'text': o.group(2).strip()
        })
        
    questions.append({
        'id': q_num,
        'topic': current_topic,
        'question': q_text,
        'options': options,
        'answer_letter': '',
        'answer_text': '',
        'solution': ''
    })

sol_blocks = re.split(r'\n(?=\d+\.\s+[A-Z]-[A-Z]-[A-Z]-[A-Z])', '\n' + solutions_text.strip())

for block in sol_blocks:
    if not block.strip(): continue
    sol_match = re.match(r'(\d+)\.\s+([A-Z]-[A-Z]-[A-Z]-[A-Z])\n(.*)', block, re.DOTALL)
    if sol_match:
        q_num = int(sol_match.group(1))
        ans_text_short = sol_match.group(2).strip()
        sol_text = sol_match.group(3).strip()
        
        for q in questions:
            if q['id'] == q_num:
                # Find the option letter that matches the answer text
                ans_letter = ''
                for opt in q['options']:
                    if opt['text'] == ans_text_short:
                        ans_letter = opt['letter']
                        break
                
                if not ans_letter:
                    print(f"Warning: Could not find option for answer '{ans_text_short}' in Q{q_num}")
                
                q['answer_letter'] = ans_letter
                q['solution'] = sol_text
                q['answer_text'] = ans_text_short
                break

with open('data.js', 'r', encoding='utf-8') as f:
    existing_js = f.read()

# Make sure we don't accidentally remove everything. We only want to re-insert the verbalParaQuestions
existing_js = re.sub(r'const verbalParaQuestions = \[.*?\];\n*', '', existing_js, flags=re.DOTALL)
existing_js = re.sub(r'const questionsData = \{.*?\};\n*', '', existing_js, flags=re.DOTALL)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(existing_js)
    f.write('const verbalParaQuestions = ')
    json.dump(questions, f, indent=4)
    f.write(';\n\n')
    f.write('const questionsData = {\n')
    f.write('    "numerical": numericalQuestions,\n')
    f.write('    "analytical_word": analyticalQuestions,\n')
    f.write('    "analytical_logical": logicalQuestions,\n')
    f.write('    "analytical_data": dataInterpQuestions,\n')
    f.write('    "verbal_grammar": verbalGrammarQuestions,\n')
    f.write('    "verbal_vocab": verbalVocabQuestions,\n')
    f.write('    "verbal_paragraph": verbalParaQuestions\n')
    f.write('};\n')
