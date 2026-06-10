import type { ImageAspect } from "@/content/images";

export type StorySection = {
  eyebrow: string;
  body: string;
};

export type StoryService = {
  label: string;
  /** Links to /services/{slug} when set */
  slug?: string;
};

export type StoryImage = {
  label: string;
  hint: string;
  src?: string;
  aspect?: ImageAspect;
};

export type StoryCardContent = {
  /** Bold headline on case study cards */
  headline: string;
  /** Key outcome or metric line below the headline */
  outcome: string;
  /** Short summary paragraph on case study cards */
  summary: string;
};

export type Story = {
  slug: string;
  business: string;
  type: string;
  neighborhood: string;
  sections: StorySection[];
  services?: StoryService[];
  /** Case study card copy — homepage and /stories listing */
  card: StoryCardContent;
  /** Full testimonial — used on the story detail page */
  quote: string;
  /** Short pull quote for homepage and story cards */
  shortQuote: string;
  quoteAttribution: string;
  /** Optional client headshot for cards and quote blocks */
  headshot?: {
    src: string;
    alt?: string;
  };
  hero: StoryImage;
  /** Extra visuals for the detail page — website mockups, interiors, etc. */
  gallery?: StoryImage[];
};
