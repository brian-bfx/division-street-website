/** Tailwind class strings — Webflow-inspired fluid type scale */
export const typography = {
  hero: "font-display text-type-hero font-semibold text-navy",
  section: "font-display text-type-section font-semibold text-navy",
  subsection: "font-display text-type-subsection font-semibold text-navy",
  subhead: "text-lg leading-[1.6] text-navy/70 md:text-xl",
  body: "text-base leading-[1.6] text-navy/80",
  bodyLead: "text-base leading-[1.6] text-navy/80 md:text-[1.125rem]",
  eyebrow:
    "text-[0.8125rem] font-medium uppercase tracking-eyebrow text-orange md:text-sm",
  caption: "text-sm leading-[1.5] text-navy/60",
} as const;

export type TypographyRole = keyof typeof typography;
