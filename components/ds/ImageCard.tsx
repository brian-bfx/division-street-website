import type { ImageSlot } from "@/content/images";
import type { ImagePattern } from "@/lib/design-system/images";
import { MediaImage } from "./MediaImage";

type ImageCardProps = {
  image: ImageSlot;
  imagePattern?: ImagePattern | "square";
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  flushImage?: boolean;
};

export function ImageCard({
  image,
  imagePattern = "card",
  children,
  className = "",
  interactive = false,
  flushImage = false,
}: ImageCardProps) {
  const pattern: ImagePattern =
    imagePattern === "square" ? "card" : (imagePattern ?? "card");

  const interactiveClass = interactive
    ? "transition-all duration-micro hover:-translate-y-0.5 hover:shadow-card-hover"
    : "";

  return (
    <article
      className={`overflow-hidden rounded-card-lg border border-navy/10 bg-white shadow-card ${interactiveClass} ${className}`}
    >
      <MediaImage
        {...image}
        pattern={pattern}
        rounded={!flushImage}
        className={
          flushImage
            ? "rounded-none rounded-t-card-lg border-0 shadow-none"
            : "m-0"
        }
      />
      <div className="p-8 md:p-10">{children}</div>
    </article>
  );
}
