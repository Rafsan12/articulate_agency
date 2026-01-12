/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants } from "framer-motion";
import {
  AlertOctagon,
  CheckCircle2,
  Lock,
  MousePointerClick,
  X,
} from "lucide-react";

// --- VISUAL COMPONENT: THE PROBLEM UI ---
const ProblemUI = () => {
  // Animation variants for the "shaking" next button
  const shakeVariant = {
    hover: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="relative h-full w-full bg-zinc-900/50 p-8 flex flex-col items-center justify-center border-b border-red-900/30">
      {/* Mock "Broken Slide" container */}
      <div className="w-full max-w-70 aspect-4/3 bg-zinc-800 rounded-lg border border-zinc-700 p-4 flex flex-col relative overflow-hidden opacity-50 grayscale">
        {/* Stuck Loading Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-700">
          <div className="w-[10%] h-full bg-red-900"></div>
        </div>

        {/* Skeleton "Boring Text" */}
        <div className="space-y-2 mt-4">
          <div className="h-3 w-3/4 bg-zinc-700 rounded"></div>
          <div className="h-2 w-full bg-zinc-700/50 rounded"></div>
          <div className="h-2 w-full bg-zinc-700/50 rounded"></div>
          <div className="h-2 w-2/3 bg-zinc-700/50 rounded"></div>
        </div>

        {/* The frustrating "Next" button */}
        <motion.div
          variants={shakeVariant}
          className="mt-auto self-end flex items-center gap-2 px-3 py-1.5 bg-zinc-700 rounded text-xs text-zinc-500 cursor-not-allowed"
        >
          <Lock size={12} /> Next Slide
        </motion.div>

        {/* Error Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60">
          <X className="text-red-800/50 h-16 w-16" />
        </div>
      </div>
      <p className="text-zinc-500 text-sm mt-4 font-mono">
        Err: Engagement Not Found
      </p>
    </div>
  );
};

// --- VISUAL COMPONENT: THE SOLUTION UI ---
const SolutionUI = () => {
  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Variants for the "Success Pop" animation
  const successVariants: Variants = {
    rest: { opacity: 0, scale: 0.8, y: 20 },
    hover: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  // Variants to hide the initial options when success appears
  const optionsVariants = {
    rest: { opacity: 1, y: 0 },
    hover: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="relative h-full w-full bg-blue-950/20 p-8 flex flex-col items-center justify-center border-b border-blue-500/30"
    >
      {/* Mock "Interactive Card" container */}
      <div className="w-full max-w-70 aspect-4/3 bg-linear-to-br from-blue-900/40 to-zinc-900 rounded-xl border border-blue-500/30 p-4 flex flex-col relative overflow-hidden shadow-lg shadow-blue-500/10">
        {/* Smooth Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-950">
          <motion.div
            variants={{ rest: { width: "30%" }, hover: { width: "100%" } }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-blue-500"
          />
        </div>

        {/* Initial State: The Choice */}
        <motion.div
          variants={optionsVariants}
          className="absolute inset-0 p-4 flex flex-col justify-center"
        >
          <h4 className="text-blue-100 font-semibold mb-4 text-sm">
            What do you do next?
          </h4>
          <div className="space-y-2">
            {/* Simulated Click Animation on this button */}
            <motion.div
              variants={{
                hover: {
                  scale: 0.98,
                  backgroundColor: "rgba(59, 130, 246, 0.3)",
                },
              }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 relative"
            >
              <MousePointerClick size={14} className="text-blue-400" />
              Make the correct decision.
              {/* Simulated Cursor indicating click */}
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1, scale: [1, 0.8, 1] },
                }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="absolute -top-2 -left-2"
              >
                <MousePointerClick
                  className="text-white drop-shadow-lg"
                  size={20}
                />
              </motion.div>
            </motion.div>
            <div className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-xs text-zinc-500">
              Make the wrong decision.
            </div>
          </div>
        </motion.div>

        {/* Success State (Hidden initially) */}
        <motion.div
          variants={successVariants}
          className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900/80 backdrop-blur-sm z-10"
        >
          <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 mb-2">
            <CheckCircle2 className="text-white h-6 w-6" />
          </div>
          <p className="text-white font-bold">Great Choice!</p>
          <p className="text-blue-200 text-xs">Module Complete (+100xp)</p>
        </motion.div>
      </div>
      <p className="text-blue-400 text-sm mt-4 font-mono">
        <motion.span variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}>
          Interactive Scenario Loaded
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          className="absolute"
        >
          Result: Knowledge Retained
        </motion.span>
      </p>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function ProblemSolutionInteractive() {
  return (
    <section className="bg-zinc-950 py-24 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            The difference between <br />
            <span className="text-zinc-500">passive viewing</span> and{" "}
            <span className="text-blue-500">active learning</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- CARD 1: THE PROBLEM --- */}
          <motion.div
            initial="rest"
            whileHover="hover" // Triggers animations when whole card is hovered
            className="group relative h-125 w-full overflow-hidden rounded-3xl border border-red-900/30 bg-zinc-900/20"
          >
            {/* The Abstract UI Visualization */}
            <div className="h-1/2">
              <ProblemUI />
            </div>

            {/* The Content */}
            <div className="h-1/2 p-8 md:p-12 flex flex-col justify-end relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 self-start bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-red-500 text-xs font-mono uppercase tracking-widest">
                <AlertOctagon size={14} /> Broken Experience
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                The Old Way
              </h3>
              <p className="text-zinc-400 mb-4">
                Slide-heavy courses lead to cognitive overload. Learners click
                "Next" just to get it over with.
              </p>
            </div>
          </motion.div>

          {/* --- CARD 2: THE SOLUTION --- */}
          <motion.div
            initial="rest"
            whileHover="hover" // Triggers animations when whole card is hovered
            className="group relative h-125 w-full overflow-hidden rounded-3xl border border-blue-500/30 bg-blue-900/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]"
          >
            {/* The Abstract UI Visualization */}
            <div className="h-1/2 relative z-10">
              <SolutionUI />
            </div>

            {/* The Overlay Gradient for pop */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-950/50 to-transparent pointer-events-none" />

            {/* The Content */}
            <div className="h-1/2 p-8 md:p-12 flex flex-col justify-end relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 self-start bg-blue-500/20 border border-blue-500/50 px-3 py-1 rounded-full text-blue-400 text-xs font-mono uppercase tracking-widest shadow-lg shadow-blue-500/20">
                <CheckCircle2 size={14} /> Articulate Storyline
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                The Interactive Way
              </h3>
              <p className="text-blue-100 mb-4 font-medium">
                We build scenario-based learning where choices matter, driving
                real engagement and retention.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
