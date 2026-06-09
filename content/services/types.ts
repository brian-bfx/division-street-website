import type { Faq } from "@/content/pricing";

export type Service = {
  slug: string;
  title: string;
  headline: string;
  metaDescription: string;
  /** Key in content/images.ts → services */
  imageKey?: string;
  entityIntro: string;
  paragraphs: string[];
  benefits: { title: string; body: string }[];
  faqs: Faq[];
  relatedAreaSlugs: string[];
  relatedBlogSlugs: string[];
};

export type ServicesHub = {
  eyebrow: string;
  headline: string;
  entityIntro: string;
  subhead: string;
};
