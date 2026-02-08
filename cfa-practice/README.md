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

---

## Best Practices for Writing Questions

When translating questions into JSON, follow these guidelines to make them feel like real CFA exam questions:

### 1. Use vignette-style context
Don't write bare-bones prompts. Give the question a realistic scenario with names, firms, and specific details.

**Bad:** `"Manager receives written approval for bonus from client. This is:"`
**Good:** `"Sarah Chen, CFA, is a portfolio manager at Ridgewood Capital. One of her clients, Apex Industries, offers Sarah a performance-based bonus of $25,000..."`

### 2. Ask for the full calculation, not just the formula
If a question involves a formula, provide actual numbers and ask for the computed answer. Don't just ask which formula component goes where.

**Bad:** `"The fixed rate on a currency swap uses which PV factor in the numerator?"`
**Good:** `"A 2-year currency swap has annual payments. PV factors: PV₁ = 0.9610, PV₂ = 0.9070. The annual fixed rate is closest to:"`

### 3. Show the model/equation when relevant (Quant)
For regression and time-series questions, write out the model specification so the student can plug in values, just like the real exam.

**Bad:** `"AR(2) model on first-differenced sales growth. Intercept = 0.0024, b1 = -0.2021..."`
**Good:** `"An analyst estimates an AR(2) model: Δŷ_t = b₀ + b₁Δy_(t-1) + b₂Δy_(t-2), where Δy_t = SG_t - SG_(t-1). Coefficients: b₀ = 0.0024..."`

### 4. Make the student solve the problem end-to-end
The answer choices should be final numerical answers or conclusions, not intermediate steps. If there's a multi-step calculation, the student should have to work through all of it.

### 5. Include plausible distractors
Wrong answer choices should reflect common mistakes (using wrong time period, forgetting a step, mixing up formulas). This tests real understanding.
