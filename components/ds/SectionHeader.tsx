import { Eyebrow } from "@/components/Eyebrow";
import { typography } from "@/lib/design-system/typography";

type SectionHeaderProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  align?: "center" | "left";
  /** When true (default), adds space before the next block in the section */
  spaced?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  headline,
  subhead,
  align = "center",
  spaced = true,
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "mx-auto max-w-prose text-center" : "text-center md:text-left";
  const spacingClass = spaced ? "mb-14 md:mb-16" : "";

  return (
    <div className={`${alignClass} ${spacingClass} ${className}`}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h2 className={typography.section}>{headline}</h2>
      {subhead && <p className={`mt-6 ${typography.bodyLead}`}>{subhead}</p>}
    </div>
  );
}
