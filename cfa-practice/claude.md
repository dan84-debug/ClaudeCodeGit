# CFA Level III Practice - Claude Guide

Quick ref for navigating and editing this codebase. User-facing docs are in `README.md`.

## File Structure
```
cfa-practice/
├── index.html           # all screens
├── app.js               # all logic: class CFAPracticeTester
├── style.css            # styling (CSS variables in :root)
├── marked.min.js        # vendored markdown renderer (no CDN)
├── questions.json       # GENERATED - never hand-edit
├── build_questions.py   # *_qbank.md -> questions.json (stdlib only, re-runnable)
├── aa_/dv_/pc_/pm_/pw_qbank.md   # THE QUESTIONS LIVE HERE (cme_qbank.md optional)
├── legacy/questions_l2.json      # retired L2 set, reference only
└── claude.md            # you are here
```

## Workflow: change questions
1. Edit the bank `.md` (not `questions.json`).
2. Run `python3 build_questions.py` - it validates and exits non-zero on failure.
3. Test over http: `python3 -m http.server` (fetch does not work from `file://`).

Bank layout (same in every bank): header, `## Flags`, `## Table of Contents`, body of
group headings (`# EQ2 — Title`, or `# Standalone — ...`) with `### Q12 — Title [TAG]`
blocks, `## Summary by Topic` (Q-number -> topic; this is where `topic` comes from),
optional formulas/concepts sections, then `# Appendix — Full Vignettes` with
`## GROUPID — Title` entries. Block fields: `**Context (GID):**`, `**Question:**`
(choices are lines `A. text`), `**Correct Answer:**`, `**Explanation:**` (bullets
`- **A is wrong.** ...`) or `**Model Answer / Explanation:**` (essays), `**Flag:**`,
`**Key Principle:**` (`> quote`).

The build strips personal scoring from the banks: `**Your Answer:**`, `**Your
Response:**`, `**Gap in your answer:**`, tick/cross marks in headings, and
`(your pick)`. Stray tick/cross glyphs used as content are rewritten to "(met)" /
"(not met)". The script fails if any of those strings remain in the JSON.
`*(my reconstruction)*` notes are kept on purpose.

## questions.json schema (version 2)
```json
{
  "version": 2,
  "vignettes": { "pc:EQ1": { "title": "...", "text": "<markdown>" } },
  "questions": [{
    "id": "pc:EQ-12",            // bank prefix + [TAG]; fallback bank:Qn on duplicate tags
    "bank": "pc", "num": 12,
    "section": "Portfolio Construction",   // aa Asset Allocation, dv Derivatives,
                                           // pm Performance, pc Portfolio Construction,
                                           // pw PM Pathway, cme CME
    "topic": "...", "title": "...",
    "type": "mc" | "essay",
    "group": "pc:EQ3" | null,    // null = Standalone; vignette text is stored once per group
    "groupOrder": 1,
    "context": "<md>", "stem": "<md>",
    "choices": [{"letter":"A","text":"..."}],        // [] for essays
    "correctAnswer": "C",                            // "" for essays
    "choiceNotes": {"A":{"verdict":"wrong|correct","text":"<md>"}},
    "modelAnswer": "<md>",                           // essays
    "keyPrinciple": "...", "flag": "...", "source": "pc_qbank.md#Q12"
  }]
}
```

## App modes (app.js)
- **Quiz / Learn** - MC only. `startQuiz()` (weighted sampling), `startLearn()`.
  `renderQuestion()` shows `context` + `stem`; `submitAnswer()` records stats and adds
  per-choice notes via `addChoiceNote()`. Choices may be shuffled: `currentOrder` holds the
  original letters in displayed order; grading always uses the original letter, displayed
  letters are re-labelled A, B, C. Stored explanations are never reordered.
- **Item sets** - `openItemSetList()`, `startItemSet()`, `renderItemSet()` (exam and
  review share one renderer, `is.mode`), `submitItemSet()`, `showItemSetResults()`.
  Only groups with >= 2 questions are listed. The short `context` is not shown here (the
  full vignette replaces it). Choice shuffling defaults to off.
- **Essays** - `startEssays()`, `revealEssay()`, `gradeEssay()`. Drafts live in
  `essayDrafts` (memory only). Re-grading in the same session replaces the earlier record
  (`recordResult` returns the previous entry, `revertResult` restores it).
- **Qbank** - `startQbank()`, `applyQbankFilters()` (search + type), lazy
  `fillQbankItem()` on `<details>` toggle, paged by `QBANK_PAGE`.

Filters: `this.filters = {sections:Set, topic, missedOnly}`; `poolFor(mode)` and
`setsFor()` apply them. No section chips selected = all sections.

## Stats and storage
- `cfa-question-stats-v2`: `{ [id]: {attempts, correct, incorrect, partial, lastSeen, lastResult} }`
  (`recordResult`, `mergeStat`, `importQuestionStats`). The old `cfa-question-stats` key is
  ignored and left alone.
- `cfa-learn-progress-v2`: learn session (string ids). The old `cfa-learn-progress` key is
  removed on load.
- "Missed" = latest `lastResult` is `incorrect` or `partial`.
- Quiz weight: `1 + 3*missRate(topic) + 2*missRate(question)`; unseen = 1.5
  (`questionWeight`, `weightedSample`).
- Anything that must survive should go in stats/learn keys; essay drafts are deliberately
  not persisted.

## Markdown
`md()` / `mdi()` wrap the vendored `marked` (GFM tables, `breaks: true`). Bank content is
trusted and not sanitised. Use `esc()` for plain strings (titles, topic names) put into
`innerHTML`.

## Testing
Playwright is installed (Chromium at `/opt/pw-browsers/chromium`; do not run
`playwright install`). Serve the folder, drive the page, and check for console errors.
Handy hook: `window.app` is the app instance.

## Styling Notes
Colors are CSS variables in `:root`: `--primary` blue, `--success` green, `--error` red,
`--warning` amber. Item-set two-pane layout kicks in at 900px; below that the vignette
sits above the question and can be collapsed.
