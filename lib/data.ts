export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  category: string;
  year: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "compliance-sprint",
    title: "Scenario-Based Compliance Sprint",
    description:
      "A branching compliance course that replaced slide-heavy training with decision-led moments and clearer retention.",
    image: "/images/project-1.jpg",
    tags: ["Storyline", "Compliance", "Branching"],
    slug: "scenario-based-compliance-sprint",
    category: "Risk and Safety",
    year: "2026",
    outcome: "Higher learner completion confidence",
  },
  {
    id: "onboarding-studio",
    title: "Modern Onboarding Studio",
    description:
      "A branded onboarding experience combining custom visuals, guided interactions, and a smoother first-week journey.",
    image: "/images/project-2.jpg",
    tags: ["Onboarding", "Custom Graphics", "UX"],
    slug: "modern-onboarding-studio",
    category: "HR and Culture",
    year: "2026",
    outcome: "Faster rollout for distributed teams",
  },
  {
    id: "assessment-lab",
    title: "Interactive Assessment Lab",
    description:
      "A gamified evaluation flow with meaningful feedback states, progress cues, and LMS-ready delivery.",
    image: "/images/project-3.jpg",
    tags: ["Assessment", "Gamification", "SCORM"],
    slug: "interactive-assessment-lab",
    category: "Testing and Certification",
    year: "2026",
    outcome: "Cleaner score reporting and better engagement",
  },
  {
    id: "launch-platform",
    title: "Course Launch Platform",
    description:
      "A conversion-focused course launch experience pairing web delivery support with polished Storyline deployment.",
    image: "/images/project-4.jpg",
    tags: ["Launch Support", "Landing Page", "LMS"],
    slug: "course-launch-platform",
    category: "Technical Delivery",
    year: "2026",
    outcome: "Stronger launch readiness across devices",
  },
  {
    id: "sales-readiness",
    title: "Sales Readiness Simulator",
    description:
      "A role-play training module designed to sharpen product messaging through realistic customer conversations.",
    image: "/images/project-5.jpg",
    tags: ["Simulation", "Sales Enablement", "Coaching"],
    slug: "sales-readiness-simulator",
    category: "Enablement",
    year: "2026",
    outcome: "More confident practice before live calls",
  },
  {
    id: "accessibility-refresh",
    title: "Accessibility Refresh Program",
    description:
      "A rebuild of legacy modules with cleaner navigation, improved readability, and stronger accessibility support.",
    image: "/images/project-6.jpg",
    tags: ["Accessibility", "WCAG", "Remediation"],
    slug: "accessibility-refresh-program",
    category: "Inclusive Design",
    year: "2026",
    outcome: "Better usability for a wider learner audience",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
