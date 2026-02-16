# File Fragment Fugitive - Solution Guide 🔐

> **For Validators/Moderators Only** - Keep private

---

## Challenge Information

- **Challenge Name:** The File Fragment Fugitive
- **Category:** File Treasure Hunt + Branch Navigation
- **Difficulty:** Expert (40 points)
- **Validation Code:** `FILE_FRAGMENT_FUGITIVE`

---

## Complete Solution

### Step 1: Discover the Branches

Player lists all branches:
```bash
git branch -a
# or via GitHub: https://github.com/{owner}/the-file-fragment-fugitive/branches
```

Branches found:
- `main` (default)
- `feature-auth`
- `feature-api`
- `develop`

### Step 2: Explore Each Branch

**feature-auth:**
```bash
git checkout feature-auth
ls -la
cat .fragment.1
# Output: FRAGMENT_1=FILE_
```

**feature-api:**
```bash
git checkout feature-api
ls -la
cat .fragment.2
# Output: FRAGMENT_2=FRAGMENT_
```

**develop:**
```bash
git checkout develop
ls -la
cat .fragment.3
# Output: FRAGMENT_3=FUGITIVE
```

### Step 3: Assemble the Code

Order: Fragment 1 → Fragment 2 → Fragment 3

```
FILE_ + FRAGMENT_ + FUGITIVE = FILE_FRAGMENT_FUGITIVE
```

### Step 4: Submit

Submit in ALL_CAPS_WITH_UNDERSCORES format:
```
FILE_FRAGMENT_FUGITIVE
```

---

## Validation Checklist

- [ ] Code matches exactly: `FILE_FRAGMENT_FUGITIVE`
- [ ] Format is correct: ALL_CAPS_WITH_UNDERSCORES
- [ ] Points adjusted for hints used (5 points per hint)

---

## Common Wrong Submissions

| Submission | Issue | Response |
|------------|-------|----------|
| `file_fragment_fugitive` | Wrong case | "Use ALL CAPS" |
| `FILEFRAGMENTFUGITIVE` | Missing underscores | "Include underscores" |
| `FRAGMENT_FILE_FUGITIVE` | Wrong order | "Check fragment numbers" |
| `FILE_FRAG_FUGITIVE` | Incomplete | "Find all 3 fragments" |

---

## Hint System

| Hint | Cost | Remaining Points |
|------|------|------------------|
| Hint 1 (branches) | 5 | 35 |
| Hint 2 (file names) | 5 | 30 |
| Hint 3 (order) | 5 | 25 |
| Hint 4 (assembly) | 5 | 20 |

---

## Recording Submissions

```markdown
## Submissions - File Fragment Fugitive

| Participant | Date | Code | Hints | Points | Status |
|-------------|------|------|-------|--------|--------|
| @username   | YYYY-MM-DD | FILE_FRAGMENT_FUGITIVE | 1 | 35 | ✅ |
```

---

**Last Updated:** 2026-02-16
**Version:** 1.0
