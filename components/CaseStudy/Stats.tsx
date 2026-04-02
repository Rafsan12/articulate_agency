import CaseStudyReveal from "@/components/CaseStudy/CaseStudyReveal";
import type { CaseStudyStat } from "@/lib/data";

type StatsProps = {
  stats: CaseStudyStat[];
};

export default function Stats({ stats }: StatsProps) {
  return (
    <CaseStudyReveal>
      <section className="px-4 py-12 text-center md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-zinc-400">Results & Impact</p>

          <div className="mt-6 grid gap-4 border-y border-white/8 py-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/8 px-4 text-center first:border-l-0"
              >
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {stat.value}
                </p>
                <h3 className="mt-2 text-xs uppercase tracking-[0.28em] text-zinc-400">
                  {stat.label}
                </h3>
                <p className="mt-3 text-xs leading-5 text-zinc-500 md:text-sm">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyReveal>
  );
}
