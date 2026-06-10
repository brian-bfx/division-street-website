import type { ImageAspect } from "@/content/images";

export type PexelsPhoto = {
  id: number;
  src: string;
  photographer: string;
  photographerUrl: string;
  pexelsUrl: string;
  width: number;
  height: number;
};

export type PexelsCacheEntry = PexelsPhoto & {
  query: string;
  resolvedAt: string;
};

export type PexelsSearchOptions = {
  query: string;
  aspect?: ImageAspect;
  perPage?: number;
};
