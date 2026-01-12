"use client";

import { motion } from "framer-motion";

export default function TrustSignalsDark() {
  return (
    <section className="w-full bg-zinc-950 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
          >
            <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />

            <p className="text-sm font-medium uppercase tracking-widest text-indigo-400 mb-4">
              Expertise
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold text-white">5</span>
              <span className="text-3xl text-zinc-500 font-light">+ Years</span>
            </div>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Deep expertise in instructional design and Storyline development.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
          >
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />

            <p className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-4">
              Volume
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold text-white">100</span>
              <span className="text-3xl text-zinc-500 font-light">+</span>
            </div>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Successful training projects delivered on time and budget.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-24 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

            <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
              Trust
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold text-white">Global</span>
            </div>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Trusted by clients and agencies across 4 continents.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
