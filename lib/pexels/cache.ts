import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { PexelsCacheEntry } from "./types";

const CACHE_PATH = path.join(process.cwd(), ".pexels-cache.json");

type CacheFile = Record<string, PexelsCacheEntry>;

let memoryCache: CacheFile | null = null;

async function loadCache(): Promise<CacheFile> {
  if (memoryCache) return memoryCache;

  try {
    const raw = await readFile(CACHE_PATH, "utf8");
    memoryCache = JSON.parse(raw) as CacheFile;
  } catch {
    memoryCache = {};
  }

  return memoryCache;
}

async function persistCache(cache: CacheFile): Promise<void> {
  memoryCache = cache;
  await writeFile(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`, "utf8");
}

export function getCacheKey(label: string, hint: string, pexelsQuery?: string) {
  return `${label}::${pexelsQuery ?? hint}`;
}

export async function readCachedPhoto(
  key: string,
): Promise<PexelsCacheEntry | undefined> {
  const cache = await loadCache();
  return cache[key];
}

export async function writeCachedPhoto(
  key: string,
  entry: PexelsCacheEntry,
): Promise<void> {
  const cache = await loadCache();
  cache[key] = entry;
  await persistCache(cache);
}

export async function listCachedPhotos(): Promise<
  Array<{ key: string; entry: PexelsCacheEntry }>
> {
  const cache = await loadCache();
  return Object.entries(cache).map(([key, entry]) => ({ key, entry }));
}

export async function clearPexelsCache(): Promise<void> {
  memoryCache = {};
  await persistCache({});
}
