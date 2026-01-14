import { spacing } from "./designTokens";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative ${spacing.sectionY} ${className}`}>
      {/* texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className={`${spacing.container} relative z-10`}>
        {children}
      </div>
    </section>
  );
}