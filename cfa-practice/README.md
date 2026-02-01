# CFA Practice Tester

A dynamic practice quiz app for reviewing CFA questions you got wrong on mock exams.

## Quick Start

1. Open `index.html` in your browser
2. Configure quiz settings (number of questions, topic filter)
3. Click "Start Quiz"
4. Answer questions by clicking choices
5. Get instant feedback with explanations

## Adding Questions

### Option 1: Direct JSON Editing

Edit `questions.json` and add questions in this format:

```json
{
  "id": 1,
  "title": "Credit Migration Expected Return",
  "topic": "Fixed Income",
  "subtopic": "Credit Analysis",
  "question": "A bond has YTM of 1.0% and modified duration of 4.5...",
  "choices": [
    { "letter": "A", "text": "-0.14%" },
    { "letter": "B", "text": "0.86%" },
    { "letter": "C", "text": "1.00%" },
    { "letter": "D", "text": "4.36%" }
  ],
  "correctAnswer": "B",
  "yourOriginalAnswer": "A",
  "yourMistake": "Only calculated expected price return, forgot to add YTM",
  "explanation": "Expected total return = YTM + Expected Price Return...",
  "keyFormulas": [
    "Expected Total Return = YTM + Expected Price Return"
  ],
  "difficulty": "medium",
  "source": "Mock Exam 1"
}
```

### Option 2: Using the Converter Script

1. Save your Claude output to a text file (e.g., `my_questions.txt`)
2. Run: `python convert_questions.py my_questions.txt`
3. The script will generate JSON from text formatted like:

```
Q1 — Question Title

Question:
The question text...

Your Answer: Wrong answer (what you did wrong)

Correct Answer: Right answer

Explanation:
Why the correct answer is right...

Key Formulas:
- Formula 1
- Formula 2
```

### Converter Commands

```bash
# Convert a text file to JSON
python convert_questions.py input.txt

# Append to existing questions
python convert_questions.py input.txt --append

# Custom output file
python convert_questions.py input.txt --output my_questions.json

# Show template
python convert_questions.py --template
```

## Features

- **Random Quiz Generation**: Creates mini quizzes from your question bank
- **Topic Filtering**: Focus on specific CFA topics
- **Shuffle Options**: Randomize questions and answer choices
- **Instant Feedback**: See explanations after each question
- **Mistake Tracking**: Shows your original mistake to reinforce learning
- **Key Formulas**: Displays relevant formulas for each question
- **Score Tracking**: See your performance by topic
- **Retry Wrong**: Practice only the questions you missed

## File Structure

```
cfa-practice/
├── index.html          # Main quiz interface
├── style.css           # Styling
├── app.js              # Quiz logic
├── questions.json      # Your question bank
├── convert_questions.py # Text-to-JSON converter
└── README.md           # This file
```

## Tips

- Add topics to categorize questions (Fixed Income, Equity, Derivatives, etc.)
- Include your original mistake to learn from errors
- Add key formulas for quick reference
- Use the "source" field to track which mock exam questions came from
