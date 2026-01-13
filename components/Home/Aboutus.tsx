"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function AboutManifesto() {
  return (
    <section className="bg-zinc-950 py-32 px-4 md:px-12 lg:px-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-6 block">
            About Articulate Agency
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-12">
            We are the{" "}
            <span className="italic font-serif font-light text-zinc-400">
              intersection
            </span>{" "}
            of <br />
            complex code & <br />
            elegant design.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-lg text-zinc-400 leading-relaxed">
              A small, focused eLearning studio. We strip away the agency bloat
              and focus on what matters:
              <span className="text-white">
                {" "}
                expert Storyline development
              </span>{" "}
              paired with <span className="text-white">high-end design</span>.
            </p>

            <div className="flex justify-start md:justify-end">
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-zinc-700 text-black hover:bg-zinc-800 hover:text-white text-lg group"
              >
                View Our Projects
                <ArrowDownRight className="ml-2 group-hover:-rotate-45 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
