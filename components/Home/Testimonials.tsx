"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CMO, TechFlow",
    quote: "Doubled our leads in 30 days.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Sarah Chen",
    role: "Founder, Bloom",
    quote: "The best investment we made.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Marcus J.",
    role: "Director, Apex",
    quote: "Incredibly talented team.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Emily Davis",
    role: "VP, Solstice",
    quote: "Design and performance matched.",
    image: "https://github.com/shadcn.png",
  },
  {
    name: "Chris Paul",
    role: "Manager, Hoops",
    quote: "Seamless communication.",
    image: "https://github.com/shadcn.png",
  },
];

// Helper Component for a single card
const TestimonialCard = ({ data }: { data: (typeof testimonials)[0] }) => {
  return (
    <div className="relative h-full w-[350px] flex-shrink-0 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-zinc-400 hover:shadow-md mx-4">
      <p className="text-lg font-medium leading-relaxed tracking-tight text-zinc-800 mb-6">
        &quot;{data.quote}&quot;
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <Avatar className="h-10 w-10 border border-zinc-100">
          <AvatarImage src={data.image} />
          <AvatarFallback>{data.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold text-sm text-zinc-900">{data.name}</h4>
          <p className="text-zinc-500 text-xs">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsLoop() {
  return (
    <section className="bg-zinc-50 py-24 overflow-hidden">
      <div className="container px-4 md:px-12 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
          What people say.
        </h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Gradient Masks for seamless fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-50 to-transparent" />

        {/* Row 1: Moving LEFT */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20, // Adjust speed (higher = slower)
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex min-w-full"
          >
            {/* We duplicate the data to create the infinite loop illusion */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving RIGHT */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 25, // Different speed feels more organic
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex min-w-full"
          >
            {/* Duplicate data again */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} data={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
