"use client";

import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Logic: If scrolled past 50px, turn into the "Pill"
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        // ANIMATION CONFIGURATION
        initial={{
          width: "100%",
          top: 0,
          borderRadius: 0,
          backgroundColor: "rgba(255, 255, 255, 0)",
          border: "1px solid rgba(0,0,0,0)",
        }}
        animate={{
          // If scrolled: Width shrinks, Top adds spacing, Border Radius curves
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "1000px" : "100%", // Max width for the pill
          top: scrolled ? 20 : 0,
          borderRadius: scrolled ? "50px" : "0px",
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.85)" // White/Glass when scrolled
            : "rgba(255, 255, 255, 0)", // Transparent at top
          border: scrolled
            ? "1px solid rgba(0,0,0,0.1)" // Show border when scrolled
            : "1px solid rgba(0,0,0,0)",
          boxShadow: scrolled
            ? "0px 4px 20px rgba(0,0,0,0.1)" // Add shadow when scrolled
            : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        // CSS POSITIONING (Always Fixed/Static on screen)
        className="fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-md overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-3 w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter relative z-10 text-black"
          >
            Articulate.
          </Link>

          {/* Desktop Links (Centered) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="rounded-full px-6 bg-black text-white hover:bg-zinc-800 transition-all">
              Book a Call
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu (Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter block text-black"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Button size="lg" className="w-full text-lg rounded-full py-8">
                  Book a Call <ArrowUpRight className="ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
