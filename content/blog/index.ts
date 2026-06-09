import { googleBusinessProfileWickerPark } from "./posts/google-business-profile-wicker-park";
import { howToGetMoreGoogleReviews } from "./posts/how-to-get-more-google-reviews";
import { instagramWickerParkRetail } from "./posts/instagram-wicker-park-retail";
import { whatDoesLocalMarketingAgencyDo } from "./posts/what-does-local-marketing-agency-do";
import { whyLocalSeoMattersChicago } from "./posts/why-local-seo-matters-chicago";
import { wickerParkVsBucktownMarketing } from "./posts/wicker-park-vs-bucktown-marketing";
import type { BlogHub, BlogPost } from "./types";

export type { BlogHub, BlogPost } from "./types";

export const blogHub: BlogHub = {
  eyebrow: "Blog",
  headline: "Local marketing guides for Chicago businesses",
  entityIntro:
    "Practical guides on Google Business Profile, local SEO, reviews, and social media for Wicker Park, Bucktown, and Chicago neighborhood small businesses — from the team at Division Street Digital.",
  subhead:
    "No jargon. Actionable tips you can use this week, whether you work with us or not.",
};

export const allBlogPosts: BlogPost[] = [
  googleBusinessProfileWickerPark,
  whyLocalSeoMattersChicago,
  howToGetMoreGoogleReviews,
  instagramWickerParkRetail,
  wickerParkVsBucktownMarketing,
  whatDoesLocalMarketingAgencyDo,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((p) => p.slug);
}
