"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show the button after scrolling down 100px (so it doesn't block the Hero)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // YOUR DATA HERE
  const phoneNumber = "15550000000";
  const message = "Hi Articulate Agency, I'm interested in a course project.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip Label (Appears on Hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: -10 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-full bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap mr-2 border border-zinc-200"
              >
                Chat with an Expert
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45 border-r border-t border-zinc-200" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Button */}
          <div className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)]">
            <MessageCircle size={28} fill="white" className="text-white" />

            {/* Notification Dot (Red Pulse) */}
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
