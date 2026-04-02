import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyMotion from "@/components/CaseStudy/CaseStudyMotion";
import CaseStudySection from "@/components/CaseStudy/CaseSection";
import CaseStudyReveal from "@/components/CaseStudy/CaseStudyReveal";
import Gallery from "@/components/CaseStudy/Gallery";
import Stats from "@/components/CaseStudy/Stats";
import Timeline from "@/components/CaseStudy/Timeline";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/lib/data";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Articulate Agency",
    };
  }

  return {
    title: `${project.title} | Articulate Agency Case Study`,
    description: project.caseStudy.heroSummary,
  };
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((entry) => entry.slug !== project.slug)
    .slice(0, 3);
  const hasStorylineEmbed = project.slug === "scenario-based-compliance-sprint";
  const storylinePath = "/Welcome%20to%20Clientilo%20(1)/story.html";

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pb-24 pt-24 text-white md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_24%),linear-gradient(180deg,_rgba(24,24,27,0.15),_rgba(9,9,11,0))]" />

      <CaseStudyMotion>
        <section className="relative px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <CaseStudyReveal>
              <div className="text-center">
                <div className="flex justify-center">
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    <Link href="/work">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Selected Work
                    </Link>
                  </Button>
                </div>

                <p className="mt-10 text-sm text-zinc-400">
                  {project.caseStudy.heroLabel}
                </p>
                <h1 className="mx-auto mt-3 max-w-sm text-3xl font-medium tracking-tight text-white md:max-w-2xl md:text-6xl">
                  {project.title}
                </h1>
                <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-zinc-500 md:text-sm">
                  {project.caseStudy.heroSummary}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-300 md:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left md:grid-cols-3">
                  <div className="rounded-md border border-white/8 bg-white/3 px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                      Client
                    </p>
                    <p className="mt-2 text-sm text-zinc-100 md:text-base">
                      {project.caseStudy.client}
                    </p>
                  </div>
                  <div className="rounded-md border border-white/8 bg-white/3 px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                      Engagement
                    </p>
                    <p className="mt-2 text-sm text-zinc-100 md:text-base">
                      {project.caseStudy.engagement}
                    </p>
                  </div>
                  <div className="rounded-md border border-white/8 bg-white/3 px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-zinc-100 md:text-base">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="mx-auto mt-6 flex max-w-sm flex-col items-center gap-3 md:max-w-none md:flex-row md:justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-10 rounded-full bg-white px-5 text-black hover:bg-zinc-200"
                  >
                    <Link href="/#services">
                      Start Your Project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-10 rounded-full border-white/15 bg-white/5 px-5 text-white hover:bg-white/10"
                  >
                    <Link href="/about">Get in Touch</Link>
                  </Button>
                </div>

                <div className="mx-auto mt-8 max-w-md rounded-md border border-white/8 bg-zinc-900/40 px-4 py-4 text-left">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                    Services
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.caseStudy.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CaseStudyReveal>
          </div>
        </section>

        {hasStorylineEmbed ? (
          <CaseStudyReveal>
            <section className="px-4 pt-10 md:px-8">
              <div className="mx-auto max-w-3xl">
                <div className="overflow-hidden rounded-md border border-white/8 bg-zinc-900/60">
                  <div className="px-4 py-4 text-center">
                    <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
                      Scenario-Based Compliance Sprint
                    </p>
                  </div>
                  <div className="border-t border-white/8 bg-black p-3 md:p-4">
                    <iframe
                      src={storylinePath}
                      title={`${project.title} story embed`}
                      className="h-[220px] w-full rounded-sm border border-white/8 bg-zinc-900 md:h-[360px]"
                    />
                  </div>
                </div>
              </div>
            </section>
          </CaseStudyReveal>
        ) : null}

        <Timeline steps={project.caseStudy.journey} />

        {project.caseStudy.sections.map((section, index) => (
          <CaseStudySection
            key={`${section.eyebrow}-${section.title}`}
            section={section}
            index={index}
          />
        ))}

        <CaseStudyReveal>
          <section className="px-4 py-10 md:px-8 md:py-14">
            <div className="mx-auto max-w-3xl rounded-md border border-white/8 bg-zinc-900/50 p-6 text-center">
              <p className="text-xl font-medium leading-9 text-zinc-100 md:text-2xl">
                &ldquo;{project.caseStudy.quote.text}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.32em] text-zinc-500">
                {project.caseStudy.quote.attribution}
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                {project.caseStudy.quote.role}
              </p>
            </div>
          </section>
        </CaseStudyReveal>

        <CaseStudyReveal>
          <section className="px-4 py-10 md:px-8 md:py-14">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-sm text-zinc-400">Our Process</p>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {project.caseStudy.process.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center justify-between gap-4 border-b border-white/8 py-3"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                      0{index + 1}
                    </span>
                    <span className="text-right text-sm font-medium text-zinc-100 md:text-base">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </CaseStudyReveal>

        <Gallery items={project.caseStudy.gallery} />
        <Stats stats={project.caseStudy.stats} />

        <CaseStudyReveal>
          <section className="px-4 py-14 md:px-8 md:py-18">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm text-zinc-400">
                Ready to Transform Your Project?
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
                {project.caseStudy.ctaTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                {project.caseStudy.ctaDescription}
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-10 rounded-full bg-white px-5 text-black hover:bg-zinc-200"
                >
                  <Link href="/#services">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-10 rounded-full border-white/15 bg-white/5 px-5 text-white hover:bg-white/10"
                >
                  <Link href="/about">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </section>
        </CaseStudyReveal>

        <CaseStudyReveal>
          <section className="px-4 pt-4 md:px-8">
            <div className="mx-auto max-w-5xl border-t border-white/8 pt-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                    More Case Studies
                  </p>
                  <h2 className="mt-3 text-xl font-medium tracking-tight text-white md:text-2xl">
                    Keep exploring the portfolio.
                  </h2>
                </div>
                <p className="max-w-lg text-sm leading-7 text-zinc-500">
                  The shared project data now supports deeper stories across the
                  whole `/work` collection, so each case study can grow without
                  rebuilding the route structure.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/work/${relatedProject.slug}`}
                    className="rounded-md border border-white/8 bg-zinc-900/40 p-5 transition-colors duration-300 hover:bg-zinc-900"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                      {relatedProject.category}
                    </p>
                    <h3 className="mt-4 text-xl font-medium text-white">
                      {relatedProject.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {relatedProject.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300">
                      Open case study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </CaseStudyReveal>
      </CaseStudyMotion>
    </main>
  );
}
