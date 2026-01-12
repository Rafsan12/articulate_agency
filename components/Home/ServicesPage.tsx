"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code2, Globe, Layout, Zap } from "lucide-react";

// --- DATA STRUCTURE ---
const services = [
  {
    id: "01",
    title: "Interactive Course Development",
    icon: Zap,
    description:
      "The full-cycle production package. We take your raw content and turn it into a polished learning experience.",
    whoFor: "Companies, Training Providers, Educators",
    included: [
      "Instructional design support",
      "Storyboarding & Scripting",
      "Interactive learning activities",
      "Assessments & quizzes",
      "SCORM / xAPI output",
    ],
    tools: ["Articulate Storyline", "Figma", "LMS"],
  },
  {
    id: "02",
    title: "Articulate Storyline Dev",
    icon: Code2,
    description:
      "Pure technical execution. Perfect if you already have the slides/scripts and just need a developer to build it.",
    whoFor: "Instructional Designers, Agencies",
    included: [
      "PPT/Script to Storyline Conversion",
      "Custom interactions & scenarios",
      "Variables, triggers, & logic",
      "Accessibility (508/WCAG)",
    ],
    tools: ["Storyline 360", "JavaScript", "GSAP"],
  },
  {
    id: "03",
    title: "Course Design & Graphics",
    icon: Layout,
    description:
      "Visual polish for your training. We ensure your course looks like a high-end product, not a default template.",
    whoFor: "L&D Teams, Course Creators",
    included: [
      "eLearning slide design",
      "Course UI/UX Interface",
      "Custom Infographics",
      "Brand Consistency Guide",
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
  },
  {
    id: "04",
    title: "Course Websites & Launch",
    icon: Globe,
    description:
      "We aren't a generic web agency. We build specific, high-converting pages designed to sell or deliver courses.",
    whoFor: "Course Sellers, Academies",
    included: [
      "Course Landing Pages",
      "Training Portals",
      "Sales Pages",
      "Basic WordPress/Webflow builds",
    ],
    tools: ["Webflow", "WordPress", "Next.js"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-4 md:px-12 lg:px-24 border-b border-zinc-900">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-widest mb-6">
            Our Capabilities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
              teach & train online.
            </span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            From technical Storyline development to the landing page where your
            students enroll. We handle the entire production pipeline.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full rounded-3xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-8 md:p-10 border-b border-zinc-800/50">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <service.icon size={24} />
                    </div>
                    <span className="text-zinc-600 font-mono text-sm">
                      /{service.id}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Details */}
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  {/* Who it's for */}
                  <div className="mb-8">
                    <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Best For
                    </span>
                    <p className="text-zinc-300 font-medium">
                      {service.whoFor}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-8 flex-1">
                    <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">
                      What&apos;s Included
                    </span>
                    <ul className="space-y-3">
                      {service.included.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-zinc-400"
                        >
                          <Check
                            className="text-blue-500 shrink-0 mt-0.5"
                            size={16}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools / Tech Stack */}
                  <div>
                    <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white border-transparent"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING & CTA */}
      <section className="py-24 px-4 border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto max-w-3xl text-center">
          {/* Pricing Note */}
          <div className="mb-12 p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 inline-block">
            <h4 className="text-white text-lg font-bold mb-2">
              Pricing Transparency
            </h4>
            <p className="text-zinc-400">
              Every project is unique. We offer{" "}
              <span className="text-white">fixed-price packages</span> for
              standard scopes and
              <span className="text-white"> custom quotes</span> for complex
              builds.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
            Let&apos;s scope your project.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-14 rounded-full bg-white text-black hover:bg-zinc-200 px-8 font-bold text-lg"
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-zinc-800 text-black  px-8 text-lg"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
