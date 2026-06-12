import re
import json

with open('raw.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Split the text into the questions part and the answers part
parts = text.split('Numerical Ability – Answers with Solutions')
questions_text = parts[0]
solutions_text = parts[1]

questions = []

# Parse questions
# We use a regex to match the number, question, and options
q_blocks = re.split(r'\n(?=\d+\.\s)', questions_text)

current_part = ""
for block in q_blocks:
    if 'PART ' in block:
        # Extract the part name from the first block or before a question
        part_match = re.search(r'PART [IVX]+ – (.+?)\n', block)
        if part_match:
            current_part = part_match.group(1).strip()
    
    # Match the question
    q_match = re.match(r'(\d+)\.\s+(.*?)(?=\nA\.|\Z)', block, re.DOTALL)
    if not q_match:
        continue
    
    q_num = int(q_match.group(1))
    q_text = q_match.group(2).strip()
    
    # Match options
    options = []
    opt_matches = re.finditer(r'([A-D])\.\s+(.*?)(?=\n[A-D]\.|\Z)', block[q_match.end():], re.DOTALL)
    for o in opt_matches:
        options.append({
            'letter': o.group(1),
            'text': o.group(2).strip()
        })
    
    questions.append({
        'id': q_num,
        'topic': current_part,
        'question': q_text,
        'options': options,
        'answer_letter': '',
        'answer_text': '',
        'solution': ''
    })

# Parse solutions
sol_blocks = re.split(r'\n(?=\d+\.\s+[A-D]\s+\()', '\n' + solutions_text.strip())

for block in sol_blocks:
    if not block.strip(): continue
    sol_match = re.match(r'(\d+)\.\s+([A-D])\s+\((.*?)\)\n(.*)', block, re.DOTALL)
    if sol_match:
        q_num = int(sol_match.group(1))
        ans_letter = sol_match.group(2)
        ans_text = sol_match.group(3).strip()
        sol_text = sol_match.group(4).strip()
        
        # Find the question and update it
        for q in questions:
            if q['id'] == q_num:
                q['answer_letter'] = ans_letter
                q['answer_text'] = ans_text
                q['solution'] = sol_text
                break

with open('../data.js', 'w', encoding='utf-8') as f:
    f.write('const numericalQuestions = ')
    json.dump(questions, f, indent=4)
    f.write(';\n\n')
    f.write('const questionsData = {\n')
    f.write('    "numerical": numericalQuestions\n')
    f.write('};\n')
