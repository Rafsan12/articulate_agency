import { cn } from "@/lib/utils";

type CaseStudyRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CaseStudyReveal({
  children,
  className,
}: CaseStudyRevealProps) {
  return <div className={cn("case-study-reveal", className)}>{children}</div>;
}
