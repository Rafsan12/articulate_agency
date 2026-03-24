# Selected Work Page - Documentation

## Overview

The **Selected Work page** is a dedicated portfolio listing page linked from the **Core Capabilities** section. You can find this section in `components/ServicePreview`. Add a button beside "Book On Whatsapp" via a CTA like:

> "See Our Work" / "View Projects" / "Explore Case Studies"

This page showcases all projects in a clean, grid-based layout with subtle animations and strong visual hierarchy. It acts as the **entry point into detailed case studies**.

---

## Goals

- Provide a **quick overview of all projects**
- Encourage users to **explore case studies**
- Maintain a **premium, minimal design**
- Ensure **smooth UX with animations (GSAP)**

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI Library:** shadcn/ui
- **Styling:** Tailwind CSS
- **Animation:** GSAP
- **Icons:** Lucide (via shadcn)

---

## Folder Structure

```text
/app
  /work
    page.tsx

/components
  ProjectCard.tsx
  SectionHeader.tsx

/lib
  data.ts
```

---

### Reference

## You can check the screenshot available (`context/screenshot/portfolio.png`)

## Data Structure

Create a centralized data file:

```ts
// /lib/data.ts

export const projects = [
  {
    id: "design-system",
    title: "Design System Overhaul",
    description:
      "Built a comprehensive design system with reusable UI components.",
    image: "/images/project-1.jpg",
    tags: ["Design", "System", "UI Components"],
    slug: "design-system-overhaul",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard Redesign",
    description: "Improved data visualization and user flow.",
    image: "/images/project-2.jpg",
    tags: ["Product Design", "Analytics", "UX"],
    slug: "saas-dashboard-redesign",
  },
];
```

Optional:

```tsx
onMouseEnter={() => {
  gsap.to(cardRef.current, { scale: 1.03, duration: 0.3 });
}}
onMouseLeave={() => {
  gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
}}
```

---

# Add a gsap animation for this part.

## Design Guidelines

- **Background:** `bg-zinc-950`
- **Cards:** `bg-zinc-900 border-zinc-800`
- **Text:**
  - Heading -> `text-white`
  - Description -> `text-zinc-400`

- **Radius:** `rounded-xl`
- **Spacing:** generous (`gap-6`, `py-20`)
- **Hover:** subtle scale + smooth transition

---

## Responsiveness

| Breakpoint | Columns |
| ---------- | ------- |
| Mobile     | 1       |
| Tablet     | 2       |
| Desktop    | 3       |

---

## Naming Ideas for CTA

- See Our Work
- View Projects
- Explore Case Studies
- Browse Portfolio
- Discover Our Work

---

## Key Insight

This page is not just a gallery -
it's a **conversion gateway** into your case studies.

Make sure:

- Visuals are strong
- Titles are clear
- Hover feels premium

---

## Done Checklist

- [ ] CTA connected from homepage
- [ ] Projects data structured
- [ ] Grid responsive
- [ ] Animations smooth
- [ ] Cards clickable
- [ ] Case study routing ready

---

## Final Note

Keep this page **fast, clean, and visual-first**.

The real depth lives in:
`/work/[slug]` (case study pages)

This page should make users think:

> "These guys know what they're doing - let me click."

---
