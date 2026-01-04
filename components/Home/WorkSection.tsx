"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample Data
const projects = [
  {
    id: 1,
    title: "Lumina E-Commerce",
    category: "Headless Shopify",
    // Use tall/portrait images for best effect here
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Apex Capital",
    category: "Fintech Platform",
    image:
      "https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Botanica Studios",
    category: "Brand Experience",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Vesper Core",
    category: "SaaS Dashboard",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
];

export default function WorkAgency() {
  // Track which project is currently hovered (default to the first one)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="bg-zinc-50 py-24 px-4 md:px-12 lg:px-24 overflow-hidden"
      id="work"
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-zinc-200 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Selected Cases.
        </h2>
        <p className="text-zinc-500 mt-4 md:mt-0 max-w-md text-right">
          A curation of our most impactful digital products and brand
          experiences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        {/* --- LEFT COLUMN: The Interactive Project List --- */}
        <div className="w-full lg:w-3/5 flex flex-col z-10">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`} // Example link
              className="group border-b border-zinc-200 py-8 flex items-center justify-between relative"
              // THE MAGIC: Update state on hover
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex flex-col">
                {/* Project Category */}
                <span
                  className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                    activeIndex === index ? "text-blue-600" : "text-zinc-400"
                  }`}
                >
                  {project.category}
                </span>

                {/* Project Title - Huge & Responsive */}
                <h3
                  className={`text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter transition-all duration-300 ${
                    activeIndex === index
                      ? "text-zinc-900 translate-x-4" // Active state: darker and shifted right
                      : "text-zinc-400 hover:text-zinc-600" // Inactive state
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              {/* Arrow Icon - Only visible on hover */}
              <ArrowUpRight
                className={`h-8 w-8 transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 rotate-45 text-blue-600"
                    : "opacity-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* --- RIGHT COLUMN: The Floating Image Reveal --- */}
        {/* We use 'sticky' so if the list is long, the image stays centered on screen 
            while the user scrolls past the titles.
        */}
        <div className="w-full lg:w-2/5 lg:h-[70vh] lg:sticky lg:top-24 flex items-center justify-center perspective-1000 pointer-events-none lg:pointer-events-auto mt-8 lg:mt-0">
          <div className="relative w-full h-[50vh] lg:h-full rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-100">
            {/* AnimatePresence enables exit animations when the key changes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex} // Key changes trigger the animation
                initial={{ opacity: 0, scale: 1.1 }} // Start slightly zoomed in and transparent
                animate={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
                exit={{ opacity: 0, scale: 0.95 }} // Exit by shrinking slightly and fading
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Custom "smooth" easing curve
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  fill
                  className="object-cover"
                  priority // Load these images fast
                />
                {/* Subtle overlay to ensure text contrast if needed, or just for vibe */}
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
