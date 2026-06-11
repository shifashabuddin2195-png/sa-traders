import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""} mb-4`}>
          <span className="gold-divider" />
          <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">{eyebrow}</span>
          <span className="gold-divider" />
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}
