# AI Interaction Guidelines

## Purpose

These guidelines define how AI-assisted work should happen in this repository so changes stay intentional, reviewable, and aligned with the project direction.

---

## Communication

- Be concise and direct
- Briefly explain non-obvious decisions
- Ask before making large refactors or architectural changes
- Do not add features that are not part of the requested scope
- Do not delete files without explicit clarification
- Surface risks, assumptions, and tradeoffs when they matter

---

## Standard Workflow

Use this workflow for most feature and fix work:

1. Document the task in `context/current-feature.md` when the work is substantial enough to benefit from tracking.
2. Create a branch for the feature or fix when branch workflow is being used for that task.
3. Implement the requested change.
4. Validate the work. For code changes, this usually means checking the UI as needed and running `npm run lint` and/or `npm run build`.
5. Iterate until the change is working and the validation steps pass.
6. Ask before committing.
7. Merge only after the work is approved.
8. Mark the task completed in `context/current-feature.md` when that tracking file was used.

Do not commit without permission. If the build or lint fails and the task requires those checks, fix the issues first or clearly report what is blocking completion.

---

## Branching

- Use a new branch for meaningful feature or fix work when following a branch-based workflow
- Preferred branch names:
  - `feature/<name>`
  - `fix/<name>`
  - `chore/<name>`
- Do not create or delete branches unless that is part of the requested workflow

---

## Commits

- Ask before committing
- Use clear, conventional commit prefixes when committing, such as `feat:`, `fix:`, or `chore:`
- Keep each commit focused on one logical change
- Do not include AI branding or signature lines in commit messages

---

## When Stuck

- If an approach fails repeatedly, stop and explain what is going wrong
- Do not keep applying random fixes without a clear hypothesis
- Ask for clarification when requirements are genuinely ambiguous or risky
- Prefer surfacing the blocker early over hiding uncertainty

---

## Code Changes

- Make minimal, targeted changes that solve the requested task fully
- Avoid refactoring unrelated code unless asked or clearly necessary
- Preserve existing codebase patterns when they are still serving the project well
- If a proposed change has non-obvious consequences, pause and confirm before proceeding

---

## Review Focus

AI-assisted changes should be reviewed with extra attention to:

- Logic errors and edge cases
- Regressions in behavior or layout
- Unnecessary complexity
- Consistency with existing project structure and style
- Performance issues in interactive components

---

## Practical Notes

- Documentation updates do not always need the full branch and tracking workflow unless requested
- Small changes can stay lightweight, but they should still be intentional and reviewable
- When validation cannot be run, state that clearly instead of implying completion
