# CFA Practice Tester

Practice quiz app for reviewing CFA questions you missed.

## How to Use

1. Open `index.html` in a browser
2. Pick number of questions and topic
3. Click Start Quiz
4. Tap your answer, then Submit
5. See explanation, tap Next

---

## Adding Questions

Edit `questions.json`. Each question needs:

```json
{
  "question": "Your question text here",
  "choices": [
    {"letter": "A", "text": "First option"},
    {"letter": "B", "text": "Second option"},
    {"letter": "C", "text": "Third option"}
  ],
  "correctAnswer": "B"
}
```

**Optional fields** (add any you want):
- `"title"` - Question title
- `"topic"` - Category like "Fixed Income", "Equity", etc.
- `"explanation"` - Why the answer is correct
- `"keyFormulas"` - Array of formulas: `["Formula 1", "Formula 2"]`
- `"yourMistake"` - What you got wrong originally

### Full Example

```json
{
  "questions": [
    {
      "title": "Credit Migration Return",
      "topic": "Fixed Income",
      "question": "A bond has YTM of 1.0% and modified duration of 4.5. Calculate the expected 1-year total return.",
      "choices": [
        {"letter": "A", "text": "-0.14%"},
        {"letter": "B", "text": "0.86%"},
        {"letter": "C", "text": "1.00%"}
      ],
      "correctAnswer": "B",
      "explanation": "Total return = YTM + Price Return\n\n• Price return: -0.14%\n• YTM: +1.00%\n• Total: 0.86%",
      "keyFormulas": ["Total Return = YTM + Price Return"],
      "yourMistake": "Forgot to add YTM"
    },
    {
      "question": "Second question here...",
      "choices": [
        {"letter": "A", "text": "Option A"},
        {"letter": "B", "text": "Option B"}
      ],
      "correctAnswer": "A"
    }
  ]
}
```

---

## Adding Questions from Chat

When you send me your list of missed questions, I'll format them into JSON you can copy straight into `questions.json`.

Just paste your questions in any format like:

```
Q1 - Question Title

Question: The question text...

Your Answer: What you picked (why you were wrong)

Correct Answer: The right answer

Explanation: Why it's correct...
```

And I'll convert it to the JSON format for you.
