import CaseStudyReveal from "@/components/CaseStudy/CaseStudyReveal";

type TimelineProps = {
  steps: string[];
};

export default function Timeline({ steps }: TimelineProps) {
  return (
    <CaseStudyReveal>
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm text-zinc-400">The Journey</p>
          </div>

          <div className="mt-8 grid gap-3 border-y border-white/8 py-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="border-l border-white/8 pl-4 first:border-l-0 first:pl-0"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-sm font-medium text-white md:text-base">
                  {step}
                </h3>
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  A focused phase inside the project story.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyReveal>
  );
}
