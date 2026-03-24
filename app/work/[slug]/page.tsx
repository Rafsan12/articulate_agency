import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

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

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 pb-24 pt-32 text-white md:px-12 lg:px-24">
      <section className="mx-auto max-w-5xl rounded-[2rem] border border-zinc-900 bg-linear-to-b from-zinc-900 to-zinc-950 p-8 md:p-12">
        <Button
          asChild
          variant="ghost"
          className="mb-8 h-auto rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-zinc-200 hover:bg-zinc-800 hover:text-white"
        >
          <Link href="/work">
            <ArrowLeft className="h-4 w-4" />
            Back to Selected Work
          </Link>
        </Button>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-blue-400">
              Case Study Route Ready
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-10 rounded-[1.75rem] border border-zinc-800 bg-black/20 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                Current Status
              </p>
              <p className="mt-4 text-xl font-semibold text-white">
                This route is live and ready for full case-study content.
              </p>
              <p className="mt-3 leading-7 text-zinc-400">
                The listing page can now link somewhere meaningful while the
                deeper narrative, media, process notes, and proof points are
                built later.
              </p>
            </div>
          </div>

          <aside className="space-y-5 rounded-[1.75rem] border border-zinc-800 bg-zinc-900/60 p-6">
            <div>
              <p className="text-sm text-zinc-500">Category</p>
              <p className="mt-2 text-lg font-medium text-zinc-100">
                {project.category}
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Outcome</p>
              <p className="mt-2 text-lg font-medium text-zinc-100">
                {project.outcome}
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Year</p>
              <p className="mt-2 text-lg font-medium text-zinc-100">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Tags</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700 bg-black/20 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-4 h-12 w-full rounded-full bg-white text-black hover:bg-zinc-200"
            >
              <Link href="/work">
                Browse More Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>
    </main>
  );
}
