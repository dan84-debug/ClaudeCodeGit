#!/usr/bin/env python3
"""Build questions.json (schema v2) from the *_qbank.md question banks.

Usage:  python3 build_questions.py

Edit a bank .md file, re-run this script, reload the page. Stdlib only.
cme_qbank.md is optional: included if present, skipped with a warning if not.
Exits non-zero when validation fails.
"""
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE / "questions.json"

# prefix, file, section label, expected total, expected essays (None = don't check)
BANKS = [
    ("aa", "aa_qbank.md", "Asset Allocation", 134, 24),
    ("dv", "dv_qbank.md", "Derivatives", 153, 43),
    ("pc", "pc_qbank.md", "Portfolio Construction", 222, 57),
    ("pm", "pm_qbank.md", "Performance", 166, 43),
    ("pw", "pw_qbank.md", "PM Pathway", 386, 42),
    ("cme", "cme_qbank.md", "CME", 105, None),
]

# Personal scoring that must never reach the JSON (see strip_personal / final check).
FORBIDDEN = ["✓", "✗", "your pick", "Your Answer", "Your answer", "Your Response",
             "Gap in your answer", "Your answers"]

MARKER = re.compile(
    r"^\*\*(Context(?: \(([^)]*)\))?|Question|Your Answer|Your answers|Correct Answer|"
    r"Explanation|Model Answer / Explanation|Your Response|Gap in your answer|Flag|"
    r"Key Principle):\*\*[ \t]*(.*)$"
)
HEAD = re.compile(
    r"^### Q(\d+) — (.+?) \[([^\]]+)\](?: \((Essay)\))?(?: (?:✓|✗|partial|miss))?\s*$"
)
NOTE = re.compile(r"^- \*\*([A-E]) is ([^*]*?)\.\*\*[ \t]*(.*)$")
CHOICE = re.compile(r"^([A-E])\.[ \t]+(.*)$")

warnings = []
errors = []


def warn(msg):
    warnings.append(msg)


def fail(msg):
    errors.append(msg)


def strip_personal(text):
    """Remove the 'your pick' marker; the other personal fields are dropped by field.

    A few bank passages use check/cross marks as plain content (a verification
    tick in a worked answer, a pass/fail table cell). They are rewritten as words
    so no tick or cross glyph can be mistaken for personal scoring.
    """
    text = re.sub(r"[ \t]*\(your pick\)", "", text)
    return text.replace("✓", "(met)").replace("✗", "(not met)")


def clean_block(text):
    lines = text.split("\n")
    while lines and (not lines[-1].strip() or lines[-1].strip() == "---"):
        lines.pop()
    while lines and not lines[0].strip():
        lines.pop(0)
    return "\n".join(lines).strip()


# ---------------------------------------------------------------- bank parsing
def split_bank(text):
    lines = text.replace("\r\n", "\n").split("\n")

    def find(pred, start=0):
        for i in range(start, len(lines)):
            if pred(lines[i]):
                return i
        return None

    i_toc = find(lambda l: l.startswith("## Table of Contents"))
    i_sum = find(lambda l: l.startswith("## Summary by Topic"))
    i_app = find(lambda l: l.startswith("# Appendix"))
    if None in (i_toc, i_sum, i_app):
        raise ValueError("missing TOC / Summary by Topic / Appendix heading")
    i_body = find(lambda l: l.startswith("# ") and not l.startswith("## "), i_toc)
    header = lines[:i_toc]
    toc = lines[i_toc:i_body]
    body = lines[i_body:i_sum]
    # summary runs to the next top-level or '---' + '##' section
    j = i_sum + 1
    summary = []
    while j < i_app and not (lines[j].startswith("## ") and j > i_sum):
        summary.append(lines[j])
        j += 1
    appendix = lines[i_app + 1:]
    return header, toc, body, summary, appendix


def parse_topics(summary_lines):
    topic_of = {}
    for line in summary_lines:
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 2 or cells[0] in ("Topic", "") or set(cells[0]) <= set("-: "):
            continue
        topic = cells[0]
        for m in re.finditer(r"Q(\d+)(?:\s*[–—-]\s*Q?(\d+))?", cells[1]):
            a = int(m.group(1))
            b = int(m.group(2)) if m.group(2) else a
            for n in range(a, b + 1):
                if n in topic_of and topic_of[n] != topic:
                    warn(f"Q{n} appears under two topics ({topic_of[n]!r} / {topic!r}); keeping first")
                    continue
                topic_of[n] = topic
    return topic_of


def parse_appendix(lines, bank):
    vignettes = {}
    cur = None
    buf = []

    def flush():
        if cur:
            vignettes[f"{bank}:{cur[0]}"] = {
                "title": cur[1], "text": strip_personal(clean_block("\n".join(buf)))}

    for line in lines:
        m = re.match(r"^## (\S+) — (.*)$", line)
        if m:
            flush()
            cur, buf = (m.group(1), m.group(2).strip()), []
        elif line.startswith("## "):
            warn(f"{bank}: unexpected appendix heading {line!r}")
            flush()
            cur, buf = None, []
        elif cur:
            buf.append(line)
    flush()
    return vignettes


def split_fields(block_lines):
    fields = {}
    cur = None
    context_tag = None
    for line in block_lines:
        m = MARKER.match(line)
        if m:
            name = m.group(1)
            if name.startswith("Context"):
                name = "Context"
                context_tag = m.group(2)
            cur = name
            fields.setdefault(cur, [])
            if m.group(3):
                fields[cur].append(m.group(3))
        elif cur:
            fields[cur].append(line)
    return {k: clean_block("\n".join(v)) for k, v in fields.items()}, context_tag


def split_stem_choices(text, where):
    lines = text.split("\n")
    start = None
    for i, l in enumerate(lines):
        if CHOICE.match(l) and l.startswith("A.") and any(x.startswith("B.") for x in lines[i + 1:]):
            start = i
            break
    if start is None:
        return text.strip(), [], ""
    stem = "\n".join(lines[:start]).strip()
    choices, expect, trailing = [], "A", []
    i = start
    while i < len(lines):
        l = lines[i]
        m = CHOICE.match(l)
        if m and m.group(1) == expect:
            choices.append({"letter": m.group(1), "text": m.group(2).strip()})
            expect = chr(ord(expect) + 1)
        elif not l.strip():
            nxt = next((x for x in lines[i + 1:] if x.strip()), "")
            nm = CHOICE.match(nxt)
            if not (nm and nm.group(1) == expect):
                trailing = lines[i + 1:]
                break
        elif choices:
            choices[-1]["text"] += "\n" + l.strip()
        i += 1
    trailing = "\n".join(trailing).strip()
    if trailing:
        warn(f"{where}: text after choices kept in stem")
        stem = (stem + "\n\n" + trailing).strip()
    return stem, choices, trailing


def parse_notes(expl, where):
    notes, extras, last = {}, [], None
    for line in expl.split("\n"):
        m = NOTE.match(line)
        if m:
            last = m.group(1)
            label = m.group(2).strip()
            if label in ("wrong", "correct"):
                verdict = label
            else:  # e.g. "the keyed answer" / "marked incorrect in the key" (pw Q328)
                verdict = "correct" if "keyed answer" in label else "wrong"
                warn(f"{where}: non-standard label {label!r} for {last}; verdict={verdict}")
            notes[last] = {"verdict": verdict, "text": m.group(3).strip()}
        elif last is not None:
            notes[last]["text"] += "\n" + line
        elif line.strip():
            extras.append(line)
    for k in notes:
        notes[k]["text"] = notes[k]["text"].strip()
    if extras:
        warn(f"{where}: unparsed explanation text before first bullet: {extras[0][:60]!r}")
    return notes


def parse_bank(prefix, fname, section, path):
    text = path.read_text(encoding="utf-8")
    header, toc, body, summary, appendix = split_bank(text)
    hdr = "\n".join(header)
    mq = re.search(r"\*\*Questions: (\d+)\*\*", hdr)
    declared = int(mq.group(1)) if mq else None
    topic_of = parse_topics(summary)
    vignettes = parse_appendix(appendix, prefix)

    toc_groups = [c for c in (re.match(r"^\|\s*([^|]+?)\s*\|", l) for l in toc) if c]
    toc_groups = [m.group(1) for m in toc_groups if m.group(1) not in ("Group", "---")
                  and not set(m.group(1)) <= set("-: ")]

    # walk body
    group = None
    blocks = []
    cur = None
    n_headings = 0
    for line in body:
        if line.startswith("# "):
            n_headings += 1
            if cur:
                blocks.append(cur)
                cur = None
            m = re.match(r"^# (\S+) — (.*)$", line)
            if line.startswith("# Standalone"):
                group = None
            elif not m:
                fail(f"{prefix}: cannot parse group heading {line!r}")
                group = None
            else:
                group = m.group(1)
        elif line.startswith("### "):
            if cur:
                blocks.append(cur)
            cur = {"head": line, "group": group, "lines": []}
        elif line.startswith("## "):
            if cur:
                blocks.append(cur)
                cur = None
        elif cur is not None:
            cur["lines"].append(line)
    if cur:
        blocks.append(cur)
    if n_headings != len(toc_groups):
        warn(f"{prefix}: {n_headings} group headings vs {len(toc_groups)} TOC rows")

    questions, seen_ids, group_count = [], set(), {}
    for b in blocks:
        hm = HEAD.match(b["head"])
        if not hm:
            fail(f"{prefix}: cannot parse heading {b['head']!r}")
            continue
        num, title, tag, essay = int(hm.group(1)), hm.group(2).strip(), hm.group(3), hm.group(4)
        where = f"{prefix} Q{num}"
        lines = [strip_personal(l) for l in b["lines"]]
        fields, ctx_tag = split_fields(lines)
        qid = f"{prefix}:{tag}"
        if qid in seen_ids:
            warn(f"{where}: duplicate tag {tag}; falling back to {prefix}:Q{num}")
            qid = f"{prefix}:Q{num}"
        seen_ids.add(qid)

        gid = b["group"]
        grp = f"{prefix}:{gid}" if gid else None
        order = 0
        if grp:
            group_count[grp] = group_count.get(grp, 0) + 1
            order = group_count[grp]
            if ctx_tag is not None and ctx_tag != gid:
                warn(f"{where}: context tag {ctx_tag} != group {gid}")
        elif ctx_tag:
            warn(f"{where}: context tag {ctx_tag} on a standalone question")

        stem_raw = fields.get("Question", "")
        q = {
            "id": qid, "bank": prefix, "num": num, "section": section,
            "topic": topic_of.get(num) or section, "title": title,
            "type": "essay" if essay else "mc",
            "group": grp, "groupOrder": order,
            "context": fields.get("Context", ""),
        }
        if not stem_raw:
            fail(f"{where}: no Question text")
        if essay:
            q.update({"stem": stem_raw, "choices": [], "correctAnswer": "", "choiceNotes": {},
                      "modelAnswer": fields.get("Model Answer / Explanation", "")})
            if not q["modelAnswer"]:
                fail(f"{where}: essay without model answer")
        else:
            stem, choices, _ = split_stem_choices(stem_raw, where)
            ca = re.match(r"([A-E])\b", fields.get("Correct Answer", ""))
            notes = parse_notes(fields.get("Explanation", ""), where)
            q.update({"stem": stem, "choices": choices,
                      "correctAnswer": ca.group(1) if ca else "", "choiceNotes": notes})
            marked = [k for k, v in notes.items() if v["verdict"] == "correct"]
            if q["correctAnswer"] and marked and marked != [q["correctAnswer"]]:
                warn(f"{where}: Correct Answer {q['correctAnswer']} vs notes {marked}")
            missing = [c["letter"] for c in choices if c["letter"] not in notes]
            if missing:
                warn(f"{where}: no explanation bullet for {missing}")
        q["keyPrinciple"] = "\n".join(
            re.sub(r"^>[ \t]?", "", l) for l in fields.get("Key Principle", "").split("\n")).strip()
        q["flag"] = fields.get("Flag", "")
        q["source"] = f"{path.name}#Q{num}"
        questions.append(q)

    return {"questions": questions, "vignettes": vignettes, "declared": declared,
            "topics_found": len(topic_of)}


# ---------------------------------------------------------------- output / validation
def write_json(vignettes, questions):
    with open(OUT, "w", encoding="utf-8") as f:
        f.write('{\n"version": 2,\n"vignettes": {\n')
        items = [f"{json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}"
                 for k, v in vignettes.items()]
        f.write(",\n".join(items))
        f.write('\n},\n"questions": [\n')
        f.write(",\n".join(json.dumps(q, ensure_ascii=False) for q in questions))
        f.write("\n]\n}\n")


def main():
    all_q, all_v, summary = [], {}, []
    for prefix, fname, section, exp_total, exp_essays in BANKS:
        path = HERE / fname
        if not path.exists():
            print(f"WARNING: {fname} not found - skipping {section} bank (not invented).")
            continue
        r = parse_bank(prefix, fname, section, path)
        qs = r["questions"]
        essays = sum(1 for q in qs if q["type"] == "essay")
        summary.append((prefix, len(qs), essays, r["declared"]))
        if exp_total is not None and len(qs) != exp_total:
            fail(f"{prefix}: expected {exp_total} questions, parsed {len(qs)}")
        if exp_essays is not None and essays != exp_essays:
            fail(f"{prefix}: expected {exp_essays} essays, parsed {essays}")
        if r["declared"] is not None and r["declared"] != len(qs):
            fail(f"{prefix}: header declares {r['declared']} questions, parsed {len(qs)}")
        all_q.extend(qs)
        all_v.update(r["vignettes"])

    ids = [q["id"] for q in all_q]
    if len(ids) != len(set(ids)):
        fail("duplicate question ids")
    for q in all_q:
        if q["type"] == "mc":
            letters = [c["letter"] for c in q["choices"]]
            if len(letters) < 2:
                fail(f"{q['id']}: fewer than 2 choices parsed")
            if q["correctAnswer"] not in letters:
                fail(f"{q['id']}: correctAnswer {q['correctAnswer']!r} not in choices {letters}")
        if q["group"] and q["group"] not in all_v:
            fail(f"{q['id']}: group {q['group']} has no vignette")
        if not q["topic"]:
            fail(f"{q['id']}: no topic")
    for q in all_q:
        if q["topic"] == q["section"]:
            warn(f"{q['id']}: not in Summary by Topic; topic fell back to section")

    write_json(all_v, all_q)
    blob = OUT.read_text(encoding="utf-8")
    for s in FORBIDDEN:
        if s in blob:
            fail(f"forbidden text {s!r} found in questions.json ({blob.count(s)}x)")
    json.loads(blob)  # must parse

    print("bank  total  essays  mc   declared")
    for p, n, e, d in summary:
        print(f"{p:<5} {n:>5} {e:>7} {n - e:>4}   {d}")
    print(f"ALL   {len(all_q):>5} {sum(1 for q in all_q if q['type']=='essay'):>7} "
          f"{sum(1 for q in all_q if q['type']=='mc'):>4}")
    print(f"unique ids: {len(set(ids))}/{len(ids)}   vignettes: {len(all_v)}   "
          f"groups used: {len({q['group'] for q in all_q if q['group']})}")
    print(f"wrote {OUT.name} ({len(blob) // 1024} KB)")
    for w in warnings:
        print("warn:", w, file=sys.stderr)
    if errors:
        for e in errors:
            print("FAIL:", e, file=sys.stderr)
        print(f"{len(errors)} validation failure(s)", file=sys.stderr)
        sys.exit(1)
    print("validation OK")


if __name__ == "__main__":
    main()
