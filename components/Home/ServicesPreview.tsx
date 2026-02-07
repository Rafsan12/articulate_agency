"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  FileCode2,
  MessageCircle,
  MonitorPlay,
  Palette,
  Rocket,
  X,
} from "lucide-react";
import { useState } from "react";

// --- CONFIG ---
const PHONE_NUMBER = "15550000000";

const services = [
  {
    id: "01",
    title: "Interactive eLearning",
    subtitle: "& Course Development",
    icon: MonitorPlay,
    description:
      "We build scenario-based modules that adapt to learner choices, ensuring active engagement rather than passive clicking.",
    deliverables: [
      "Storyboarding & Scripting",
      "Branching Scenarios",
      "Gamification Elements",
      "Voiceover Sync",
    ],
  },
  {
    id: "02",
    title: "Articulate Storyline",
    subtitle: "Complex Projects",
    icon: FileCode2,
    description:
      "Advanced development for when standard tools fall short. We use custom JavaScript and variables to push Storyline to the limit.",
    deliverables: [
      "Custom JavaScript Logic",
      "API Integrations",
      "Complex Variables",
      "Accessibility (508/WCAG)",
    ],
  },
  {
    id: "03",
    title: "Course Design",
    subtitle: "& Custom Graphics",
    icon: Palette,
    description:
      "Stop using stock photos. We design custom UI kits and illustrations that match your brand identity perfectly.",
    deliverables: [
      "UI/UX Interface Design",
      "Custom Illustration",
      "Icon Sets",
      "Motion Graphics",
    ],
  },
  {
    id: "04",
    title: "Course Websites",
    subtitle: "& Launch Support",
    icon: Rocket,
    description:
      "Need a place to host your course? We build high-converting landing pages and handle the LMS upload process.",
    deliverables: [
      "Landing Page Design",
      "LMS Upload & Testing",
      "SCORM Debugging",
      "Launch Strategy",
    ],
  },
];

export default function ServicesExpanded() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  // Helper to open WhatsApp with specific service name
  const handleWhatsAppClick = (e: React.MouseEvent, serviceName: string) => {
    e.stopPropagation(); // <--- CRITICAL: Prevents the accordion from closing when clicked

    const message = `Hi, I am interested in your ${serviceName} service. Can we discuss the details?`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="bg-zinc-950 py-24 px-4 md:px-12 lg:px-24 border-t border-zinc-900"
      id="services"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Core Capabilities.
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-zinc-500 max-w-xs text-right text-sm">
              Click on a service to view deliverables and details.
            </p>
          </div>
        </div>

        {/* The Accordion List */}
        <div className="flex flex-col">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index;
            const isDimmed = expandedIndex !== null && !isOpen;

            return (
              <div
                key={service.id}
                onClick={() => toggleService(index)}
                className={`group relative border-t border-zinc-800 transition-all duration-500 cursor-pointer ${
                  isOpen ? "py-8 bg-zinc-900/30" : "py-10 hover:bg-zinc-900/10"
                }`}
              >
                {/* Dimming Overlay for non-active items */}
                <div
                  className={`absolute inset-0 bg-zinc-950/80 transition-opacity duration-500 pointer-events-none z-10 ${
                    isDimmed ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-20 px-4 md:px-0">
                  {/* Service Header (Always Visible) */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left: Icon & ID */}
                    <div className="flex items-center gap-6 md:w-1/4">
                      <span
                        className={`font-mono text-sm transition-colors ${
                          isOpen ? "text-blue-500" : "text-zinc-600"
                        }`}
                      >
                        /{service.id}
                      </span>
                      <div
                        className={`p-3 rounded-full transition-colors duration-300 ${
                          isOpen
                            ? "bg-blue-500 text-white"
                            : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-300"
                        }`}
                      >
                        <service.icon size={24} />
                      </div>
                    </div>

                    {/* Middle: Title */}
                    <div className="md:w-1/2">
                      <h3
                        className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
                          isOpen
                            ? "text-white"
                            : "text-zinc-400 group-hover:text-white"
                        }`}
                      >
                        {service.title}{" "}
                        <span className="text-zinc-600 font-light block md:inline">
                          {service.subtitle}
                        </span>
                      </h3>
                    </div>

                    {/* Right: Toggle Icon */}
                    <div className="md:w-1/4 flex justify-end">
                      <div
                        className={`h-12 w-12 rounded-full border border-zinc-700 flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-white border-white rotate-180"
                            : "group-hover:border-zinc-500"
                        }`}
                      >
                        {isOpen ? (
                          <X className="text-black" />
                        ) : (
                          <ArrowDown className="text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* EXPANDED CONTENT (Framer Motion) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-12 pb-4 flex flex-col md:flex-row gap-12 border-t border-zinc-800 mt-8">
                          {/* Description Column */}
                          <div className="md:w-1/2 md:pl-[25%]">
                            {/* Indented to align with title */}
                            <h4 className="text-zinc-100 font-bold mb-4">
                              The Approach
                            </h4>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                              {service.description}
                            </p>

                            {/* --- BUTTON UPDATE START --- */}
                            <Button
                              onClick={(e) =>
                                handleWhatsAppClick(e, service.title)
                              }
                              className="rounded-full bg-emerald-600 text-white hover:bg-emerald-500 border border-emerald-500/20"
                            >
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Book on WhatsApp
                            </Button>
                            {/* --- BUTTON UPDATE END --- */}
                          </div>

                          {/* Deliverables Column */}
                          <div className="md:w-1/3 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <h4 className="text-zinc-100 font-bold mb-4 text-sm uppercase tracking-wider">
                              Deliverables
                            </h4>
                            <ul className="space-y-3">
                              {service.deliverables.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-zinc-400 text-sm"
                                >
                                  <Check
                                    className="text-blue-500 shrink-0"
                                    size={16}
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}

          {/* Closing Border */}
          <div className="border-t border-zinc-800" />
        </div>
      </div>
    </section>
  );
}
