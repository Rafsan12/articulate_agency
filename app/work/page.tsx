import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 pb-24 pt-32 text-white md:px-12 lg:px-24">
      <section className="relative overflow-hidden rounded-[2rem] bg-linear-to-b from-zinc-900 via-zinc-950 to-zinc-950 px-6 py-12 md:px-10 md:py-16">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-blue-500/8 to-transparent" />
        <div className="absolute -right-20 top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Selected Work"
              title="Projects designed to earn the click."
              description="A curated look at the kinds of interactive learning experiences we build, from branching compliance modules to polished launch-ready training systems."
            />

            <div className="flex flex-col gap-4 md:max-w-sm">
              <p className="text-sm leading-6 text-zinc-500">
                Each card is a doorway into a case-study flow. This page stays
                visual, fast, and easy to scan.
              </p>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-6 text-black hover:bg-zinc-200"
              >
                <Link href="/#services">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl bg-black/20 p-5 text-sm text-zinc-400 md:grid-cols-3">
            <div>
              <p className="font-mono uppercase tracking-[0.25em] text-zinc-500">
                Focus
              </p>
              <p className="mt-2 text-zinc-200">
                Premium, minimal portfolio presentation
              </p>
            </div>
            <div>
              <p className="font-mono uppercase tracking-[0.25em] text-zinc-500">
                Motion
              </p>
              <p className="mt-2 text-zinc-200">
                GSAP-driven reveal and hover behavior
              </p>
            </div>
            <div>
              <p className="font-mono uppercase tracking-[0.25em] text-zinc-500">
                Routing
              </p>
              <p className="mt-2 text-zinc-200">
                Cards link into ready-to-expand case study pages
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
              Portfolio Grid
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
              Explore the work.
            </h2>
          </div>
          <p className="hidden max-w-md text-right text-sm leading-6 text-zinc-500 md:block">
            Click any project to open its case study placeholder route and grow
            this portfolio over time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-zinc-900 bg-zinc-900/40 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-400">
              Next Layer
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
              Case studies can deepen from here without rebuilding the
              portfolio.
            </h2>
            <p className="mt-4 text-zinc-400">
              The listing page and dynamic route now share one data source, so
              adding richer storytelling later stays straightforward.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-blue-500 px-6 text-white hover:bg-blue-400"
          >
            <Link href={`/work/${projects[0].slug}`}>
              Open a Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
