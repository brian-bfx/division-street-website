import { googleBusinessProfile } from "./google-business-profile";
import { localSeo } from "./local-seo";
import { reviewsReputation } from "./reviews-reputation";
import { socialMedia } from "./social-media";
import type { Service, ServicesHub } from "./types";
import { websites } from "./websites";

export type { Service, ServicesHub } from "./types";

export const servicesHub: ServicesHub = {
  eyebrow: "Services",
  headline: "Get found, get chosen, get contacted",
  entityIntro:
    "Division Street Digital builds local marketing systems for Chicago neighborhood businesses — Google, Maps, reviews, ads, landing pages, and reporting built around calls, visits, bookings, and repeat customers.",
  subhead:
    "Not another SEO checklist. A connected system that turns local search into real customer actions.",
};

export const featuredService = {
  slug: "local-marketing",
  title: "Local Marketing",
  headline: "Get Found. Get Chosen. Get Contacted.",
  description:
    "Turn local search demand into calls, visits, bookings, and repeat customers. Start with a Local Visibility Audit or explore our full local marketing system.",
  cta: "Explore local marketing",
};

export const allServices: Service[] = [
  localSeo,
  googleBusinessProfile,
  socialMedia,
  reviewsReputation,
  websites,
];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}
