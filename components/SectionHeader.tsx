type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <span className="mb-4 block font-mono text-xs uppercase tracking-[0.35em] text-blue-400">
        {eyebrow}
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
        {description}
      </p>
    </div>
  );
}
