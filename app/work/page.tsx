import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-5 text-white md:px-8 md:pt-6">
      <div className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-3">
          <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-linear-to-br from-zinc-200 to-zinc-500" />
            <span>Portfolio</span>
          </div>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-6xl pt-16 md:pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Selected Work
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 md:text-[15px]">
            A curated collection of recent projects showcasing design
            excellence and technical craftsmanship. Each piece represents our
            commitment to creating meaningful digital experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl pt-14 md:pt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
