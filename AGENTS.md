# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router project written in TypeScript. Route entries live in `app/`, including the home page in `app/page.tsx`, the About page in `app/about/page.tsx`, shared layout in `app/layout.tsx`, and global styles in `app/globals.css`.

Reusable UI is split between `components/Home/` for page sections such as `Hero.tsx` and `Footer.tsx`, and `components/ui/` for lower-level primitives. Shared helpers belong in `lib/`, currently `lib/utils.ts`. Static files live in `public/`.

## Build, Test, and Development Commands
- `npm run dev`: start the local development server at `http://localhost:3000`.
- `npm run build`: create the production build and catch build-time issues.
- `npm run start`: serve the production build locally after `npm run build`.
- `npm run lint`: run ESLint with the Next.js core-web-vitals and TypeScript rules.

## Coding Style & Naming Conventions
Use TypeScript with strict mode enabled. Follow the existing style: 2-space indentation, double quotes, semicolons, and functional React components. Use the `@/*` import alias for project-local imports, for example `@/components/Home/Hero`.

Name route files with Next.js conventions (`page.tsx`, `layout.tsx`). Name React components in PascalCase and keep section components grouped by feature under `components/Home/` or `components/ui/`.

## Testing Guidelines
There is no dedicated test framework configured yet. Until one is added, treat `npm run lint` and `npm run build` as the minimum validation before opening a PR. When adding tests later, place them near the feature or in a clearly named `__tests__/` folder and use names like `Hero.test.tsx`.

## Commit & Pull Request Guidelines
Recent history uses short, plain-language commit subjects such as `make a about page` and `navbar and service part design change`. Keep commits brief, imperative, and scoped to one change.

Pull requests should include a short description of the change, note any affected routes or components, and attach screenshots or recordings for UI updates. Link related issues when applicable and mention the validation you ran, such as `npm run lint` and `npm run build`.
