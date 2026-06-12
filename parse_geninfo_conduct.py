import re
import json

with open('raw_geninfo_conduct.txt', 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('### Answer Key – RA 6713')
questions_text = parts[0]
solutions_text = parts[1]

questions = []
q_blocks = re.split(r'\n(?=\d+\.\s)', '\n' + questions_text.strip())

current_topic = "Code of Conduct (R.A 6713)"

for qb in q_blocks:
    if not qb.strip(): continue
    q_match = re.search(r'^(\d+)\.\s+(.*?)(?=\n\s*A\.)', qb, re.DOTALL | re.MULTILINE)
    if not q_match: continue
    
    q_num = int(q_match.group(1))
    q_text = q_match.group(2).strip()
    
    options = []
    opt_matches = re.finditer(r'([A-D])\.\s(.*?)(?=\n\s*[A-D]\.\s|$)', qb[q_match.end():], re.DOTALL)
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

ans_blocks = re.split(r'\n(?=\d+\.\s+[A-D])', '\n' + solutions_text.strip())
for block in ans_blocks:
    if not block.strip(): continue
    # format: 1. C – Promote high ethical standards in public service.
    match = re.match(r'(\d+)\.\s+([A-D])\s*–\s*(.*)', block, re.DOTALL)
    if match:
        q_num = int(match.group(1))
        ans_letter = match.group(2)
        sol_text = match.group(3).strip()
        
        for q in questions:
            if q['id'] == q_num:
                q['answer_letter'] = ans_letter
                q['solution'] = sol_text
                
                # find the answer text
                ans_text = ''
                for o in q['options']:
                    if o['letter'] == ans_letter:
                        ans_text = o['text']
                        break
                q['answer_text'] = ans_text
                break

with open('data.js', 'r', encoding='utf-8') as f:
    existing_js = f.read()

existing_js = re.sub(r'const questionsData = \{.*?\};\n*', '', existing_js, flags=re.DOTALL)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(existing_js)
    f.write('\nconst genInfoConductQuestions = ')
    json.dump(questions, f, indent=4)
    f.write(';\n\n')
    f.write('const questionsData = {\n')
    f.write('    "numerical": numericalQuestions,\n')
    f.write('    "analytical_word": analyticalQuestions,\n')
    f.write('    "analytical_logical": logicalQuestions,\n')
    f.write('    "analytical_data": dataInterpQuestions,\n')
    f.write('    "verbal_grammar": verbalGrammarQuestions,\n')
    f.write('    "verbal_vocab": verbalVocabQuestions,\n')
    f.write('    "verbal_paragraph": verbalParaQuestions,\n')
    f.write('    "verbal_reading": verbalReadingQuestions,\n')
    f.write('    "geninfo_const": genInfoConstQuestions,\n')
    f.write('    "geninfo_conduct": genInfoConductQuestions\n')
    f.write('};\n')
