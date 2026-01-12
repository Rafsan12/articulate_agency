"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Globe,
  Layout,
  MessageCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";

// --- DATA ---
const services = [
  {
    id: "01",
    title: "Interactive Course Dev",
    shortTitle: "Course Development",
    icon: Zap,
    description:
      "The full-cycle production package. We take your raw content and turn it into a polished learning experience.",
    whoFor: "Companies, Educators",
    included: [
      "Instructional design support",
      "Storyboarding & Scripting",
      "Interactive learning activities",
      "Assessments & quizzes",
    ],
    tools: ["Articulate Storyline", "Figma", "LMS"],
  },
  {
    id: "02",
    title: "Articulate Storyline Dev",
    shortTitle: "Storyline Expert",
    icon: Code2,
    description:
      "Pure technical execution. Perfect if you already have the slides/scripts and just need a developer to build it.",
    whoFor: "Instructional Designers",
    included: [
      "PPT to Storyline Conversion",
      "Custom interactions & scenarios",
      "Variables, triggers, & logic",
      "Accessibility (508/WCAG)",
    ],
    tools: ["Storyline 360", "JavaScript", "GSAP"],
  },
  {
    id: "03",
    title: "Course Design & Graphics",
    shortTitle: "UI/UX & Graphics",
    icon: Layout,
    description:
      "Visual polish for your training. We ensure your course looks like a high-end product, not a default template.",
    whoFor: "L&D Teams, Creators",
    included: [
      "eLearning slide design",
      "Course UI/UX Interface",
      "Custom Infographics",
      "Brand Consistency Guide",
    ],
    tools: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: "04",
    title: "Course Websites & Launch",
    shortTitle: "Websites & Launch",
    icon: Globe,
    description:
      "We build specific, high-converting pages designed to sell or deliver courses.",
    whoFor: "Course Sellers, Academies",
    included: [
      "Course Landing Pages",
      "Training Portals",
      "Sales Pages",
      "WordPress/Webflow builds",
    ],
    tools: ["Webflow", "WordPress", "Next.js"],
  },
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Helper for WhatsApp Booking
  const handleBook = (serviceName: string) => {
    const phone = "15550000000"; // Replace with yours
    const msg = `Hi, I am interested in ${serviceName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 flex flex-col">
      {/* 1. HERO HEADER */}
      <section className="pt-24 pb-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Our Capabilities.
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Select a service to view the technical breakdown.
          </p>
        </div>
      </section>

      {/* 2. THE TAB SYSTEM */}
      <section className="px-4 md:px-12 lg:px-24 pb-24 flex-1">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* --- LEFT COLUMN: Navigation Menu --- */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {services.map((service, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={`group relative flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ${
                      isActive
                        ? "bg-zinc-900 border border-zinc-800"
                        : "hover:bg-zinc-900/40 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Active Indicator Dot */}
                      <div
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive
                            ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                            : "bg-zinc-800 group-hover:bg-zinc-700"
                        }`}
                      />

                      <div>
                        <span
                          className={`block text-sm font-mono mb-1 transition-colors ${
                            isActive ? "text-blue-400" : "text-zinc-600"
                          }`}
                        >
                          /{service.id}
                        </span>
                        <span
                          className={`block font-bold text-lg transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-zinc-400 group-hover:text-zinc-200"
                          }`}
                        >
                          {service.shortTitle}
                        </span>
                      </div>
                    </div>

                    {/* Arrow appears only on active/hover */}
                    <ChevronRight
                      className={`transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0 text-blue-500"
                          : "opacity-0 -translate-x-2 text-zinc-600"
                      }`}
                    />

                    {/* Background Active Glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 rounded-2xl bg-zinc-800/20 -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* --- RIGHT COLUMN: Display Panel --- */}
            <div className="lg:col-span-8">
              <div className="relative h-full min-h-125 rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden p-8 md:p-12">
                {/* Background Noise Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 text-blue-400">
                        {/* Render the icon dynamically */}
                        {(() => {
                          const Icon = services[activeTab].icon;
                          return <Icon size={32} />;
                        })()}
                      </div>
                      <Badge
                        variant="outline"
                        className="border-blue-900/30 bg-blue-900/10 text-blue-400 px-3 py-1"
                      >
                        Best For: {services[activeTab].whoFor}
                      </Badge>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {services[activeTab].title}
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                      {services[activeTab].description}
                    </p>

                    {/* Content Split: Deliverables vs Tools */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                          Included Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {services[activeTab].included.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-zinc-300"
                            >
                              <Check
                                className="text-blue-500 shrink-0 mt-0.5"
                                size={18}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                          Core Technology
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {services[activeTab].tools.map((tool) => (
                            <Badge
                              key={tool}
                              className="bg-zinc-950 border border-zinc-800 text-zinc-400 px-3 py-1.5 hover:text-white transition-colors"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-auto pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => handleBook(services[activeTab].title)}
                        className="h-12 rounded-full bg-white text-black hover:bg-zinc-200 px-8 font-bold text-base"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Book via WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 rounded-full border-zinc-700 text-white hover:bg-zinc-800 px-8 text-base"
                      >
                        View Examples <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
