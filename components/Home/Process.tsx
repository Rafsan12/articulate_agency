"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, PackageCheck, PenTool, Search } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover",
    icon: Search,
    description:
      "We dig deep before we design. We audit your existing materials and define clear learning objectives.",
    tags: ["Needs Analysis", "SME Interviews"],
  },
  {
    id: "02",
    title: "Design",
    icon: PenTool,
    description:
      "No surprises. We create detailed storyboards and visual style frames so you see the vision early.",
    tags: ["Storyboarding", "UI/UX Prototyping"],
  },
  {
    id: "03",
    title: "Develop",
    icon: Code2,
    description:
      "The magic happens here. We build interactive modules in Storyline with custom logic and graphics.",
    tags: ["Development", "Animation"],
  },
  {
    id: "04",
    title: "Deliver",
    icon: PackageCheck,
    description:
      "We test on your specific LMS, handle revisions, and ensure a smooth launch.",
    tags: ["LMS Testing", "Final Handover"],
  },
];

export default function ProcessDark() {
  return (
    // Changed bg to black to differentiate slightly from zinc-950, or keep it zinc-950
    <section className="bg-black py-24 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* --- LEFT COLUMN: Sticky Header --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-900/30">
                The Roadmap
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                How it <br /> Works.
              </h2>

              <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                A predictable, transparent workflow designed to eliminate scope
                creep.
              </p>

              <div className="hidden lg:flex items-center gap-4 text-sm font-bold text-zinc-600">
                <div className="h-12 w-12 rounded-full border border-zinc-800 flex items-center justify-center animate-bounce text-white">
                  <ArrowDown size={20} />
                </div>
                Scroll to explore
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Steps --- */}
          <div className="lg:w-2/3 relative">
            {/* The Connecting Line (Now Glowing) */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-zinc-800 hidden md:block">
              {/* This creates a subtle blue gradient running down the line */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-blue-500 to-transparent opacity-50" />
            </div>

            <div className="flex flex-col gap-12 md:gap-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-0 md:pl-24"
                >
                  {/* The Number Bubble */}
                  <div className="hidden md:flex absolute left-0 top-0 h-12 w-12 rounded-full bg-black border-2 border-blue-900/50 items-center justify-center z-10 font-bold text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {step.id}
                  </div>

                  {/* Card Content */}
                  <div className="group rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
                    <div className="mb-6 h-12 w-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20">
                      <step.icon size={24} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 border-t border-zinc-800 pt-6">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-950 px-3 py-1 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom "Trust" Statement */}
            <div className="mt-24 pl-0 md:pl-24">
              <div className="p-8 bg-zinc-900/80 border border-zinc-800 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-white text-xl font-bold">
                    Clear Process = Trust.
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    No hidden fees. No ghosting.
                  </p>
                </div>
                <div className="h-px w-24 bg-zinc-800 hidden md:block" />
                <div className="text-zinc-400 font-mono text-sm">
                  Ready to start?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
