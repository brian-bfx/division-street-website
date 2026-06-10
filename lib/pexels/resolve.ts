import type { ImageSlot } from "@/content/images";
import { searchPexelsPhotos } from "./client";
import { getCacheKey, readCachedPhoto, writeCachedPhoto } from "./cache";
import { isPexelsEnabled } from "./config";
import type { PexelsCacheEntry, PexelsPhoto } from "./types";

export type ResolvedImage = {
  src?: string;
  fromPexels: boolean;
  pexels?: PexelsPhoto;
  query?: string;
};

function buildSearchQuery(slot: ImageSlot): string {
  return slot.pexelsQuery?.trim() || slot.hint.trim() || slot.label.trim();
}

function toCacheEntry(photo: PexelsPhoto, query: string): PexelsCacheEntry {
  return {
    ...photo,
    query,
    resolvedAt: new Date().toISOString(),
  };
}

export async function resolveImage(slot: ImageSlot): Promise<ResolvedImage> {
  if (slot.src) {
    return { src: slot.src, fromPexels: false };
  }

  if (!isPexelsEnabled()) {
    return { fromPexels: false };
  }

  const query = buildSearchQuery(slot);
  const cacheKey = getCacheKey(slot.label, slot.hint, slot.pexelsQuery);
  const cached = await readCachedPhoto(cacheKey);

  if (cached) {
    return {
      src: cached.src,
      fromPexels: true,
      pexels: cached,
      query: cached.query,
    };
  }

  const photos = await searchPexelsPhotos({
    query,
    aspect: slot.aspect,
    perPage: 5,
  });
  const photo = photos[0];

  if (!photo) {
    return { fromPexels: false, query };
  }

  await writeCachedPhoto(cacheKey, toCacheEntry(photo, query));

  return {
    src: photo.src,
    fromPexels: true,
    pexels: photo,
    query,
  };
}

export async function warmPexelsCache() {
  const { getAllImageSlots } = await import("./collect-slots");
  const slots = getAllImageSlots().filter((slot) => !slot.src);
  const results: Array<{
    id: string;
    label: string;
    resolved: boolean;
    query?: string;
    src?: string;
    error?: string;
  }> = [];

  for (const slot of slots) {
    try {
      const resolved = await resolveImage(slot);
      results.push({
        id: slot.id,
        label: slot.label,
        resolved: Boolean(resolved.src),
        query: resolved.query,
        src: resolved.src,
      });
    } catch (error) {
      results.push({
        id: slot.id,
        label: slot.label,
        resolved: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  return {
    total: slots.length,
    resolved: results.filter((entry) => entry.resolved).length,
    results,
  };
}
