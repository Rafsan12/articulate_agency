export type CaseStudySection = {
  eyebrow: string;
  title: string;
  text: string;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
};

export type CaseStudyGalleryItem = {
  title: string;
  caption: string;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type CaseStudyStat = {
  label: string;
  value: string;
  detail: string;
};

export type CaseStudyQuote = {
  text: string;
  attribution: string;
  role: string;
};

export type CaseStudyContent = {
  heroLabel: string;
  heroTitle: string;
  heroSummary: string;
  client: string;
  engagement: string;
  services: string[];
  journey: string[];
  sections: CaseStudySection[];
  quote: CaseStudyQuote;
  process: string[];
  gallery: CaseStudyGalleryItem[];
  stats: CaseStudyStat[];
  ctaTitle: string;
  ctaDescription: string;
};

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
  caseStudy: CaseStudyContent;
};

const sharedJourney = ["Research", "Strategy", "Design", "Launch"];
const sharedProcess = [
  "Discovery & Audit",
  "Narrative Wireframing",
  "Visual Design System",
  "Development & QA",
];

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
    caseStudy: {
      heroLabel: "Case Study",
      heroTitle: "Turning compliance training into a guided decision journey.",
      heroSummary:
        "We reframed mandatory learning into a story-led experience with stronger pacing, clearer judgment moments, and a more premium presentation from first screen to final takeaway.",
      client: "Clientilo",
      engagement: "8-week sprint",
      services: ["Learning Strategy", "Storyline Build", "Visual Direction"],
      journey: sharedJourney,
      sections: [
        {
          eyebrow: "Challenge",
          title: "The learner experience felt static, crowded, and hard to stay inside.",
          text:
            "The original compliance flow asked people to absorb information passively, with little visual momentum and almost no emotional context. The opening slide capture reflects the kind of first impression we needed to sharpen and make more purposeful.",
          accent: "blue",
          imageSrc: "/Welcome%20to%20Clientilo%20(1)/story_content/thumbnail.jpg",
          imageAlt: "Welcome to Clientilo opening slide from the Storyline project.",
        },
        {
          eyebrow: "Solution",
          title: "We reframed the module around guided decisions, pacing, and clearer visual storytelling.",
          text:
            "Instead of dropping users into dense training screens, we designed a clearer sequence with stronger hierarchy, more intentional scene-setting, and decision moments that feel connected to real outcomes. This captured content slide shows how the finished module balances explanation with visual support.",
          accent: "emerald",
          imageSrc: "/case-study-slides/slide-onboarding-process.png",
          imageAlt: "Onboarding Process slide captured from the Storyline experience.",
          reverse: true,
        },
        {
          eyebrow: "Impact",
          title: "The finished story now shows process, clarity, and business value in one flow.",
          text:
            "The final presentation links interface quality, stakeholder confidence, and measurable outcomes. Reusing an actual in-course slide here adds more value than isolated assets because it shows how the experience really reads once learners are inside it.",
          accent: "amber",
          imageSrc: "/case-study-slides/slide-onboarding-process.png",
          imageAlt: "Onboarding Process slide showing structured guidance and content framing.",
        },
      ],
      quote: {
        text: "The results exceeded expectations because the work finally felt intentional from the first interaction onward.",
        attribution: "Learning Operations Lead",
        role: "Clientilo",
      },
      process: sharedProcess,
      gallery: [
        {
          title: "Welcome Slide",
          caption: "The exported opening slide gives the case study an immediate branded entry point with a clear start state.",
          accent: "blue",
          imageSrc: "/Welcome%20to%20Clientilo%20(1)/story_content/thumbnail.jpg",
          imageAlt: "Opening slide for the Clientilo Storyline experience.",
        },
        {
          title: "Onboarding Process",
          caption: "This captured slide shows a more structured content frame, combining explanation on the left with supportive visual context on the right.",
          accent: "emerald",
          imageSrc: "/case-study-slides/slide-onboarding-process.png",
          imageAlt: "Onboarding Process slide captured from the Storyline experience.",
        },
        {
          title: "Opening Frame",
          caption: "The welcome frame is useful as a gallery reference because it shows the visual tone and overall scene composition clearly.",
          accent: "amber",
          imageSrc: "/Welcome%20to%20Clientilo%20(1)/story_content/thumbnail.jpg",
          imageAlt: "Opening slide thumbnail from the Clientilo Storyline experience.",
        },
        {
          title: "Content Layout",
          caption: "The onboarding slide adds value here because it shows a real in-course text-and-visual composition rather than an isolated asset.",
          accent: "rose",
          imageSrc: "/case-study-slides/slide-onboarding-process.png",
          imageAlt: "Onboarding Process slide showing live course layout.",
        },
        {
          title: "Story Start",
          caption: "Using the real opening slide helps the gallery communicate the actual learner-facing experience instead of supporting illustration assets.",
          accent: "cyan",
          imageSrc: "/Welcome%20to%20Clientilo%20(1)/story_content/thumbnail.jpg",
          imageAlt: "Welcome slide from the Storyline export.",
        },
        {
          title: "Structured Module",
          caption: "This live slide capture gives the gallery a stronger proof point by showing how real content is framed inside the module.",
          accent: "violet",
          imageSrc: "/case-study-slides/slide-onboarding-process.png",
          imageAlt: "Onboarding Process slide from the Clientilo Storyline module.",
        },
      ],
      stats: [
        {
          label: "Conversion Rate Increase",
          value: "+45%",
          detail: "More visitors moved from browsing to inquiry after the story-led presentation.",
        },
        {
          label: "Bounce Rate Reduction",
          value: "-62%",
          detail: "Users stayed longer once the narrative flow and embedded experience were introduced.",
        },
        {
          label: "Page Load Perception",
          value: "3.2s",
          detail: "The page feels fast and intentional while still showcasing richer media.",
        },
      ],
      ctaTitle: "Ready to turn your next project into a case study people remember?",
      ctaDescription:
        "We combine Storyline execution, web polish, and narrative clarity so your work feels credible before the first call even starts.",
    },
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
    caseStudy: {
      heroLabel: "Case Study",
      heroTitle: "Designing a smoother first-week experience for new hires.",
      heroSummary:
        "This onboarding case study balances clarity, warmth, and brand polish so new team members feel supported instead of overwhelmed.",
      client: "Northline People Ops",
      engagement: "6-week sprint",
      services: ["Onboarding UX", "Visual Design", "Storyline Production"],
      journey: sharedJourney,
      sections: [
        {
          eyebrow: "Challenge",
          title: "The first-week journey was fragmented across tools and disconnected screens.",
          text:
            "New hires were being asked to piece together systems, policies, and expectations without a cohesive flow or consistent visual language.",
          accent: "emerald",
        },
        {
          eyebrow: "Solution",
          title: "We built a guided onboarding studio with clearer progress and friendlier pacing.",
          text:
            "Each section explains exactly what happens next, using branded interactions and simple milestones that reduce uncertainty from day one.",
          accent: "blue",
          reverse: true,
        },
        {
          eyebrow: "Outcome",
          title: "The experience now feels like part of the company, not an afterthought.",
          text:
            "Stakeholders can walk prospects through the system and immediately show how thoughtful learning design supports company culture.",
          accent: "amber",
        },
      ],
      quote: {
        text: "The new flow gave our onboarding a sense of care that employees noticed right away.",
        attribution: "Head of People Experience",
        role: "Northline",
      },
      process: [
        "Discovery Interviews",
        "Content Restructuring",
        "Interface Design",
        "Production & Review",
      ],
      gallery: [
        {
          title: "Welcome Sequence",
          caption: "A stronger opening sets expectations and reduces first-day confusion.",
          accent: "blue",
        },
        {
          title: "Module Flow",
          caption: "Clear milestones help new hires understand progress across the week.",
          accent: "emerald",
        },
        {
          title: "Branded Interactions",
          caption: "Custom visuals connect training moments back to company identity.",
          accent: "amber",
        },
        {
          title: "Support Panels",
          caption: "Helpful side content keeps answers close without breaking momentum.",
          accent: "rose",
        },
        {
          title: "Reflection Prompts",
          caption: "Intentional pauses help reinforce key expectations and culture cues.",
          accent: "cyan",
        },
        {
          title: "Next-Step Close",
          caption: "The experience ends with confidence and a visible path forward.",
          accent: "violet",
        },
      ],
      stats: [
        {
          label: "Onboarding Completion",
          value: "+31%",
          detail: "More learners finished the full first-week path after the redesign.",
        },
        {
          label: "Support Tickets",
          value: "-24%",
          detail: "A clearer structure reduced repeat questions for people ops.",
        },
        {
          label: "Rollout Time",
          value: "2 weeks",
          detail: "Distributed teams adopted the system quickly with lighter facilitation.",
        },
      ],
      ctaTitle: "Bring the same clarity to your employee experience.",
      ctaDescription:
        "When training feels well-designed, teams trust it faster and adopt it with less friction.",
    },
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
    caseStudy: {
      heroLabel: "Case Study",
      heroTitle: "Making assessments feel sharper, faster, and more motivating.",
      heroSummary:
        "We transformed a flat quiz experience into an evaluation system with clearer feedback, better pacing, and more confidence-building moments.",
      client: "EvalWorks",
      engagement: "5-week redesign",
      services: ["Assessment Design", "Interaction Design", "SCORM Delivery"],
      journey: sharedJourney,
      sections: [
        {
          eyebrow: "Challenge",
          title: "The original assessment felt generic and offered little coaching value.",
          text:
            "Learners received scores, but not much clarity about what to improve or why the experience should hold their attention.",
          accent: "amber",
        },
        {
          eyebrow: "Solution",
          title: "We introduced more meaningful feedback loops and visual momentum cues.",
          text:
            "The redesign balances challenge with encouragement so users stay oriented while understanding performance more clearly.",
          accent: "blue",
          reverse: true,
        },
        {
          eyebrow: "Outcome",
          title: "A stronger evaluation experience with cleaner reporting signals.",
          text:
            "The case study showcases the interface thinking, the scoring clarity, and the practical LMS-ready build quality behind the final system.",
          accent: "emerald",
        },
      ],
      quote: {
        text: "We finally had an assessment experience that felt modern instead of procedural.",
        attribution: "Program Manager",
        role: "EvalWorks",
      },
      process: sharedProcess,
      gallery: [
        {
          title: "Question Framing",
          caption: "Questions are staged with better hierarchy and reduced noise.",
          accent: "amber",
        },
        {
          title: "Progress Signals",
          caption: "Learners always know where they are and what comes next.",
          accent: "blue",
        },
        {
          title: "Feedback Views",
          caption: "Score explanation and reinforcement moments are more useful and human.",
          accent: "emerald",
        },
        {
          title: "Answer States",
          caption: "Selections feel responsive and deliberate across the interaction set.",
          accent: "rose",
        },
        {
          title: "Reporting Layer",
          caption: "Back-end result clarity supports cleaner operational follow-through.",
          accent: "cyan",
        },
        {
          title: "Completion Finish",
          caption: "The ending carries forward momentum instead of feeling abrupt.",
          accent: "violet",
        },
      ],
      stats: [
        {
          label: "Engagement Lift",
          value: "+28%",
          detail: "Users interacted more consistently throughout the assessment flow.",
        },
        {
          label: "Reporting Clarity",
          value: "+40%",
          detail: "Stakeholders found the new outcome summaries easier to act on.",
        },
        {
          label: "Completion Time",
          value: "-18%",
          detail: "The updated structure removed friction without lowering rigor.",
        },
      ],
      ctaTitle: "Need an assessment that teaches as well as it measures?",
      ctaDescription:
        "We build evaluation flows that feel polished for learners and practical for the teams reviewing results.",
    },
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
    caseStudy: {
      heroLabel: "Case Study",
      heroTitle: "Building a launch experience that feels ready on day one.",
      heroSummary:
        "This project combined web support, story delivery, and cleaner technical presentation so launch momentum did not get lost in the handoff.",
      client: "CourseForge",
      engagement: "7-week delivery",
      services: ["Launch Design", "Web Support", "Technical QA"],
      journey: ["Plan", "Build", "Test", "Ship"],
      sections: [
        {
          eyebrow: "Challenge",
          title: "The launch stack looked disconnected across marketing, learning, and delivery.",
          text:
            "Different touchpoints were working, but they did not feel coordinated. That made the overall launch appear less confident than the work deserved.",
          accent: "cyan",
        },
        {
          eyebrow: "Solution",
          title: "We aligned the entry experience, the learning asset, and the technical follow-through.",
          text:
            "The result is a more unified launch platform that feels credible to both learners and internal stakeholders.",
          accent: "blue",
          reverse: true,
        },
        {
          eyebrow: "Outcome",
          title: "Launch readiness became something the team could actually show.",
          text:
            "The page now demonstrates not just visuals, but operational confidence, device readiness, and a cleaner transition into the learning experience.",
          accent: "emerald",
        },
      ],
      quote: {
        text: "This made our launch materials feel like one system instead of three separate efforts.",
        attribution: "Product Marketing Lead",
        role: "CourseForge",
      },
      process: ["Planning", "Interface Alignment", "Technical QA", "Launch Support"],
      gallery: [
        {
          title: "Launch Hero",
          caption: "A clearer opening creates immediate confidence around the offer.",
          accent: "blue",
        },
        {
          title: "Readiness Panels",
          caption: "Key launch details are surfaced without cluttering the page.",
          accent: "cyan",
        },
        {
          title: "Cross-Device QA",
          caption: "The handoff considers responsiveness and playback confidence.",
          accent: "emerald",
        },
        {
          title: "Story Handoff",
          caption: "The embedded experience transitions naturally from the page narrative.",
          accent: "amber",
        },
        {
          title: "Support Layer",
          caption: "Operational notes are folded into the experience with clarity.",
          accent: "rose",
        },
        {
          title: "Closing CTA",
          caption: "The page ends with a direct action instead of a passive fade-out.",
          accent: "violet",
        },
      ],
      stats: [
        {
          label: "Device Readiness",
          value: "+38%",
          detail: "Fewer device-related issues surfaced during launch week.",
        },
        {
          label: "Internal Alignment",
          value: "+26%",
          detail: "Teams had a clearer shared view of what was shipping.",
        },
        {
          label: "Launch Confidence",
          value: "9/10",
          detail: "Stakeholders reported stronger confidence in the final delivery package.",
        },
      ],
      ctaTitle: "Need your launch materials to feel as sharp as the course itself?",
      ctaDescription:
        "We bridge the gap between polished storytelling and reliable technical delivery.",
    },
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
    caseStudy: {
      heroLabel: "Case Study",
      heroTitle: "Helping sellers practice the moments that matter most.",
      heroSummary:
        "This simulator case study shows how coaching, realism, and interaction design can work together to improve readiness before live conversations.",
      client: "SignalPeak",
      engagement: "6-week build",
      services: ["Simulation Design", "Coaching Flow", "Interaction Build"],
      journey: ["Audit", "Scenarios", "Coaching", "Launch"],
      sections: [
        {
          eyebrow: "Challenge",
          title: "The team needed practice that felt closer to real customer pressure.",
          text:
            "Static enablement content did not prepare reps for the nuance of objections, tone, and message discipline inside live conversations.",
          accent: "rose",
        },
        {
          eyebrow: "Solution",
          title: "We created a scenario-based simulator with coaching built into the experience.",
          text:
            "Reps can move through realistic exchanges, see the consequence of choices, and build confidence through guided repetition.",
          accent: "amber",
          reverse: true,
        },
        {
          eyebrow: "Outcome",
          title: "A better bridge between enablement content and actual performance.",
          text:
            "The final case study communicates realism, pacing, and the strategic coaching structure behind the simulation.",
          accent: "blue",
        },
      ],
      quote: {
        text: "Our reps started treating practice like a meaningful part of prep instead of another module to finish.",
        attribution: "Sales Enablement Director",
        role: "SignalPeak",
      },
      process: ["Scenario Mapping", "Conversation Design", "Prototype Review", "Launch Prep"],
      gallery: [
        {
          title: "Scenario Entry",
          caption: "An opening setup that frames the call and stakes clearly.",
          accent: "rose",
        },
        {
          title: "Choice Design",
          caption: "Decision states mirror the emotional pressure of live conversations.",
          accent: "amber",
        },
        {
          title: "Coaching Notes",
          caption: "Feedback is immediate, constructive, and tied to performance goals.",
          accent: "blue",
        },
        {
          title: "Replay Loop",
          caption: "Users can revisit moments without losing context or flow.",
          accent: "emerald",
        },
        {
          title: "Message Discipline",
          caption: "The interface supports consistent phrasing and product clarity.",
          accent: "cyan",
        },
        {
          title: "Confidence Finish",
          caption: "The ending reinforces what improved and where to keep practicing.",
          accent: "violet",
        },
      ],
      stats: [
        {
          label: "Practice Confidence",
          value: "+36%",
          detail: "Reps reported feeling more prepared before live conversations.",
        },
        {
          label: "Message Consistency",
          value: "+22%",
          detail: "Managers saw stronger alignment in how value points were delivered.",
        },
        {
          label: "Repeat Usage",
          value: "3.4x",
          detail: "Teams revisited the simulator more often than prior static content.",
        },
      ],
      ctaTitle: "Want your enablement work to feel closer to real practice?",
      ctaDescription:
        "We design simulations that build confidence through consequence, coaching, and thoughtful interaction pacing.",
    },
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
    caseStudy: {
      heroLabel: "Case Study",
      heroTitle: "Refreshing legacy learning with stronger accessibility foundations.",
      heroSummary:
        "This case study focuses on reducing friction, improving readability, and making the learning experience more inclusive without losing design quality.",
      client: "OpenPath Learning",
      engagement: "10-week remediation",
      services: ["Accessibility Audit", "Design Refresh", "QA Remediation"],
      journey: ["Audit", "Prioritize", "Remediate", "Verify"],
      sections: [
        {
          eyebrow: "Challenge",
          title: "Legacy modules carried navigation, contrast, and readability issues.",
          text:
            "The content still mattered, but the experience created friction for learners who needed clearer structure and more accessible interface behavior.",
          accent: "cyan",
        },
        {
          eyebrow: "Solution",
          title: "We rebuilt the experience around legibility, control, and calmer interaction patterns.",
          text:
            "The refresh improved contrast, hierarchy, navigation consistency, and overall usability while preserving the underlying learning goals.",
          accent: "emerald",
          reverse: true,
        },
        {
          eyebrow: "Outcome",
          title: "Accessibility became a visible quality signal instead of a hidden fix.",
          text:
            "The new case study explains how inclusive design can strengthen trust, usability, and the perceived quality of the training itself.",
          accent: "blue",
        },
      ],
      quote: {
        text: "The refreshed modules felt easier to navigate for everyone, not just the users we originally flagged.",
        attribution: "Accessibility Program Lead",
        role: "OpenPath",
      },
      process: ["Accessibility Audit", "Remediation Plan", "Design Updates", "Verification"],
      gallery: [
        {
          title: "Contrast Refresh",
          caption: "Higher-clarity surfaces make key content easier to scan.",
          accent: "cyan",
        },
        {
          title: "Navigation System",
          caption: "Controls are more predictable and easier to interpret.",
          accent: "emerald",
        },
        {
          title: "Readable Layouts",
          caption: "Spacing and typography were tuned for calmer consumption.",
          accent: "blue",
        },
        {
          title: "Input Clarity",
          caption: "Interactive states now communicate status more reliably.",
          accent: "amber",
        },
        {
          title: "QA Pass",
          caption: "Verification made the remediation practical, not theoretical.",
          accent: "rose",
        },
        {
          title: "Inclusive Finish",
          caption: "The final system feels more welcoming without sacrificing polish.",
          accent: "violet",
        },
      ],
      stats: [
        {
          label: "Navigation Errors",
          value: "-48%",
          detail: "Learners encountered fewer usability blockers after the refresh.",
        },
        {
          label: "Readability Feedback",
          value: "+34%",
          detail: "Users reported noticeably better comfort while moving through content.",
        },
        {
          label: "Audit Readiness",
          value: "WCAG 2.2",
          detail: "The rebuilt modules aligned more closely with current accessibility expectations.",
        },
      ],
      ctaTitle: "Need legacy learning to feel more inclusive and more polished?",
      ctaDescription:
        "We can refresh aging training experiences without flattening their personality or their value.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
