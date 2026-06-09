import type { ImageAspect, ImageSlot } from "@/content/images";
import { MediaImage } from "@/components/ds/MediaImage";
import type { ImagePattern } from "@/lib/design-system/images";

type ImagePlaceholderProps = ImageSlot & {
  className?: string;
  priority?: boolean;
};

const aspectToPattern: Record<ImageAspect, ImagePattern> = {
  hero: "hero",
  card: "card",
  square: "card",
  portrait: "portrait",
};

/** @deprecated Prefer MediaImage from @/components/ds */
export function ImagePlaceholder({
  aspect,
  className = "",
  priority = false,
  ...slot
}: ImagePlaceholderProps) {
  return (
    <MediaImage
      {...slot}
      aspect={aspect}
      pattern={aspectToPattern[aspect]}
      className={className}
      priority={priority}
    />
  );
}
