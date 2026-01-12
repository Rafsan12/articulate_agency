"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Layers,
  MousePointerClick,
  PlayCircle,
} from "lucide-react";

export default function HeroDark() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 text-white flex items-center px-4 md:px-12 lg:px-24 py-24">
      {/* 1. Background Effects (Glows) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-200 h-200 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-150 h-150 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* --- LEFT COLUMN: The Pitch --- */}
        <div className="flex flex-col items-start">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-px w-8 bg-indigo-500"></div>
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
              eLearning Production Studio
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            We Design Engaging <br />
            Online Courses That <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient bg-300%">
              Actually Work.
            </span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10 border-l-2 border-zinc-800 pl-6"
          >
            We help companies, educators, and training teams turn ideas into
            interactive eLearning experiences using{" "}
            <span className="text-white font-semibold">
              Articulate Storyline
            </span>
            , modern design, and proven instructional methods.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="h-14 rounded-full bg-white text-black hover:bg-zinc-200 px-8 text-base font-bold"
            >
              👉 Book a Free Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-zinc-800 text-black hover:bg-zinc-900 hover:text-white px-8 text-base"
            >
              👉 View Our Work
            </Button>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: The Floating Layers (Abstract Representation) --- */}
        <div className="relative h-150 w-full hidden lg:block perspective-1000">
          {/* Card 1: The Design (Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10, rotateZ: -5 }}
            animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: -5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-[20%] left-[10%] w-80 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl z-10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-500">
                <Layers size={20} />
              </div>
              <span className="font-bold text-sm">Instructional Design</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-zinc-800 rounded-full"></div>
              <div className="h-2 w-2/3 bg-zinc-800 rounded-full"></div>
            </div>
          </motion.div>

          {/* Card 2: The Logic/Storyline (Middle) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10, rotateZ: 5 }}
            animate={{ opacity: 1, y: 0, rotateX: 10, rotateZ: 5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-[35%] right-[10%] w-80 p-6 rounded-2xl bg-zinc-800 border border-zinc-700 shadow-2xl z-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                <MousePointerClick size={20} />
              </div>
              <span className="font-bold text-sm">Storyline Interaction</span>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="px-2 py-1 rounded bg-black/30 text-xs font-mono text-zinc-400">
                Trigger
              </span>
              <span className="px-2 py-1 rounded bg-black/30 text-xs font-mono text-zinc-400">
                Variable
              </span>
              <span className="px-2 py-1 rounded bg-black/30 text-xs font-mono text-zinc-400">
                Layer
              </span>
            </div>
          </motion.div>

          {/* Card 3: The Result (Top) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0], // Floating animation
              scale: 1,
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.6 },
            }}
            className="absolute top-[10%] left-[30%] w-80 p-6 rounded-2xl bg-linear-to-br from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-600/20 z-30"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <PlayCircle size={20} />
                </div>
                <span className="font-bold text-sm">Course Experience</span>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">
                Live
              </span>
            </div>

            <div className="text-center py-4">
              <GraduationCap size={48} className="mx-auto mb-2 opacity-90" />
              <p className="font-bold text-xl">100% Completion</p>
              <p className="text-indigo-100 text-sm">High Engagement</p>
            </div>
          </motion.div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
            <path
              d="M200 250 Q 300 150 450 180"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <path
              d="M500 300 Q 400 400 300 500"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <defs>
              <linearGradient
                id="gradient-line"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
