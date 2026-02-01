#!/usr/bin/env python3
"""
CFA Question Converter

Converts questions from Claude-style text format to the JSON format
used by the CFA Practice Tester.

Usage:
    python convert_questions.py input.txt
    python convert_questions.py input.txt --output custom_output.json
    python convert_questions.py input.txt --append  # Append to existing questions.json
"""

import json
import re
import argparse
from pathlib import Path


def parse_question_block(text: str, question_id: int) -> dict:
    """Parse a single question block from text format."""

    question = {
        "id": question_id,
        "title": "",
        "topic": "General",
        "subtopic": "",
        "question": "",
        "choices": [],
        "correctAnswer": "",
        "yourOriginalAnswer": "",
        "yourMistake": "",
        "explanation": "",
        "keyFormulas": [],
        "difficulty": "medium",
        "source": ""
    }

    lines = text.strip().split('\n')
    current_section = None
    content_buffer = []

    for line in lines:
        line_stripped = line.strip()

        # Detect section headers
        if re.match(r'^Q\d+\s*[—–-]', line_stripped):
            # Title line like "Q1 — Credit Migration Expected Return"
            question["title"] = re.sub(r'^Q\d+\s*[—–-]\s*', '', line_stripped)
            continue

        if line_stripped.lower().startswith('question:'):
            current_section = 'question'
            content = line_stripped[9:].strip()
            if content:
                content_buffer = [content]
            else:
                content_buffer = []
            continue

        if line_stripped.lower().startswith('your answer:'):
            # Save previous section
            if current_section == 'question':
                question["question"] = '\n'.join(content_buffer).strip()
            current_section = 'your_answer'
            content = line_stripped[12:].strip()
            content_buffer = [content] if content else []
            continue

        if line_stripped.lower().startswith('correct answer:'):
            if current_section == 'your_answer':
                question["yourOriginalAnswer"] = '\n'.join(content_buffer).strip()
            current_section = 'correct_answer'
            content = line_stripped[15:].strip()
            content_buffer = [content] if content else []
            continue

        if line_stripped.lower().startswith('explanation:'):
            if current_section == 'correct_answer':
                question["correctAnswer"] = '\n'.join(content_buffer).strip()
            current_section = 'explanation'
            content = line_stripped[12:].strip()
            content_buffer = [content] if content else []
            continue

        if line_stripped.lower().startswith('key formula'):
            if current_section == 'explanation':
                question["explanation"] = '\n'.join(content_buffer).strip()
            current_section = 'formulas'
            content_buffer = []
            continue

        if line_stripped.lower().startswith('topic:'):
            question["topic"] = line_stripped[6:].strip()
            continue

        if line_stripped.lower().startswith('source:'):
            question["source"] = line_stripped[7:].strip()
            continue

        # Accumulate content for current section
        if current_section and line_stripped:
            content_buffer.append(line_stripped)

    # Save final section
    if current_section == 'explanation':
        question["explanation"] = '\n'.join(content_buffer).strip()
    elif current_section == 'formulas':
        # Parse formulas - each line or bullet is a formula
        for line in content_buffer:
            formula = re.sub(r'^[-•*]\s*', '', line).strip()
            if formula:
                question["keyFormulas"].append(formula)

    return question


def extract_mistake_from_answer(your_answer: str) -> tuple:
    """Extract the actual answer and mistake reason if present."""
    # Pattern like: "-0.14% (only calculated expected price return)"
    match = re.match(r'^([^(]+)\s*\((.+)\)$', your_answer.strip())
    if match:
        return match.group(1).strip(), match.group(2).strip()
    return your_answer.strip(), ""


def generate_choices(correct_answer: str, your_answer: str, question_text: str) -> list:
    """Generate multiple choice options from correct and wrong answers."""
    choices = []

    # Extract the actual answers
    your_actual, your_mistake = extract_mistake_from_answer(your_answer)
    correct_actual = correct_answer.strip()

    # Add correct answer
    choices.append({
        "letter": "A",
        "text": correct_actual
    })

    # Add your wrong answer if different
    if your_actual.lower() != correct_actual.lower():
        choices.append({
            "letter": "B",
            "text": your_actual
        })

    # You can add more distractor logic here based on question type
    # For now, we'll prompt the user to add more choices manually

    return choices


def parse_questions_file(filepath: str) -> list:
    """Parse a file containing multiple questions."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by question markers (Q1, Q2, etc.)
    question_blocks = re.split(r'\n(?=Q\d+\s*[—–-])', content)
    question_blocks = [b.strip() for b in question_blocks if b.strip()]

    questions = []
    for i, block in enumerate(question_blocks, 1):
        q = parse_question_block(block, i)
        if q["question"]:  # Only add if we got a question
            questions.append(q)

    return questions


def create_template_question() -> dict:
    """Create a template question for manual editing."""
    return {
        "id": 1,
        "title": "Question Title Here",
        "topic": "Fixed Income",
        "subtopic": "",
        "question": "The question text goes here...",
        "choices": [
            {"letter": "A", "text": "First answer option"},
            {"letter": "B", "text": "Second answer option"},
            {"letter": "C", "text": "Third answer option"},
            {"letter": "D", "text": "Fourth answer option"}
        ],
        "correctAnswer": "B",
        "yourOriginalAnswer": "A",
        "yourMistake": "Describe what you did wrong",
        "explanation": "Detailed explanation of the correct approach...",
        "keyFormulas": ["Formula 1 = X + Y", "Formula 2 = A * B"],
        "difficulty": "medium",
        "source": "Mock Exam 1"
    }


def main():
    parser = argparse.ArgumentParser(description='Convert CFA questions to JSON format')
    parser.add_argument('input', nargs='?', help='Input text file with questions')
    parser.add_argument('--output', '-o', default='questions.json', help='Output JSON file')
    parser.add_argument('--append', '-a', action='store_true', help='Append to existing questions.json')
    parser.add_argument('--template', '-t', action='store_true', help='Print a template question')

    args = parser.parse_args()

    if args.template:
        template = create_template_question()
        print("Template question (copy and modify):\n")
        print(json.dumps(template, indent=2))
        return

    if not args.input:
        print("CFA Question Converter")
        print("=" * 50)
        print("\nUsage examples:")
        print("  python convert_questions.py questions.txt")
        print("  python convert_questions.py questions.txt --output my_questions.json")
        print("  python convert_questions.py questions.txt --append")
        print("  python convert_questions.py --template")
        print("\nExpected input format:")
        print("-" * 50)
        print("""
Q1 — Credit Migration Expected Return (Part 1)

Question:
A bond has YTM of 1.0% and modified duration of 4.5...

Your Answer: -0.14% (only calculated expected price return)

Correct Answer: 0.86%

Explanation:
Expected total return = YTM + Expected Price Return
...

Key Formulas:
- Expected Total Return = YTM + Expected Price Return
- Price Return = -Modified Duration x Change in Spread
""")
        return

    # Parse input file
    questions = parse_questions_file(args.input)

    if not questions:
        print("No questions found in input file.")
        return

    # Handle append mode
    if args.append and Path(args.output).exists():
        with open(args.output, 'r', encoding='utf-8') as f:
            existing = json.load(f)

        # Update IDs
        max_id = max((q.get('id', 0) for q in existing.get('questions', [])), default=0)
        for q in questions:
            max_id += 1
            q['id'] = max_id

        existing['questions'].extend(questions)
        output_data = existing
    else:
        output_data = {
            "examTitle": "CFA Practice - Missed Questions Review",
            "description": "Practice problems from mock exams",
            "settings": {
                "questionsPerQuiz": 10,
                "shuffleQuestions": True,
                "shuffleChoices": True,
                "showExplanationAfterEach": True
            },
            "questions": questions
        }

    # Write output
    with open(args.output, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2)

    print(f"Successfully converted {len(questions)} questions")
    print(f"Output written to: {args.output}")
    print("\nNote: You may need to manually add/adjust multiple choice options.")


if __name__ == '__main__':
    main()
