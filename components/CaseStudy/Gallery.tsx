import Image from "next/image";
import CaseStudyReveal from "@/components/CaseStudy/CaseStudyReveal";
import type { CaseStudyGalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  amber: "from-amber-400/25 via-orange-400/10 to-transparent",
  blue: "from-blue-500/25 via-cyan-400/10 to-transparent",
  cyan: "from-cyan-400/25 via-sky-400/10 to-transparent",
  emerald: "from-emerald-400/25 via-teal-400/10 to-transparent",
  rose: "from-rose-400/25 via-pink-400/10 to-transparent",
  violet: "from-violet-400/25 via-fuchsia-400/10 to-transparent",
};

type GalleryProps = {
  items: CaseStudyGalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  return (
    <CaseStudyReveal>
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-zinc-400">Gallery</p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {items.map((item, index) => {
              const accent = accentClasses[item.accent] ?? accentClasses.blue;

              return (
                <article
                  key={`${item.title}-${index}`}
                  className="group relative overflow-hidden rounded-sm border border-white/8 bg-zinc-900/80"
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-br opacity-70 transition-opacity duration-300 group-hover:opacity-100",
                      accent,
                    )}
                  />
                  <div className="relative z-10 aspect-square bg-zinc-800/70">
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/8 bg-black/30 px-3 py-2">
                    <p className="truncate text-[10px] uppercase tracking-[0.28em] text-zinc-300">
                      {item.title}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </CaseStudyReveal>
  );
}
