# CFA Practice Tester - Development Guide

Quick reference for Claude to efficiently navigate and modify this codebase.

## File Structure

```
cfa-practice/
├── index.html      # All screen layouts (start, quiz, learn, qbank, results)
├── style.css       # All styling, mobile-responsive
├── app.js          # Main application logic (CFAPracticeTester class)
├── questions.json  # Question bank data
└── claude.md       # This file
```

## Quick File Reference

| Task | File | Location |
|------|------|----------|
| Add/edit questions | `questions.json` | Root `questions` array |
| Change UI layout | `index.html` | Screen divs with `id="*-screen"` |
| Change styling | `style.css` | Organized by component |
| Change app logic | `app.js` | CFAPracticeTester class methods |

## Adding/Editing Questions

### Question Format (questions.json)

```json
{
  "id": 33,
  "title": "Question Title Here",
  "topic": "Fixed Income",
  "question": "The question text with context...",
  "choices": [
    {"letter": "A", "text": "First option"},
    {"letter": "B", "text": "Second option"},
    {"letter": "C", "text": "Third option"},
    {"letter": "D", "text": "Fourth option"}
  ],
  "correctAnswer": "B",
  "explanation": "Detailed explanation...\n\nUse \\n for line breaks.",
  "keyFormulas": ["Formula 1 = X", "Formula 2 = Y"],
  "yourMistake": "What the user originally got wrong"
}
```

### Required Fields
- `question` - The question text
- `choices` - Array with letter and text
- `correctAnswer` - Letter of correct choice

### Optional Fields (auto-default if missing)
- `id` - Auto-generated from array index
- `title` - Defaults to "Question N"
- `topic` - Defaults to "General"
- `explanation` - Defaults to "No explanation provided"
- `keyFormulas` - Empty array if not provided
- `yourMistake` - Only shown if user gets it wrong

### Topics Used
- Fixed Income
- FSA
- Equity
- Derivatives
- Portfolio Management
- Economics
- Quant
- Alternatives
- Ethics

### To Add New Questions
1. Open `questions.json`
2. Add new object to the `questions` array
3. Increment `id` from last question
4. Save and refresh browser

### To Bulk Add Questions
Append to the questions array. The app auto-handles IDs if not provided.

## App Modes

### Quiz Mode (`startQuiz()`)
- Random selection from pool
- Score tracking
- Shows explanation after each answer

### Learn Mode (`startLearn()`)
- Quizlet-style mastery
- Correct = removed from pool
- Wrong = moved to back half of pool
- Continues until all mastered

### Qbank Mode (`startQbank()`)
- All questions displayed on scrollable page
- Shows question + answer + explanation
- For review/study purposes

## Key JavaScript Methods

| Method | Purpose |
|--------|---------|
| `loadQuestions()` | Fetches and normalizes questions.json |
| `selectMode(mode)` | Switches between quiz/learn/qbank |
| `startQuiz()` | Initializes quiz mode |
| `startLearn()` | Initializes learn mode |
| `startQbank()` | Renders all questions for review |
| `displayQuestion()` | Renders current quiz question |
| `submitAnswer()` | Handles answer submission |
| `shuffle(array)` | Fisher-Yates shuffle |

## CSS Organization

```
style.css structure:
- :root variables (colors, shadows)
- Base styles (body, container)
- Buttons (.btn, .btn-primary, .btn-secondary, .btn-mode)
- Start screen
- Quiz screen (.question-card, .choices)
- Explanation panel
- Results screen
- Qbank styles (.qbank-item, .qbank-question, etc.)
- Learn mode styles
- Mobile responsive (@media queries at bottom)
```

## Common Tasks

### Change number of quiz options
Edit `index.html` → `#num-questions` select options

### Add new topic
Just use it in questions.json - auto-populates dropdowns

### Change mobile breakpoint
Edit `@media (max-width: 600px)` in style.css

### Modify Learn mode difficulty
Edit `submitLearnAnswer()` in app.js - change where wrong answers reinsert

## Testing Locally

Just open `index.html` in browser. No build step needed.
Uses fetch() for questions.json so needs to be served (not file://).

Quick local server: `python -m http.server 8000`
