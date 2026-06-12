import re
import json

with open('raw_verbal_reading.txt', 'r', encoding='utf-8') as f:
    text = f.read()

parts = text.split('ANSWER KEY START')
questions_text = parts[0]
solutions_text = parts[1]

questions = []
passage_blocks = re.split(r'\n(?=Passage \d+)', '\n' + questions_text.strip())

current_topic = "Reading Comprehension"

for p_block in passage_blocks:
    if not p_block.strip(): continue
    
    passage_match = re.search(r'Text:\s*(.*?)(?=\n\d+\.)', p_block, re.DOTALL)
    if not passage_match:
        continue
    passage_text = passage_match.group(1).strip()
    
    questions_part = p_block[passage_match.end():]
    q_blocks = re.split(r'\n(?=\d+\.\s)', '\n' + questions_part.strip())
    
    for qb in q_blocks:
        if not qb.strip(): continue
        q_match = re.search(r'^(\d+)\.\s+(.*?)(?=\n[A-D]\.)', qb, re.DOTALL | re.MULTILINE)
        if not q_match: continue
        
        q_num = int(q_match.group(1))
        q_text = q_match.group(2).strip()
        
        full_q_text = f"**Passage:**\n{passage_text}\n\n**Question:**\n{q_text}"
        
        options = []
        opt_matches = re.finditer(r'([A-D])\.\s(.*?)(?=\n[A-D]\.\s|$)', qb[q_match.end():], re.DOTALL)
        for o in opt_matches:
            options.append({
                'letter': o.group(1),
                'text': o.group(2).strip()
            })
            
        questions.append({
            'id': q_num,
            'topic': current_topic,
            'question': full_q_text,
            'options': options,
            'answer_letter': '',
            'answer_text': '',
            'solution': ''
        })

ans_lines = [l.strip() for l in solutions_text.strip().split('\n') if l.strip()]

for i, line in enumerate(ans_lines):
    if i >= len(questions): break
    match = re.match(r'([A-D])\s*–\s*(.*)', line)
    if match:
        ans_letter = match.group(1)
        ans_text = match.group(2)
        
        questions[i]['answer_letter'] = ans_letter
        questions[i]['answer_text'] = ans_text
        questions[i]['solution'] = ans_text

with open('data.js', 'r', encoding='utf-8') as f:
    existing_js = f.read()

existing_js = re.sub(r'const questionsData = \{.*?\};\n*', '', existing_js, flags=re.DOTALL)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(existing_js)
    f.write('\nconst verbalReadingQuestions = ')
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
    f.write('    "verbal_reading": verbalReadingQuestions\n')
    f.write('};\n')
