import Image from "next/image";
import type { ImageSlot } from "@/content/images";
import {
  aspectClasses,
  imageSizes,
  type ImagePattern,
} from "@/lib/design-system/images";

type MediaImageProps = ImageSlot & {
  pattern?: ImagePattern;
  className?: string;
  priority?: boolean;
  rounded?: boolean;
};

function PlaceholderIcon() {
  return (
    <svg
      className="h-8 w-8 text-navy/20 sm:h-10 sm:w-10"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
      />
    </svg>
  );
}

export function MediaImage({
  label,
  hint,
  aspect,
  src,
  alt,
  pattern = "card",
  className = "",
  priority = false,
  rounded = true,
}: MediaImageProps) {
  const aspectClass = aspectClasses[aspect];
  const sizes = imageSizes[pattern];
  const radius = rounded ? "rounded-photo" : "rounded-none";

  if (src) {
    return (
      <div
        className={`relative overflow-hidden shadow-card ${radius} ${aspectClass} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center border border-dashed border-navy/15 bg-warm px-4 py-6 text-center shadow-card sm:px-6 sm:py-8 ${radius} ${aspectClass} ${className}`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <PlaceholderIcon />
      <p className="mt-3 font-display text-sm font-semibold text-navy">{label}</p>
      <p className="mt-2 hidden max-w-xs text-sm leading-relaxed text-navy/50 sm:block">
        {hint}
      </p>
    </div>
  );
}
