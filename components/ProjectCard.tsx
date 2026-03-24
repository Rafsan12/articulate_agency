"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import type { Project } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const accents = [
  {
    glow: "shadow-[0_20px_80px_-45px_rgba(59,130,246,0.55)]",
    chip: "bg-blue-500/10 text-blue-300",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    glow: "shadow-[0_20px_80px_-45px_rgba(16,185,129,0.55)]",
    chip: "bg-emerald-500/10 text-emerald-300",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    glow: "shadow-[0_20px_80px_-45px_rgba(245,158,11,0.55)]",
    chip: "bg-amber-500/10 text-amber-300",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const accent = accents[index % accents.length];

  useGSAP(() => {
    if (!cardRef.current) {
      return;
    }

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 82%",
        },
      },
    );
  }, { scope: cardRef });

  const handleMouseEnter = () => {
    if (!cardRef.current) {
      return;
    }

    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.015,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) {
      return;
    }

    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900/90 p-6 transition-colors duration-300 ${accent.glow}`}
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${accent.gradient} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="absolute inset-x-6 top-24 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <span
            className={`inline-flex rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] ${accent.chip}`}
          >
            {project.category}
          </span>
          <p className="mt-4 text-sm text-zinc-500">{project.year}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="relative z-10 mt-12 flex-1">
        <div className="rounded-[28px] border border-white/8 bg-black/20 p-5 backdrop-blur-sm">
          <div className="rounded-2xl border border-white/8 bg-zinc-950/80 p-5">
            <p className="text-sm text-zinc-500">Outcome</p>
            <p className="mt-2 text-lg font-medium text-zinc-100">
              {project.outcome}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          {project.title}
        </h2>
        <p className="mt-4 max-w-md leading-7 text-zinc-400">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
