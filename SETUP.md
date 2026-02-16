# File Fragment Fugitive - Setup Guide 🔧

> **For Challenge Creators Only** - Do not include in public repository

---

## Overview

This challenge hides a validation code across multiple git branches. Players must find all branches and collect the fragment files to assemble the complete code.

---

## Validation Code

**`FILE_FRAGMENT_FUGITIVE`**

Split into 3 fragments:
- Fragment 1: `FILE_` (in feature-auth branch)
- Fragment 2: `FRAGMENT_` (in feature-api branch)
- Fragment 3: `FUGITIVE` (in develop branch)

---

## Repository Structure

### Main Branch
- README.md (public challenge description)
- package.md (decoy file)

### feature-auth Branch
- .fragment.1 (contains `FILE_`)

### feature-api Branch
- .fragment.2 (contains `FRAGMENT_`)

### develop Branch
- .fragment.3 (contains `FUGITIVE`)

---

## Setup Steps

1. Create the repository on GitHub
2. Push all branches: `git push -u origin main && git push origin feature-auth feature-api develop`
3. Verify all branches are visible on GitHub
4. Test the challenge by solving it yourself

---

## Solution Path

1. Player reads README.md and understands code is split across branches
2. Player lists branches: `git branch -a` or via GitHub UI
3. Player checks out each branch and finds the `.fragment.X` files
4. Player assembles fragments in order (1→2→3)
5. Player submits: `FILE_FRAGMENT_FUGITIVE`

---

## Hints (5 points each)

1. "Not all branches are visible at first glance. Use `git branch -a`"
2. "Each branch contains a file named `.fragment.X`"
3. "Branch names hint at order: auth → api → develop"
4. "Fragment 1 + Fragment 2 + Fragment 3 = Complete Code"

---

## Difficulty Tuning

**To make harder:**
- Add more branches with decoy fragments
- Use cryptic branch names
- Hide fragment files in subdirectories
- Encode fragment contents (base64, rot13)

**To make easier:**
- Reduce to 2 fragments
- Name branches more obviously (fragment-1, fragment-2, fragment-3)
- Add direct hints in README about branch names
