"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export default function HeroAgency() {
  const container = useRef(null);
  const bgRef = useRef(null);
  // Refs for the text elements we want to animate
  const titleWords = useRef<(HTMLSpanElement | null)[]>([]);
  const subtext = useRef(null);
  const buttons = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0. Initial states to avoid flashing
      gsap.set(titleWords.current, { y: 100, opacity: 0 });
      gsap.set(subtext.current, { y: 30, opacity: 0 });
      gsap.set(buttons.current, { y: 20, opacity: 0 });

      // 1. Slow Background Movement
      gsap.to(bgRef.current, {
        rotate: 360,
        duration: 120,
        repeat: -1,
        ease: "linear",
      });

      // 2. Staggered Word Reveal (The main event)
      tl.to(
        titleWords.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1, // Delay between each word appearing
        },
        0.5 // Start delay
      );

      // 3. Subtext & Buttons Fade In
      tl.to(
        [subtext.current, buttons.current],
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8" // Overlap with the end of title animation
      );
    },
    { scope: container }
  );

  // Helper to collect refs
  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !titleWords.current.includes(el)) {
      titleWords.current.push(el);
    }
  };

  return (
    <section
      ref={container}
      className="relative flex min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden bg-[#FDFDFD] px-4"
    >
      {/* --- BACKGROUND GRADIENT MESH --- */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          // This creates a giant, subtle gradient blob that slowly spins
          className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] bg-[radial-gradient(circle_farthest-corner_at_50%_50%,rgba(230,230,250,0.4)_0%,rgba(253,253,253,1)_60%)] blur-3xl will-change-transform"
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="z-10 flex max-w-[90rem] flex-col items-center text-center">
        {/* GIANT HEADLINE
          We wrap words in spans so GSAP can target them individually.
          The text needs to be absolutely massive for the agency feel.
        */}
        <h1 className="flex flex-wrap justify-center gap-x-[1vw] gap-y-2 font-bold leading-[0.85] tracking-tighter text-zinc-900 text-[13vw] md:text-[9vw] lg:text-[8rem] mb-8">
          {/* Line 1 */}
          <div className="flex gap-x-[1vw] overflow-hidden">
            <span ref={addToRefs} className="inline-block">
              Defining
            </span>
            <span ref={addToRefs} className="inline-block">
              the
            </span>
          </div>
          {/* Line 2 */}
          <div className="flex gap-x-[1vw] overflow-hidden">
            <span ref={addToRefs} className="inline-block">
              future
            </span>
            <span ref={addToRefs} className="inline-block text-zinc-400">
              of
            </span>
          </div>
          {/* Line 3 */}
          <div className="flex gap-x-[1vw] overflow-hidden">
            {/* Using a different color for emphasis */}
            <span ref={addToRefs} className="inline-block text-blue-600">
              digital
            </span>
            <span ref={addToRefs} className="inline-block">
              interaction.
            </span>
          </div>
        </h1>

        {/* SUBTEXT (Agency "We" language) */}
        <p
          ref={subtext}
          className="max-w-2xl text-lg text-zinc-500 md:text-2xl font-light leading-relaxed mb-12"
        >
          We are a global product studio partnering with ambitious brands to
          build immersive, high-performance digital experiences that convert.
        </p>

        {/* BUTTONS */}
        <div ref={buttons} className="flex flex-wrap items-center gap-6">
          <Button
            size="lg"
            className="h-14 rounded-full bg-zinc-900 px-10 text-lg hover:bg-zinc-800 transition-transform hover:scale-105"
          >
            Partner with Us
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="h-14 rounded-full px-8 text-lg text-zinc-600 hover:text-zinc-900 group"
          >
            Explore our Work
            <ArrowDownRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
