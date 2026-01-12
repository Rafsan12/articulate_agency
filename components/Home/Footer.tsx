"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";

export default function FooterCTA() {
  return (
    <>
      {/* =========================================
          SECTION 1: THE ABOUT TEASER (Boutique Studio Vibe)
          ========================================= */}
      <section className="bg-zinc-900 py-24 px-4 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* The Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Who We Are
            </div>

            {/* The Statement */}
            <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
              We’re a small, focused eLearning studio led by an experienced{" "}
              <span className="text-blue-400">
                Articulate Storyline developer
              </span>
              , working with a dedicated design partner to deliver consistent,
              high-quality learning experiences.
            </h3>

            {/* The Button */}
            <Button
              variant="link"
              className="text-white text-lg hover:text-blue-400 p-0 underline-offset-8 decoration-zinc-600 hover:decoration-blue-400 transition-all"
            >
              👉 Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE FINAL CTA (Magnetic Footer)
          ========================================= */}
      <section className="relative w-full overflow-hidden bg-black py-32 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        {/* Background Gradient Mesh (The "Magnetic" Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-white mb-12 leading-[0.9]"
          >
            Ready to build an <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
              engaging course?
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary Action */}
            <Button
              size="lg"
              className="h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-10 text-xl font-bold shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.7)] transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Book a Free Strategy Call
            </Button>

            {/* Secondary Action */}
            <Button
              variant="outline"
              size="lg"
              className="h-16 rounded-full border-zinc-800 bg-black/50 text-white hover:bg-zinc-900 hover:border-zinc-700 hover:text-white px-10 text-xl backdrop-blur-md"
            >
              <Mail className="mr-3 h-5 w-5" />
              Contact Us
            </Button>
          </motion.div>

          <p className="mt-12 text-zinc-500 text-sm">
            No sales pressure. Just a chat about your training goals.
          </p>
        </div>
      </section>
    </>
  );
}
