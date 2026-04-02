import Image from "next/image";
import CaseStudyReveal from "@/components/CaseStudy/CaseStudyReveal";
import type { CaseStudySection as CaseStudySectionType } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  amber: "from-amber-400/20 via-orange-400/8 to-transparent",
  blue: "from-blue-500/20 via-cyan-400/8 to-transparent",
  cyan: "from-cyan-400/20 via-sky-400/8 to-transparent",
  emerald: "from-emerald-400/20 via-teal-400/8 to-transparent",
  rose: "from-rose-400/20 via-pink-400/8 to-transparent",
  violet: "from-violet-400/20 via-fuchsia-400/8 to-transparent",
};

type CaseStudySectionProps = {
  section: CaseStudySectionType;
  index: number;
};

export default function CaseStudySection({
  section,
  index,
}: CaseStudySectionProps) {
  const accent = accentClasses[section.accent] ?? accentClasses.blue;

  return (
    <CaseStudyReveal>
      <section className="px-4 py-10 md:px-8 md:py-14">
        <div
          className={cn(
            "mx-auto grid max-w-5xl items-center gap-6 md:gap-10 lg:grid-cols-2",
            section.reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              {section.text}
            </p>
            <div className="mt-5 inline-flex rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              0{index + 1} {section.eyebrow}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-md border border-white/8 bg-zinc-800/70">
            <div className={cn("absolute inset-0 bg-linear-to-br opacity-70", accent)} />
            <div className="relative z-10 aspect-[4/3] bg-zinc-800/70">
              {section.imageSrc ? (
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt ?? section.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : null}
            </div>
            <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-300">
              {section.imageSrc ? "Slide Visual" : "Visual Block"}
            </div>
          </div>
        </div>
      </section>
    </CaseStudyReveal>
  );
}
