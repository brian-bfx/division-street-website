/**
 * Sitemap configuration — static entries for core pages.
 * Dynamic routes (services, areas, blog, stories) are merged in lib/sitemap.ts.
 */

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  /** URL path — must match a real page in /app */
  path: string;
  /** 0.0–1.0 — home and money pages highest; legal pages lowest */
  priority: number;
  changeFrequency: ChangeFrequency;
  /** ISO date (YYYY-MM-DD) — update when page content changes */
  lastModified: string;
};

export const sitemapEntries: SitemapEntry[] = [
  {
    path: "/",
    priority: 1.0,
    changeFrequency: "weekly",
    lastModified: "2026-06-05",
  },
  {
    path: "/about",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: "2026-06-05",
  },
  {
    path: "/services",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: "2026-06-08",
  },
  {
    path: "/services/local-marketing",
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-06-08",
  },
  {
    path: "/areas",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: "2026-06-05",
  },
  {
    path: "/blog",
    priority: 0.85,
    changeFrequency: "weekly",
    lastModified: "2026-06-05",
  },
  {
    path: "/pricing",
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-06-05",
  },
  {
    path: "/signup",
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-06-05",
  },
  {
    path: "/stories",
    priority: 0.8,
    changeFrequency: "weekly",
    lastModified: "2026-06-05",
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: "2026-06-05",
  },
  {
    path: "/privacy",
    priority: 0.3,
    changeFrequency: "yearly",
    lastModified: "2026-06-05",
  },
];

/** Dynamic route sitemap defaults */
export const dynamicSitemapDefaults = {
  service: { priority: 0.8, changeFrequency: "monthly" as ChangeFrequency },
  area: { priority: 0.8, changeFrequency: "monthly" as ChangeFrequency },
  blog: { priority: 0.7, changeFrequency: "monthly" as ChangeFrequency },
  story: { priority: 0.75, changeFrequency: "monthly" as ChangeFrequency },
};
