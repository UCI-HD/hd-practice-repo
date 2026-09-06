# Task Board

A small file-based task board used to track team work.

## Project structure

- `data/tasks.json` — task data
- `src/task-utils.js` — task helpers
- `src/index.js` — simple command-line output

## Run

```bash
node src/index.js
```

## Exercise: Resolve a merge conflict

This repository includes two practice branches that intentionally edit the same
line in `docs/project-notes.md` in different ways:

- `exercise/conflict-reviewed` — says changes should be reviewed by a teammate
- `exercise/conflict-tested` — says changes should be tested before merging

To create the conflict:

1. Start on `main`.
2. Merge `exercise/conflict-reviewed` into `main`. This merge should succeed.
3. Then merge `exercise/conflict-tested` into `main`. Git should report a merge
   conflict in `docs/project-notes.md`.
4. Open the conflicted file and inspect the conflict markers.
5. Resolve the conflict by keeping both requirements in one sentence:

   `New capabilities should be added through focused branches, tested, and reviewed by a teammate before they reach main.`

6. Mark the file as resolved and complete the merge commit.
7. Run `git status` and confirm the working tree is clean.

The goal is to practice recognizing why a conflict happened, choosing the final
content deliberately, and completing the merge rather than simply picking one
side.
