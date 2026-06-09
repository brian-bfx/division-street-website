import type { Faq } from "@/content/pricing";

export type Area = {
  slug: string;
  name: string;
  headline: string;
  metaDescription: string;
  /** Key in content/images.ts → areas */
  imageKey?: string;
  entityIntro: string;
  context: string;
  landmarks: string;
  businessTypes: string[];
  serviceSlugs: string[];
  featuredStorySlug?: string;
  faqs: Faq[];
};

export type AreasHub = {
  eyebrow: string;
  headline: string;
  entityIntro: string;
  subhead: string;
};
