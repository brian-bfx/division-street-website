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

export type Story = {
  slug: string;
  business: string;
  type: string;
  neighborhood: string;
  sections: StorySection[];
  services?: StoryService[];
  quote: string;
  quoteAttribution: string;
  hero: StoryImage;
  /** Extra visuals for the detail page — website mockups, interiors, etc. */
  gallery?: StoryImage[];
};
