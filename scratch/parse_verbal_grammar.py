import re
import json

with open('raw_verbal_grammar.txt', 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('Verbal Ability\n(Grammar and Correct Usage) – Answer Key & Explanations')
questions_text = parts[0]
solutions_text = parts[1]

questions = []
q_blocks = re.split(r'\n(?=\d+\.\s)', questions_text)

current_topic = "Grammar and Correct Usage"
for block in q_blocks:
    topic_match = re.search(r'PART [IVX]+ – (.*?)\(', block)
    if topic_match:
        current_topic = topic_match.group(1).strip()
    
    q_match = re.search(r'^(\d+)\.\s+(.*?)(?=\nA\.|A\s\.)', block, re.DOTALL | re.MULTILINE)
    if not q_match:
        continue
    
    q_num = int(q_match.group(1))
    q_text = q_match.group(2).strip()
    
    options = []
    opt_matches = re.finditer(r'([A-D])\.\s(.*?)(?=\n[A-D]\.\s|$)', block[q_match.end():], re.DOTALL)
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

# Parse solutions
sol_blocks = re.split(r'\n(?=\d+\.\s+[A-D]\s+–)', '\n' + solutions_text.strip())

for block in sol_blocks:
    if not block.strip(): continue
    sol_match = re.match(r'(\d+)\.\s+([A-D])\s+–\s+(.*?)\nExplanation:\s*(.*)', block, re.DOTALL)
    if sol_match:
        q_num = int(sol_match.group(1))
        ans_letter = sol_match.group(2)
        ans_text_short = sol_match.group(3).strip()
        sol_text = sol_match.group(4).strip()
        
        for q in questions:
            if q['id'] == q_num:
                q['answer_letter'] = ans_letter
                q['solution'] = sol_text
                
                ans_text = next((o['text'] for o in q['options'] if o['letter'] == ans_letter), ans_text_short)
                q['answer_text'] = ans_text
                break

with open('../data.js', 'r', encoding='utf-8') as f:
    existing_js = f.read()

existing_js = re.sub(r'const questionsData = \{.*?\};\n*', '', existing_js, flags=re.DOTALL)

with open('../data.js', 'w', encoding='utf-8') as f:
    f.write(existing_js)
    f.write('\nconst verbalGrammarQuestions = ')
    json.dump(questions, f, indent=4)
    f.write(';\n\n')
    f.write('const questionsData = {\n')
    f.write('    "numerical": numericalQuestions,\n')
    f.write('    "analytical_word": analyticalQuestions,\n')
    f.write('    "analytical_logical": logicalQuestions,\n')
    f.write('    "analytical_data": dataInterpQuestions,\n')
    f.write('    "verbal_grammar": verbalGrammarQuestions\n')
    f.write('};\n')
