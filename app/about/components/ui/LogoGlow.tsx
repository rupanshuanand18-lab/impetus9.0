import Image from "next/image";

interface LogoGlowProps {
  src: string;
  alt: string;
  size?: number;
  glowColor?: "amber" | "cyan";
}

export default function LogoGlow({
  src,
  alt,
  size = 280,
  glowColor = "amber",
}: LogoGlowProps) {
  const glowClass =
    glowColor === "cyan" ? "bg-cyan-500/20" : "bg-amber-500/20";

  return (
    <div
      className="relative group"
      style={{ width: size, height: size }}
    >
      <div
        className={`absolute inset-0 ${glowClass} blur-3xl opacity-0 group-hover:opacity-100 transition duration-700`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain relative z-10 transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}