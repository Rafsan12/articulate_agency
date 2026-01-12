"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// --- DATA ---
const reviews = [
  {
    name: "Sarah Jenkins",
    role: "L&D Manager",
    content:
      "The interactive scenarios are a hit with the staff. Completion rates are up 40%.",
  },
  {
    name: "Mark D.",
    role: "Training Director",
    content:
      "Finally, a developer who understands complex variables in Storyline. Bug-free delivery.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, EduStart",
    content:
      "The course landing page converted at 4.5%. Clean design and fast turnaround.",
  },
  {
    name: "David K.",
    role: "Safety Officer",
    content:
      "Helped us troubleshoot a SCORM issue our previous vendor couldn't fix.",
  },
  {
    name: "Alex Thompson",
    role: "CTO, SkillUp",
    content:
      "High-quality code and great communication. The LMS integration was seamless.",
  },
  {
    name: "Maria Garcia",
    role: "HR Lead",
    content:
      "Our onboarding process is now fully automated and interactive. New hires love it.",
  },
];

// --- SUB-COMPONENT: CARD ---
const ReviewCard = ({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) => {
  return (
    <div className="relative w-full cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-600 hover:bg-zinc-900">
      <div className="flex flex-row items-center gap-2 mb-4">
        <Avatar className="h-8 w-8 border border-zinc-700">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-zinc-500">{role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
          ))}
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed text-zinc-300">
        &quot;{content}&quot;
      </blockquote>
    </div>
  );
};

// --- SUB-COMPONENT: COLUMN ---
// This handles the infinite scroll logic using Framer Motion
const ReviewColumn = ({
  reviews,
  duration = 20,
}: {
  reviews: Array<{ name: string; role: string; content: string }>;
  duration?: number;
}) => {
  return (
    <div className="relative flex flex-col overflow-hidden h-150 gap-6">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-6"
      >
        {/* We double the data to create the infinite loop effect */}
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </motion.div>

      {/* Top/Bottom Fade Masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent z-10" />
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function TestimonialsFlow() {
  return (
    <section className="bg-black py-24 px-4 md:px-12 overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-widest mb-6">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Don&apos;t just take our word for it.
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Join hundreds of training managers and educators who trust us with
            their content.
          </p>
        </div>

        {/* The Wall of Love Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 (Fast) */}
          <ReviewColumn reviews={reviews.slice(0, 3)} duration={15} />

          {/* Column 2 (Slower, Hidden on mobile) */}
          <div className="hidden md:block">
            {/* We reverse the array here to make it visually distinct */}
            <ReviewColumn
              reviews={[...reviews.slice(3, 6)].reverse()}
              duration={25}
            />
          </div>

          {/* Column 3 (Medium, Hidden on tablet) */}
          <div className="hidden lg:block">
            <ReviewColumn reviews={reviews.slice(0, 3)} duration={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
