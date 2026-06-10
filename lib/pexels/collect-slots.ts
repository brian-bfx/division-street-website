import type { ImageSlot } from "@/content/images";
import { images } from "@/content/images";
import { stories } from "@/content/stories";

export type LabeledImageSlot = ImageSlot & {
  id: string;
  source: string;
};

function isImageSlot(value: unknown): value is ImageSlot {
  return (
    typeof value === "object" &&
    value !== null &&
    "label" in value &&
    "hint" in value &&
    "aspect" in value
  );
}

function walkImages(
  value: unknown,
  pathParts: string[],
  results: LabeledImageSlot[],
) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      if (isImageSlot(item)) {
        results.push({
          ...item,
          id: [...pathParts, String(index)].join("."),
          source: "content/images",
        });
      }
    });
    return;
  }

  if (!value || typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (isImageSlot(child)) {
      results.push({
        ...child,
        id: [...pathParts, key].join("."),
        source: "content/images",
      });
      continue;
    }

    walkImages(child, [...pathParts, key], results);
  }
}

export function getAllImageSlots(): LabeledImageSlot[] {
  const slots: LabeledImageSlot[] = [];
  walkImages(images, ["images"], slots);

  for (const story of stories) {
    slots.push({
      id: `stories.${story.slug}.hero`,
      label: story.hero.label,
      hint: story.hero.hint,
      aspect: "card",
      src: story.hero.src,
      alt: `${story.business} — ${story.type}`,
      source: "content/stories",
    });

    story.gallery?.forEach((image, index) => {
      slots.push({
        id: `stories.${story.slug}.gallery.${index}`,
        label: image.label,
        hint: image.hint,
        aspect: image.aspect ?? "card",
        src: image.src,
        alt: `${story.business} — ${image.label}`,
        source: "content/stories",
      });
    });
  }

  return slots;
}
