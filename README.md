# The File Fragment Fugitive 🧩

> **A Git Arcana Challenge**

---

## The Challenge

### The Riddle

```
Scattered pieces tell the whole,
Like fragments of a broken scroll.
Across the repository wide,
The code is split, divided, and disguised.

Three paths diverge in a git-made wood,
Each holds a piece where understanding stood.
Find the branches that time forgot,
Assemble the fragments they quietly got.
```

### Category
**File Treasure Hunt + Branch Navigation** - Multi-branch puzzle requiring discovery and assembly.

### Difficulty
**Expert** (40 points) - 4+ steps, 20-30 minutes

---

## Instructions

> ⚠️ **Warning:** The validation code is fragmented across this repository.

### What You Know

1. The code is split into **3 fragments**
2. Each fragment lives in a **different branch**
3. Fragments are stored in **hidden files**
4. You must assemble them in the **correct order**
5. Final format: `ALL_CAPS_WITH_UNDERSCORES`

### What You Need to Discover

- Which branches exist (beyond the default)
- Where the fragment files are hidden in each branch
- What order the fragments should be assembled
- How the fragments combine to form the validation code

---

## Hints

> 💡 **Need a hint?** (Each hint costs 5 points)

<details>
<summary>Hint 1 - The Branches</summary>

Not all branches are visible at first glance. Use `git branch -a` or check the branches tab.

</details>

<details>
<summary>Hint 2 - The Files</summary>

Each branch contains a file named `.fragment.X` where X is the piece number.

</details>

<details>
<summary>Hint 3 - The Order</summary>

Branch names hint at their order: auth → api → develop (alphabetically by purpose)

</details>

<details>
<summary>Hint 4 - Assembly</summary>

Fragment 1 + Fragment 2 + Fragment 3 = Complete Code

</details>

---

## Submission

Submit your validation code in the format: `ALL_CAPS_WITH_UNDERSCORES`

**Example:** `EXAMPLE_CODE_HERE`

---

## Credits

- **Challenge Author:** Anas
- **Category:** File Treasure Hunt + Branch Navigation
- **Part of:** Git Arcana Challenge Series

---

## License

This challenge is part of the Git Arcana collection.
