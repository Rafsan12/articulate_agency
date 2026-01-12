"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Package,
  ShieldCheck,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "Scenario-based Compliance",
    category: "Risk & Safety",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgGradient: "from-emerald-500/10 to-transparent",
    description:
      "Decision-tree simulations where employees face real-world ethical dilemmas.",
  },
  {
    title: "Corporate Onboarding",
    category: "HR & Culture",
    icon: Users,
    color: "text-blue-400",
    bgGradient: "from-blue-500/10 to-transparent",
    description:
      "Day One experiences that welcome new hires and explain company culture.",
  },
  {
    title: "Interactive Assessments",
    category: "Testing & Certification",
    icon: CheckCircle2,
    color: "text-amber-400",
    bgGradient: "from-amber-500/10 to-transparent",
    description:
      "Gamified quizzes with instant feedback loops and score tracking.",
  },
  {
    title: "LMS-ready SCORM",
    category: "Technical Delivery",
    icon: Package,
    color: "text-purple-400",
    bgGradient: "from-purple-500/10 to-transparent",
    description:
      "Fully tested .zip packages guaranteed to track completion on your LMS.",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-zinc-950 py-24 px-4 md:px-12 lg:px-24 border-t border-zinc-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Real Projects. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                Real Results.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We don't just build slides; we build experiences. Here is a
              snapshot of the types of training we deliver.
            </p>
          </div>

          <Button
            size="lg"
            className="hidden md:flex rounded-full bg-white text-black hover:bg-zinc-200 px-8 h-14 text-base font-medium"
          >
            👉 View Case Studies
          </Button>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-700 transition-colors"
            >
              {/* Background Gradient (Reveals on Hover) */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content Container */}
              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                {/* Top: Icon & Arrow */}
                <div className="flex justify-between items-start">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center ${project.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon size={28} />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Bottom: Text */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA (only visible on small screens) */}
        <div className="mt-12 md:hidden">
          <Button
            size="lg"
            className="w-full rounded-full bg-white text-black hover:bg-zinc-200 h-14 text-base font-medium"
          >
            👉 View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
