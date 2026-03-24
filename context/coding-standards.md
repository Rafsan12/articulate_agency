# Coding Standards

## Purpose

These standards define how code should be written and organized in this repository. They are meant to keep the codebase consistent, maintainable, and aligned with the current project stack.

---

## TypeScript

- Use TypeScript with strict mode enabled
- Avoid `any`; use proper types or `unknown` when necessary
- Define clear types for component props, shared data structures, and utility inputs/outputs
- Prefer type inference when it keeps code readable, and add explicit types when they improve clarity
- Use `Readonly` and narrow unions where they help prevent accidental misuse

---

## React

- Use functional components only
- Keep components focused on a single responsibility
- Extract repeated UI or behavior into reusable components or hooks when duplication becomes meaningful
- Prefer simple, readable component logic over clever abstractions
- Keep client-side interactivity scoped to the smallest reasonable component

---

## Next.js

- Use the App Router conventions already present in this project
- Prefer server components by default
- Only add `"use client"` when required for hooks, browser APIs, or interactive behavior
- Keep route files in `app/` using Next.js naming conventions such as `page.tsx` and `layout.tsx`
- Use the `@/*` import alias for project-local imports
- Fetch and prepare data as close to the server boundary as practical

---

## Tailwind CSS v4

This project uses Tailwind CSS v4 with CSS-based configuration.

- Do not add `tailwind.config.js` or `tailwind.config.ts` unless the project requirements change
- Configure theme tokens in `app/globals.css` using Tailwind v4 directives and CSS custom properties
- Prefer design tokens and shared utility patterns over one-off styling values
- Keep styling in Tailwind utility classes and shared global/theme definitions
- Avoid inline styles unless there is a clear technical reason

Example pattern:

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --font-sans: var(--font-sora);
}
```

---

## File Organization

Use the current repository structure as the default:

- Routes and layouts: `app/`
- Shared page sections: `components/Home/`
- Reusable UI primitives: `components/ui/`
- Shared utilities: `lib/`
- Working project documentation and AI context: `context/`
- Static assets: `public/`

When adding files:

- Keep feature or section components close to related components
- Put low-level reusable UI in `components/ui/`
- Put generic helper functions in `lib/`

---

## Naming

- Components: PascalCase, for example `Hero.tsx`
- Utility files: short, descriptive lowercase names when appropriate, for example `utils.ts`
- Functions and variables: camelCase
- Constants: SCREAMING_SNAKE_CASE when they are true constants
- Types and interfaces: PascalCase
- Route files must follow Next.js conventions like `page.tsx` and `layout.tsx`

---

## Styling

- Use Tailwind CSS for styling
- Reuse existing visual patterns before introducing new ones
- Preserve the established typography and theme tokens from `app/layout.tsx` and `app/globals.css`
- Favor consistent spacing, sizing, and radius values over ad hoc styling
- Keep the UI polished, intentional, and aligned with the project's brand direction

---

## Data and State

- Prefer server-rendered data flows when possible
- Use client state only for interactive UI concerns
- Keep prop shapes small and explicit
- Validate external or uncertain data before relying on it
- Introduce heavier data-layer patterns only when the project actually needs them

---

## Error Handling

- Handle expected failure states explicitly
- Avoid silent failures
- Show user-facing error states in a clear and calm way when needed
- Keep error handling straightforward and proportional to the feature complexity

---

## Code Quality

- Make the smallest reasonable change that fully solves the task
- Do not leave commented-out code behind
- Remove unused imports, variables, and dead branches
- Prefer readability over premature abstraction
- Keep functions and components manageable in size
- Follow existing repo patterns unless there is a strong reason to improve them

---

## Validation

Before considering work complete, use the repository's standard validation steps when relevant:

- `npm run lint`
- `npm run build`

If a task does not require both, clearly state what was or was not run.
