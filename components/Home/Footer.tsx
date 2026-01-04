"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// Ensure plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const container = useRef(null);
  const footerText = useRef(null);

  useGSAP(
    () => {
      // Simple parallax reveal for the big text
      gsap.from(footerText.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Starts when top of footer hits 80% of viewport height
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <footer
      ref={container}
      className="relative bg-black text-white py-24 px-4 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* 1. Giant Call To Action */}
      <div className="border-b border-zinc-800 pb-24 mb-16">
        <h2
          ref={footerText}
          className="text-[12vw] font-bold leading-[0.8] tracking-tighter mb-10"
        >
          LET&apos;S TALK
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="text-zinc-400 text-xl max-w-md">
            Have an idea? We help visionary brands turn big ideas into digital
            reality.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-8 text-xl bg-white text-black hover:bg-zinc-200 transition-transform hover:scale-105"
          >
            Book a 15 min Call
            <ArrowUpRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* 2. Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-zinc-400">
        {/* Column 1: Brand/Copyright */}
        <div className="md:col-span-1">
          <span className="block text-white font-bold text-lg mb-4">
            Articulate.
          </span>
          <p>© 2024 Articulate Agency.</p>
          <p>All Rights Reserved.</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold mb-2">SITEMAP</span>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Column 3: Socials */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold mb-2">SOCIALS</span>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Twitter className="h-4 w-4" /> Twitter / X
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </Link>
        </div>

        {/* Column 4: Legal/Other */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold mb-2">LEGAL</span>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Cookie Settings
          </Link>
        </div>
      </div>

      {/* 3. Big Background Decoration (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-zinc-900 rounded-full blur-3xl opacity-20 pointer-events-none -z-10 mix-blend-screen" />
    </footer>
  );
}
