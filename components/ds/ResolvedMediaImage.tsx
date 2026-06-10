import type { ImageSlot } from "@/content/images";
import type { ImagePattern } from "@/lib/design-system/images";
import { resolveImage } from "@/lib/pexels";
import { MediaImage } from "./MediaImage";

type ResolvedMediaImageProps = ImageSlot & {
  pattern?: ImagePattern;
  className?: string;
  priority?: boolean;
  rounded?: boolean;
};

export async function ResolvedMediaImage(props: ResolvedMediaImageProps) {
  const { pattern, className, priority, rounded, ...slot } = props;
  const resolved = await resolveImage(slot);

  return (
    <MediaImage
      {...slot}
      src={resolved.src}
      pattern={pattern}
      className={className}
      priority={priority}
      rounded={rounded}
    />
  );
}
