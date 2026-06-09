import type { ImageAspect } from "@/content/images";

export type ImagePattern = "hero" | "card" | "inline" | "portrait";

/** Tailwind aspect classes per content aspect */
export const aspectClasses: Record<ImageAspect, string> = {
  hero: "aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]",
  card: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[3/4] max-h-80 sm:max-h-none",
};

/** next/image sizes attribute per layout pattern */
export const imageSizes: Record<ImagePattern, string> = {
  hero: "(max-width: 768px) 100vw, 50vw",
  card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  inline: "(max-width: 768px) 100vw, 40vw",
  portrait: "(max-width: 640px) 100vw, 200px",
};

export const imageArtDirection = {
  mood: "Warm, natural light. Real neighborhood businesses — no stock-photo polish.",
  cropSafeZone: "Keep faces and signage in center 70% — mobile crops to 4:3.",
  neighborhoods: "Wicker Park, Bucktown, Logan Square, Ukrainian Village, West Town cues.",
} as const;
