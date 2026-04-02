"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CaseStudyMotionProps = {
  children: React.ReactNode;
};

export default function CaseStudyMotion({ children }: CaseStudyMotionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      const sections = gsap.utils.toArray<HTMLElement>(
        ".case-study-reveal",
        containerRef.current,
      );

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
}
