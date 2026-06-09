import type { MetadataRoute } from "next";
import { getAllAreaSlugs } from "@/content/areas";
import { getAllBlogSlugs } from "@/content/blog";
import { getAllServiceSlugs } from "@/content/services";
import {
  dynamicSitemapDefaults,
  sitemapEntries,
  type SitemapEntry,
} from "@/content/sitemap";
import { site } from "@/content/site";
import { getAllStorySlugs } from "@/lib/stories";

function entryToSitemapItem(entry: SitemapEntry): MetadataRoute.Sitemap[number] {
  return {
    url: `${site.url}${entry.path}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  };
}

function dynamicEntries(
  paths: string[],
  defaults: { priority: number; changeFrequency: SitemapEntry["changeFrequency"] },
  lastModified = "2026-06-05"
): SitemapEntry[] {
  return paths.map((slugPath) => ({
    path: slugPath,
    priority: defaults.priority,
    changeFrequency: defaults.changeFrequency,
    lastModified,
  }));
}

/** All public indexable routes — single source of truth for sitemap.xml */
export function buildSitemap(): MetadataRoute.Sitemap {
  const allEntries: SitemapEntry[] = [
    ...sitemapEntries,
    ...dynamicEntries(
      getAllServiceSlugs().map((s) => `/services/${s}`),
      dynamicSitemapDefaults.service
    ),
    ...dynamicEntries(
      getAllAreaSlugs().map((s) => `/areas/${s}`),
      dynamicSitemapDefaults.area
    ),
    ...dynamicEntries(
      getAllBlogSlugs().map((s) => `/blog/${s}`),
      dynamicSitemapDefaults.blog
    ),
    ...dynamicEntries(
      getAllStorySlugs().map((s) => `/stories/${s}`),
      dynamicSitemapDefaults.story
    ),
  ];

  return allEntries.map(entryToSitemapItem);
}

/** Paths included in the sitemap — useful for audits and tests */
export function getSitemapPaths(): string[] {
  return buildSitemap().map((item) => new URL(item.url!).pathname);
}
