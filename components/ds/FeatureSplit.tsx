import type { ImageSlot } from "@/content/images";
import { ResolvedMediaImage } from "./ResolvedMediaImage";

type FeatureSplitProps = {
  image: ImageSlot;
  imagePattern?: "hero" | "card" | "inline" | "portrait";
  imagePosition?: "left" | "right";
  imagePriority?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FeatureSplit({
  image,
  imagePattern = "card",
  imagePosition = "right",
  imagePriority = false,
  children,
  className = "",
}: FeatureSplitProps) {
  const imageEl = (
    <ResolvedMediaImage
      {...image}
      pattern={imagePattern}
      priority={imagePriority}
      className="w-full"
    />
  );

  const textEl = <div className="text-center lg:text-left">{children}</div>;

  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${className}`}
    >
      {/* Mobile: image first */}
      <div
        className={
          imagePosition === "left"
            ? "order-1 lg:order-1"
            : "order-1 lg:order-2"
        }
      >
        {imageEl}
      </div>
      <div
        className={
          imagePosition === "left"
            ? "order-2 lg:order-2"
            : "order-2 lg:order-1"
        }
      >
        {textEl}
      </div>
    </div>
  );
}
