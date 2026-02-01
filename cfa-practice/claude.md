# CFA Practice Tester - Claude Guide

Quick ref for navigating and editing this codebase.

## File Structure
```
cfa-practice/
├── index.html      # UI structure, screens, buttons
├── app.js          # All the logic (quiz, learn, qbank modes)
├── style.css       # Styling
├── questions.json  # THE QUESTIONS LIVE HERE
└── claude.md       # You are here
```

## Adding/Editing Questions

All questions are in `questions.json`. Here's the format:

```json
{
  "id": 33,
  "title": "Short descriptive title",
  "topic": "Fixed Income",
  "question": "The actual question text here...",
  "choices": [
    {"letter": "A", "text": "First choice"},
    {"letter": "B", "text": "Second choice"},
    {"letter": "C", "text": "Third choice"},
    {"letter": "D", "text": "Fourth choice"}
  ],
  "correctAnswer": "B",
  "explanation": "Why B is correct...",
  "keyFormulas": ["Formula 1", "Formula 2"],
  "yourMistake": "Optional - what mistake was made on exam"
}
```

### To Add a Question
1. Open `questions.json`
2. Add new object to the `questions` array
3. Increment `id` from last question
4. Match `topic` to existing topics or create new one

### Current Topics
- Fixed Income
- FSA
- Equity
- Derivatives
- Portfolio Management
- Economics
- Quant
- Alternatives
- Ethics

### Optional Fields
- `keyFormulas` - array of formulas (shown in yellow box)
- `yourMistake` - shown when user gets it wrong

## Quick Edits

**Change a question's text:** Edit `question` field in questions.json
**Change correct answer:** Edit `correctAnswer` field (A, B, C, or D)
**Add explanation:** Edit `explanation` field (supports \n for newlines)
**Change topic:** Edit `topic` field

## App Modes

1. **Quiz** - Timed practice, X questions, shows score at end
2. **Learn** - Must get each question right once to "master" it, wrong answers cycle back
3. **Qbank** - Browse all questions with answers visible (scroll through all)

## Key Functions in app.js

- `loadQuestions()` - Fetches questions.json
- `startQuiz()` / `startLearn()` / `startQbank()` - Mode entry points
- `displayQuestion()` - Renders current quiz question
- `displayAllQbankQuestions()` - Renders all qbank questions (scrollable)
- `shuffle()` - Randomizes array order

## Styling Notes

Colors are CSS variables in `:root` (style.css line 3-24)
- `--primary` - Blue buttons
- `--success` - Green correct
- `--error` - Red wrong
