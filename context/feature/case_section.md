# Case Study Page - Implementation Documentation

## Overview

The Case Study Page is implemented as a dynamic, storytelling-driven detail page at `/work/[slug]`.

It is no longer a placeholder or a slug-routing concept. The route now renders a full premium narrative layout for every project using shared case study data from `lib/data.ts`.

The current experience includes:

- Hero section with project summary and metadata
- Interactive Storyline embed from `public/story.html`
- Timeline / journey section
- Alternating reusable content sections
- Quote / testimonial block
- Process section
- Gallery section
- Results and impact stats
- Primary CTA section
- Related case studies section

---

## Status

Completed

---

## Main Files

### Route

- `app/work/[slug]/page.tsx`

### Shared Data

- `lib/data.ts`

### Case Study Components

- `components/CaseStudy/CaseStudyMotion.tsx`
- `components/CaseStudy/CaseStudyReveal.tsx`
- `components/CaseStudy/Timeline.tsx`
- `components/CaseStudy/CaseSection.tsx`
- `components/CaseStudy/Gallery.tsx`
- `components/CaseStudy/Stats.tsx`

### Supporting Asset

- `public/story.html`

### Visual Reference

- `context/screenshot/case_section.png`

---

## Actual Route Behavior

The route is dynamic and uses `generateStaticParams()` to prebuild all project slugs.

Each page:

- looks up the correct project with `getProjectBySlug(slug)`
- generates metadata per case study
- renders the same layout structure using project-specific data
- shows related case studies from the remaining project entries

If a slug is missing, the route calls `notFound()`.

---

## Real Data Structure

Each `Project` in `lib/data.ts` now includes a `caseStudy` object.

Documented fields:

- `heroLabel`
- `heroTitle`
- `heroSummary`
- `client`
- `engagement`
- `services`
- `journey`
- `sections`
- `quote`
- `process`
- `gallery`
- `stats`
- `ctaTitle`
- `ctaDescription`

This makes the route reusable across all work pages without rewriting the page structure for each project.

---

## Implemented Page Structure

### 1. Hero Section

Purpose:

- Introduces the case study
- Shows title, summary, tags, and quick project facts

Included content:

- hero label
- hero title
- hero summary
- tags
- client
- engagement
- outcome
- sidebar services list
- direct CTA buttons

### 2. Storyline Embed Section

Purpose:

- Shows an interactive proof point instead of only static description

Current behavior:

- embeds `public/story.html` with an iframe
- uses a framed container with responsive sizing
- appears for the current implementation of the case study route

Note:

The current shipped route embeds the Storyline section in the main case study layout rather than restricting it to a single slug only.

### 3. Timeline Section

Purpose:

- Shows the project journey in a simple visual sequence

Current layout:

- stacked cards on smaller screens
- four-column grid on medium and larger screens

### 4. Reusable Narrative Sections

Purpose:

- Handles challenge / solution / impact style storytelling blocks

Component:

- `components/CaseStudy/CaseSection.tsx`

Features:

- alternating layout using `reverse`
- accent-based visual treatment
- reusable title / text / eyebrow structure

### 5. Quote Section

Purpose:

- Adds trust and a mid-page emphasis point

Content:

- testimonial text
- attribution
- role / organization context

### 6. Process Section

Purpose:

- Shows the working method behind the result

Current behavior:

- renders ordered process steps from project data
- uses numbered rows in a framed block

### 7. Gallery Section

Purpose:

- Shows supporting visual frames for the work

Component:

- `components/CaseStudy/Gallery.tsx`

Current behavior:

- uses gallery items from `lib/data.ts`
- renders accent-driven placeholder visual cards
- supports mobile and desktop responsive grids

### 8. Results Section

Purpose:

- Grounds the story with measurable proof

Component:

- `components/CaseStudy/Stats.tsx`

Current behavior:

- renders stats cards with value, label, and supporting detail

### 9. CTA Section

Purpose:

- turns the case study into a conversion touchpoint

Current actions:

- `Start Your Project`
- `Browse More Work`

### 10. Related Case Studies Section

Purpose:

- keeps users moving through the portfolio
- extends the storytelling system beyond one page

Current behavior:

- shows three other project links
- uses shared project data for continuity

---

## Animation System

Animation is handled by:

- `components/CaseStudy/CaseStudyMotion.tsx`
- `components/CaseStudy/CaseStudyReveal.tsx`

Current GSAP behavior:

- targets `.case-study-reveal` blocks
- fades sections in with upward motion
- uses ScrollTrigger
- starts when each block enters the viewport

This replaced the earlier draft idea of manually wrapping every section with standalone `fade-section` logic.

---

## Design Rules Reflected In The Shipped UI

- dark zinc background system
- large rounded containers
- spacious section rhythm
- editorial-style headings
- muted secondary text
- layered gradients and glass-like framing
- responsive layout from mobile through desktop

---

## Missing Information Added In This Documentation

This updated version explicitly documents items that were missing or inaccurate in older drafts:

- the real component folder is `components/CaseStudy/`
- the route is already implemented, not just planned
- metadata generation exists per project
- shared case study data exists for all project slugs
- the page includes related case studies
- motion is implemented through reusable wrappers
- the embed is currently part of the shipped layout, not only a concept note
- validation has already been completed

---

## Validation

Completed:

- [x] Dynamic slug route working
- [x] Correct project loads from shared data
- [x] `public/story.html` embedded in the case study page
- [x] Alternating sections implemented
- [x] GSAP reveal animation added
- [x] Responsive layout supported
- [x] `npm run lint`
- [x] `npm run build`

---

## Future Improvement Notes

Possible next upgrades:

- use real project media in gallery cards
- support project-specific embed rules if only some slugs should show Storyline
- add richer testimonial data
- add SEO-specific fields per case study
- move project content into a CMS if the portfolio grows

---

## Summary

This feature is now a reusable case study system, not just a page mockup.

It helps the portfolio move from showing projects to explaining the thinking, process, and outcomes behind them in a more persuasive way.
