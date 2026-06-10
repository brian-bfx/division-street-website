import { andersonville } from "./andersonville";
import { bucktown } from "./bucktown";
import { humboldtPark } from "./humboldt-park";
import { lakeview } from "./lakeview";
import { lincolnPark } from "./lincoln-park";
import { lincolnSquare } from "./lincoln-square";
import { loganSquare } from "./logan-square";
import { pilsen } from "./pilsen";
import { ravenswood } from "./ravenswood";
import { roscoeVillage } from "./roscoe-village";
import { ukrainianVillage } from "./ukrainian-village";
import { westTown } from "./west-town";
import { wickerPark } from "./wicker-park";
import type { Area, AreasHub } from "./types";

export type { Area, AreasHub } from "./types";

export const areasHub: AreasHub = {
  eyebrow: "Areas we serve",
  headline: "Local marketing across Chicago neighborhoods",
  entityIntro:
    "Division Street Digital serves small businesses across Chicago — from Wicker Park and Bucktown to Lincoln Park, Lakeview, Pilsen, and surrounding neighborhoods — with local SEO, Google Business Profile, social media, and reviews tailored to each area.",
  subhead:
    "We're a service-area business — we come to you. No storefront required on your end, and no big-agency minimums.",
};

export const allAreas: Area[] = [
  wickerPark,
  bucktown,
  ukrainianVillage,
  loganSquare,
  westTown,
  lincolnPark,
  lakeview,
  andersonville,
  ravenswood,
  humboldtPark,
  pilsen,
  lincolnSquare,
  roscoeVillage,
];

export function getAreaBySlug(slug: string): Area | undefined {
  return allAreas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return allAreas.map((a) => a.slug);
}
