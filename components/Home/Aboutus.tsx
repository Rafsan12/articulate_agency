"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
  Heart,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

// --- DATA: CORE VALUES ---
const values = [
  {
    title: "Learner-Centric Design",
    description: "Every decision focused on the learner experience.",
    icon: Heart,
  },
  {
    title: "Clear Communication",
    description: "Transparent process, regular updates, no surprises.",
    icon: MessageSquare,
  },
  {
    title: "On-Time Delivery",
    description: "Reliable timelines and commitment to deadlines.",
    icon: Clock,
  },
  {
    title: "Measurable Results",
    description: "Learning outcomes that drive real business impact.",
    icon: TrendingUp,
  },
];

// --- DATA: PROCESS STEPS ---
const steps = [
  {
    step: "Step 1",
    title: "Discovery Call",
    description: "Understanding your goals, learners, and success metrics.",
  },
  {
    step: "Step 2",
    title: "Collaborative Design",
    description: "Working together on content, interactions, and visuals.",
  },
  {
    step: "Step 3",
    title: "Iterative Development",
    description: "Regular reviews and refinements until it's perfect.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-4 md:px-12 lg:px-24 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Your eLearning Production Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto"
          >
            We help organizations transform knowledge into engaging learning
            experiences using modern instructional design and Storyline
            development. Our mission is to design learning that works — for
            learners and businesses.
          </motion.p>
        </div>
      </section>

      {/* 2. CORE VALUES SECTION */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-500">
              The principles that guide every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 shrink-0 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPLIT SECTION (What We Do & Why Choose Us) */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left: What We Do Best */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                What We Do Best
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Instructional Design Excellence",
                    desc: "Built on sound learning theory and research-backed methodologies.",
                  },
                  {
                    title: "Storyline Expertise",
                    desc: "Deep technical knowledge including advanced variables and custom interactions.",
                  },
                  {
                    title: "Visual Design",
                    desc: "Professional, branded visuals that enhance learning without overwhelming the learner.",
                  },
                  {
                    title: "Technical Integration",
                    desc: "Seamless LMS deployment with SCORM/xAPI compliance and thorough testing.",
                  },
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="h-2 w-2 mt-2.5 rounded-full bg-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">
                        {point.title}:{" "}
                      </span>
                      <span className="text-slate-600">{point.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Why Choose Us (Purple Card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full p-10 md:p-12 rounded-3xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-2xl shadow-indigo-200"
            >
              <h3 className="text-2xl font-bold mb-8">
                Why Organizations Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  "Specialized in eLearning, not general web development",
                  "5+ years focused exclusively on course development",
                  "100+ successful projects across multiple industries",
                  "Proven track record of improving learning outcomes",
                  "Clear communication and on-time delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 text-indigo-200 shrink-0" />
                    <span className="text-indigo-50 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Collaborative Approach
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We believe the best learning experiences come from close
              collaboration. You bring the subject matter expertise, we bring
              the instructional design and technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-indigo-50/50 transition-colors"
              >
                <span className="block text-indigo-600 font-bold text-xl mb-2">
                  {step.step}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 px-4 bg-linear-to-r from-indigo-600 to-violet-600 text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Create Something Exceptional
          </motion.h2>
          <p className="text-indigo-100 text-lg mb-10">
            Ready to discuss your eLearning project? We're here to help.
          </p>
          <Button
            size="lg"
            className="h-14 px-8 rounded-full bg-white text-indigo-600 hover:bg-slate-100 font-bold text-lg shadow-xl"
            onClick={() => window.open("https://wa.me/YOUR_NUMBER", "_blank")}
          >
            Chat on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
