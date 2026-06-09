import type { Faq } from "@/content/pricing";

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Key in content/images.ts → blog */
  imageKey?: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  sections: BlogSection[];
  faqs?: Faq[];
  relatedLinks: { label: string; href: string }[];
};

export type BlogHub = {
  eyebrow: string;
  headline: string;
  entityIntro: string;
  subhead: string;
};
