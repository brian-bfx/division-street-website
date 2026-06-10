import type { ImageSlot } from "@/content/images";
import type { ImagePattern } from "@/lib/design-system/images";
import { ResolvedMediaImage } from "./ResolvedMediaImage";

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
      className={`overflow-hidden rounded-photo border border-navy/10 bg-white shadow-card ${interactiveClass} ${className}`}
    >
      <ResolvedMediaImage
        {...image}
        pattern={pattern}
        rounded={!flushImage}
        className={
          flushImage
            ? "rounded-none rounded-t-photo border-0 shadow-none"
            : "m-0"
        }
      />
      <div className="p-10 md:p-12">{children}</div>
    </article>
  );
}
