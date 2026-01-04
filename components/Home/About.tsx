"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

// The "Agency" Pillars - No tech stack here, just business value.
const philosophies = [
  {
    id: "01",
    title: "Strategic Foundation",
    description:
      "We don't start with pixels; we start with problems. Our discovery phase digs deep into your market position, user needs, and business goals to ensure we build the right thing, not just the pretty thing.",
    tags: ["Market Research", "Brand Positioning", "User Persona"],
  },
  {
    id: "02",
    title: "World-Class Design",
    description:
      "Aesthetics build trust. We craft distinct visual identities and intuitive interfaces that separate market leaders from followers. Every interaction is designed to delight and convert.",
    tags: ["UI/UX System", "Motion Design", "Art Direction"],
  },
  {
    id: "03",
    title: "Scalable Engineering",
    description:
      "Performance is a feature. We build robust, headless architectures capable of handling millions of users. Secure, fast, and built for the future of the web.",
    tags: ["Headless CMS", "Global CDNs", "API Architecture"],
  },
  {
    id: "04",
    title: "Growth & Analytics",
    description:
      "Launch is just day one. We integrate deep analytics loops and SEO strategies to ensure your digital product grows with your business.",
    tags: ["Technical SEO", "Conversion Optimization", "Data Pipelines"],
  },
];

export default function AboutAgencyManifesto() {
  // Track which item is open (default to the first one)
  const [openItem, setOpenItem] = useState<string | null>("01");

  return (
    <section
      className="relative bg-white py-24 px-4 md:px-12 lg:px-24"
      id="about"
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* --- LEFT COLUMN: The Manifesto (Sticky) --- */}
        <div className="w-full lg:w-1/2">
          <div className="sticky top-32">
            <span className="block mb-6 text-sm font-bold tracking-widest text-zinc-400 uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
              We bridge the gap between <br />
              <span className="text-zinc-400">vision</span> and{" "}
              <span className="text-zinc-400">reality.</span>
            </h2>

            <p className="text-xl text-zinc-600 leading-relaxed max-w-md mb-10">
              Articulate Agency is a global collective of designers, engineers,
              and strategists. We exist to help ambitious brands navigate the
              digital noise and build products that matter.
            </p>

            <Button
              size="lg"
              className="rounded-full px-8 bg-zinc-900 text-white hover:bg-zinc-800"
            >
              Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: The Interactive Philosophy (Accordion) --- */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {philosophies.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setOpenItem(isOpen ? null : item.id)}
                className="group border-t border-zinc-200 py-10 cursor-pointer transition-colors hover:border-zinc-400"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-mono transition-colors ${
                        isOpen ? "text-zinc-900 font-bold" : "text-zinc-400"
                      }`}
                    >
                      /{item.id}
                    </span>
                    <h3
                      className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
                        isOpen
                          ? "text-zinc-900"
                          : "text-zinc-400 group-hover:text-zinc-600"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {/* Icon Toggle */}
                  <div className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    {isOpen ? <Minus /> : <Plus />}
                  </div>
                </div>

                {/* Body Reveal (Framer Motion) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-0 md:pl-12">
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Tags / Keywords */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          {/* Bottom Border for the last item */}
          <div className="border-t border-zinc-200" />
        </div>
      </div>
    </section>
  );
}
