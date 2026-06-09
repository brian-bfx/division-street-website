import type { ImageSlot } from "@/content/images";
import { stories, type Story, type StoryImage } from "@/content/stories";

/** Placeholder entries use bracket markers — hide until replaced with real stories. */
export function isPlaceholderStory(story: Story): boolean {
  return (
    story.business.startsWith("[") ||
    story.quote.startsWith("[") ||
    story.quote.includes("[short")
  );
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return stories.map((s) => s.slug);
}

export function getSocialProofQuotes() {
  return stories
    .filter((s) => !isPlaceholderStory(s))
    .slice(0, 2)
    .map((s) => ({
      quote: s.quote,
      attribution: s.quoteAttribution,
      business: s.business,
    }));
}

export function storyLocation(story: Story): string {
  if (story.neighborhood === "Chicago") return "Chicago";
  return `${story.neighborhood}, Chicago`;
}

export function storyImageSlot(
  image: StoryImage,
  aspect: ImageSlot["aspect"],
  alt: string,
): ImageSlot {
  return {
    label: image.label,
    hint: image.hint,
    aspect: image.aspect ?? aspect,
    src: image.src,
    alt,
  };
}

export function storyHeroSlot(story: Story): ImageSlot {
  return storyImageSlot(
    story.hero,
    "hero",
    `${story.business} — ${story.type} in ${storyLocation(story)}`,
  );
}

export function storyCardImageSlot(story: Story): ImageSlot {
  return storyImageSlot(
    story.hero,
    "card",
    `${story.business} — ${story.type} in ${storyLocation(story)}`,
  );
}

export function storyGallerySlots(story: Story): ImageSlot[] {
  if (!story.gallery?.length) return [];

  return story.gallery.map((image) =>
    storyImageSlot(
      image,
      image.aspect ?? "card",
      `${story.business} — ${image.label}`,
    ),
  );
}

/** Pulls the results section when present, otherwise the last section body. */
export function storyResult(story: Story): string {
  const resultSection = story.sections.find(
    (section) => section.eyebrow.toLowerCase() === "the result",
  );
  return resultSection?.body ?? story.sections.at(-1)?.body ?? "";
}
