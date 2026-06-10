import type { ImageAspect } from "@/content/images";
import { getPexelsApiKey } from "./config";
import type { PexelsPhoto, PexelsSearchOptions } from "./types";

type PexelsApiPhoto = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
};

type PexelsSearchResponse = {
  photos: PexelsApiPhoto[];
};

function orientationForAspect(aspect?: ImageAspect): string | undefined {
  switch (aspect) {
    case "portrait":
      return "portrait";
    case "hero":
    case "card":
      return "landscape";
    case "square":
      return "square";
    default:
      return undefined;
  }
}

function pickSrc(photo: PexelsApiPhoto, aspect?: ImageAspect): string {
  switch (aspect) {
    case "portrait":
      return photo.src.portrait || photo.src.large;
    case "square":
      return photo.src.large;
    case "hero":
      return photo.src.landscape || photo.src.large2x || photo.src.large;
    default:
      return photo.src.large;
  }
}

function toPhoto(photo: PexelsApiPhoto, aspect?: ImageAspect): PexelsPhoto {
  return {
    id: photo.id,
    src: pickSrc(photo, aspect),
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
    pexelsUrl: photo.url,
    width: photo.width,
    height: photo.height,
  };
}

export async function searchPexelsPhotos({
  query,
  aspect,
  perPage = 5,
}: PexelsSearchOptions): Promise<PexelsPhoto[]> {
  const params = new URLSearchParams({
    query,
    per_page: String(perPage),
  });

  const orientation = orientationForAspect(aspect);
  if (orientation) params.set("orientation", orientation);

  const response = await fetch(
    `https://api.pexels.com/v1/search?${params.toString()}`,
    {
      headers: { Authorization: getPexelsApiKey() },
      next: { revalidate: 0 },
    },
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Pexels search failed (${response.status}): ${body}`);
  }

  const data = (await response.json()) as PexelsSearchResponse;
  return data.photos.map((photo) => toPhoto(photo, aspect));
}
