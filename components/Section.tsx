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
  /** Drop bottom padding on hero sections so content sections sit flush below the hero image */
  tightBottom?: boolean;
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
  intro: layout.sectionIntro,
};

export function Section({
  children,
  className = "",
  id,
  background = "white",
  spacing = "default",
  hero = false,
  tightBottom = false,
}: SectionProps) {
  const effectiveSpacing = hero ? "hero" : spacing;
  const tightBottomClass =
    tightBottom && effectiveSpacing === "hero" ? "!pb-0" : "";

  return (
    <section
      id={id}
      className={`${spacingStyles[effectiveSpacing]} ${tightBottomClass} ${backgroundStyles[background]} ${className}`}
    >
      <div className={layout.containerSafe}>{children}</div>
    </section>
  );
}
