import { colors } from "@/lib/colors";

export { colors };

export const radii = {
  button: "8px",
  card: "12px",
  cardLg: "16px",
} as const;

export const shadows = {
  card: "0 4px 16px rgba(11, 22, 42, 0.08)",
  cardHover: "0 8px 24px rgba(11, 22, 42, 0.12)",
} as const;

/** Vertical rhythm — matches Section padding */
export const spacing = {
  sectionY: "5rem",
  sectionYMd: "7rem",
  sectionYLg: "8rem",
  sectionHeroY: "6rem",
  sectionHeroYMd: "8rem",
  stackGap: "2rem",
  stackGapMd: "2.5rem",
  cardPadding: "2rem",
  cardPaddingMd: "2.5rem",
} as const;

export const maxWidth = {
  content: "1140px",
  prose: "70ch",
} as const;
