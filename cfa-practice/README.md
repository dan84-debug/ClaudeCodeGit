# CFA Level III Practice

A static practice app for the Level III question banks: multiple-choice quizzes,
exam-style vignette item sets, and self-graded constructed-response essays.
No build step for the app itself.

## Run it

`questions.json` is loaded with `fetch`, so open the app over http (not `file://`):

```
cd cfa-practice
python3 -m http.server 8000      # then open http://localhost:8000
```

## Modes

| Mode | What it does |
|---|---|
| **Quiz** | N multiple-choice questions. Weighted toward your weak topics and missed questions (checkbox, on by default). Per-choice explanations, key principle and any flag appear after you answer. |
| **Learn** | Multiple-choice only. A question is mastered once you answer it correctly; misses return later. Progress is saved and can be resumed or exported. |
| **Item sets** | Exam-style vignette sets (2+ questions on one vignette). The full vignette stays beside each question (collapsible panel above it on a phone). Nothing is revealed until you submit the set. Multiple-choice and essay items can be mixed. After submitting you get a score and can review every item. |
| **Essays** | Constructed-response questions. Write a draft (kept in memory only, never saved), reveal the model answer, then grade yourself **Got it / Partial / Missed**. |
| **Qbank** | Browse everything with answers, per-choice notes and model answers. Search box and a type filter (multiple choice / essay). |

Filters on the start screen: **Section** (chips, none selected = all) then **Topic**.
**Missed only** limits Quiz, Learn, Item sets and Essays to questions whose latest result
was incorrect or partial (never-attempted questions are excluded; for Item sets it lists
sets that contain at least one missed question and plays the whole set).

## Stats

Every answered multiple-choice question and every essay self-grade is recorded in
`localStorage['cfa-question-stats-v2']`:

```json
{ "pc:EQ-12": { "attempts": 3, "correct": 1, "incorrect": 1, "partial": 1,
                "lastSeen": "2026-10-17T16:00:00.000Z", "lastResult": "partial" } }
```

The start screen shows attempted / total, accuracy (correct = 1, partial = 0.5), the
number of missed questions, and your five weakest topics (at least 3 attempts).
**Export Stats** downloads this map; **Import Stats** merges a file by adding counts and
keeping the latest `lastSeen` / `lastResult`. It accepts both the old
`{correct, incorrect}` shape and the new one, and skips ids that are not in the current
question set. Stats live in the browser only, so export them if you switch devices.

Quiz weighting: `w = 1 + 3 * missRate(topic) + 2 * missRate(question)`, where
`missRate = (incorrect + 0.5 * partial) / attempts`. Never-seen questions get `w = 1.5`.

## Question banks and the build step

The questions live in the bank files, not in the JSON:

```
aa_qbank.md   Asset Allocation          (134 questions, 24 essays)
dv_qbank.md   Derivatives               (153, 43)
pm_qbank.md   Performance               (166, 43)
pc_qbank.md   Portfolio Construction    (222, 57)
pw_qbank.md   PM Pathway                (386, 42)
cme_qbank.md  CME                       (optional, not in the repo yet)
```

**To change or add questions: edit the bank `.md`, then run**

```
python3 build_questions.py
```

This regenerates `questions.json` (do not edit it by hand). The script validates counts,
unique ids, that every multiple-choice answer exists among its choices, that every group
has a vignette and every question a topic, and that no personal scoring text (tick/cross
marks, "Your Answer", "your pick") leaked into the JSON. It exits non-zero on failure.
If `cme_qbank.md` is present it is included automatically; if not, it is skipped with a
printed warning.

A question block in a bank looks like this (see any `*_qbank.md` for full examples):

```
### Q12 — Short title [EQ-12]            (add " (Essay)" for an essay)

**Context (EQ3):**       short slice of the vignette (optional)
**Question:**            stem; multiple-choice options are lines "A. text"
**Correct Answer:** C
**Explanation:**         - **A is wrong.** ...   - **C is correct.** ...
**Flag:** ...            optional
**Key Principle:**       > one-line takeaway
```

Essays use `**Model Answer / Explanation:**` instead of `Correct Answer` / `Explanation`.
Full vignettes go in the `# Appendix — Full Vignettes` section as `## GROUPID — Title`.
The `[TAG]` in the heading becomes the stable question id (`pc:EQ-12`), so renumbering
Q-numbers does not reset your stats.

## Files

```
index.html            screens
app.js                the app (class CFAPracticeTester)
style.css             styles
marked.min.js         vendored markdown renderer (marked 12.0.2, MIT, no CDN)
questions.json        GENERATED from the banks by build_questions.py
build_questions.py    bank markdown -> questions.json (stdlib only)
legacy/               the retired Level II question set, kept for reference only
claude.md             notes for working on this code
```

The `mock_*.md` files, the PDFs, `pm_content_map_v2.md` and `CFA_8_Week_Sprint.md` are
study material and are not read by the app.
