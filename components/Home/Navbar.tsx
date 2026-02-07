"use client";

import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PHONE_NUMBER = "15550000000";

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
    { name: "About", href: "about" },
  ];

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const message = `Hi, I am interested in your service. Can we discuss the details?`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

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
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "1000px" : "100%",
          top: scrolled ? 20 : 0,
          borderRadius: scrolled ? "50px" : "0px",
          backgroundColor: scrolled
            ? "rgba(9, 9, 11, 0.85)"
            : "rgba(9, 9, 11, 0)",

          border: scrolled
            ? "1px solid rgba(99, 102, 241, 0.12)"
            : "1px solid rgba(99, 102, 241, 0)",

          boxShadow: scrolled ? "0px 6px 24px rgba(0, 0, 0, 0.6)" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-md overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-3 w-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-indigo-50 hover:text-white font-bold tracking-tighter relative z-10 text-lg"
          >
            Articulate.
          </Link>

          {/* Desktop Links (Centered) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-indigo-200 hover:text-indigo-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={handleWhatsAppClick}
              className="rounded-full px-6 bg-indigo-500 hover:bg-indigo-400 text-white transition-all"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
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
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full text-lg rounded-full py-8"
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
