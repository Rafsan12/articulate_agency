"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import type { Project } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  useGSAP(() => {
    if (!cardRef.current) {
      return;
    }

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.08,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      },
    );
  }, { scope: cardRef });

  const handleMouseEnter = () => {
    if (!cardRef.current) {
      return;
    }

    gsap.to(cardRef.current, {
      y: -4,
      scale: 1.01,
      duration: 0.3,
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
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors duration-300 hover:border-zinc-700"
    >
      <div className="relative aspect-[1.44/1] overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/8 via-transparent to-white/5" />
      </div>

      <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-[12px] leading-5 text-zinc-400">
              {project.description}
            </p>
          </div>
          <span className="shrink-0 text-[11px] text-zinc-500">
            {project.year}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[10px] font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
