import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
