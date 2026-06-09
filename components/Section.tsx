import type { SectionBackground, SectionSpacing } from "@/lib/design-system/layout";
import { layout } from "@/lib/design-system/layout";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
  /** Shorthand for spacing="hero" */
  hero?: boolean;
};

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  warm: "bg-warm",
  navy: "bg-navy text-white",
  pinstripe: "bg-pinstripe",
};

const spacingStyles: Record<SectionSpacing, string> = {
  default: layout.sectionDefault,
  compact: layout.sectionCompact,
  hero: layout.sectionHero,
};

export function Section({
  children,
  className = "",
  id,
  background = "white",
  spacing = "default",
  hero = false,
}: SectionProps) {
  const effectiveSpacing = hero ? "hero" : spacing;

  return (
    <section
      id={id}
      className={`${spacingStyles[effectiveSpacing]} ${backgroundStyles[background]} ${className}`}
    >
      <div className={layout.containerSafe}>{children}</div>
    </section>
  );
}
