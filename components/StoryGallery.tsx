import type { ImageSlot } from "@/content/images";
import { MediaImage } from "@/components/ds/MediaImage";
import { Eyebrow } from "@/components/Eyebrow";

type StoryGalleryProps = {
  images: ImageSlot[];
};

export function StoryGallery({ images }: StoryGalleryProps) {
  if (!images.length) return null;

  return (
    <div className="mt-10 border-t border-navy/10 pt-10">
      <Eyebrow className="mb-6 block">Project visuals</Eyebrow>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((image) => (
          <MediaImage
            key={image.label}
            {...image}
            pattern="card"
            className="m-0"
          />
        ))}
      </div>
    </div>
  );
}
