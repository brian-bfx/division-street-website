import { bucktown } from "./bucktown";
import { loganSquare } from "./logan-square";
import { ukrainianVillage } from "./ukrainian-village";
import { westTown } from "./west-town";
import { wickerPark } from "./wicker-park";
import type { Area, AreasHub } from "./types";

export type { Area, AreasHub } from "./types";

export const areasHub: AreasHub = {
  eyebrow: "Areas we serve",
  headline: "Local marketing across Chicago neighborhoods",
  entityIntro:
    "Division Street Digital serves small businesses in Wicker Park, Bucktown, Ukrainian Village, Logan Square, West Town, and surrounding Chicago neighborhoods — with local SEO, Google Business Profile, social media, and reviews tailored to each area.",
  subhead:
    "We're a service-area business — we come to you. No storefront required on your end, and no big-agency minimums.",
};

export const allAreas: Area[] = [
  wickerPark,
  bucktown,
  ukrainianVillage,
  loganSquare,
  westTown,
];

export function getAreaBySlug(slug: string): Area | undefined {
  return allAreas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return allAreas.map((a) => a.slug);
}
