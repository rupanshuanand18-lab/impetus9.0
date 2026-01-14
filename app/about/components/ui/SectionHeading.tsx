interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  highlightColor?: "amber" | "cyan";
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  highlightColor = "amber",
}: SectionHeadingProps) {
  const highlightClass =
    highlightColor === "cyan"
      ? "text-cyan-400"
      : "bg-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text";

  return (
    <div className="space-y-2">
      <h2 className="text-4xl md:text-5xl font-black">
        {title}{" "}
        {highlight && <span className={highlightClass}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-white/80 tracking-wide">{subtitle}</p>
      )}
    </div>
  );
}