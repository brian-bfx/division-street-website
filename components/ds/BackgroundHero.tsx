import Image from "next/image";
import type { ImageSlot } from "@/content/images";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import {
  HeroEntrance,
  HeroEntranceItem,
} from "@/components/motion/HeroEntrance";
import { layout } from "@/lib/design-system/layout";
import { resolveImage } from "@/lib/pexels";

type Cta = { label: string; href: string };

type BackgroundHeroProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  intro?: string;
  image: ImageSlot;
  imagePriority?: boolean;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  align?: "center" | "left";
  className?: string;
};

export async function BackgroundHero({
  eyebrow,
  headline,
  subhead,
  intro,
  image,
  imagePriority = false,
  primaryCta,
  secondaryCta,
  align = "left",
  className = "",
}: BackgroundHeroProps) {
  const resolved = await resolveImage(image);
  const alignText =
    align === "center" ? "text-center" : "text-center lg:text-left";
  const alignCta =
    align === "center"
      ? "items-center justify-center"
      : "items-center justify-center lg:justify-start";
  const contentWidth =
    align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl lg:mx-0";

  const ctaBlock =
    primaryCta || secondaryCta ? (
      <div className={`mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6 ${alignCta}`}>
        {primaryCta && (
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
        )}
        {secondaryCta && (
          <Button
            href={secondaryCta.href}
            variant="secondary"
            className="border-white text-white hover:bg-white hover:text-navy focus-visible:ring-white"
          >
            {secondaryCta.label}
          </Button>
        )}
      </div>
    ) : null;

  return (
    <section
      className={`relative isolate min-h-[28rem] overflow-hidden py-28 md:min-h-[32rem] md:py-36 lg:min-h-[36rem] lg:py-44 ${className}`}
    >
      {resolved.src ? (
        <Image
          src={resolved.src}
          alt={image.alt ?? image.label}
          fill
          className="object-cover"
          sizes="100vw"
          priority={imagePriority}
        />
      ) : (
        <div className="absolute inset-0 bg-navy" aria-hidden="true" />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50"
        aria-hidden="true"
      />

      <div className={`relative z-10 ${layout.containerSafe}`}>
        <HeroEntrance className={`${alignText} ${contentWidth}`}>
          {eyebrow && (
            <HeroEntranceItem>
              <Eyebrow className="mb-5 text-orange">{eyebrow}</Eyebrow>
            </HeroEntranceItem>
          )}
          <HeroEntranceItem>
            <h1 className="font-display text-type-hero font-semibold text-white">
              {headline}
            </h1>
          </HeroEntranceItem>
          {intro && (
            <HeroEntranceItem>
              <p className="mt-8 max-w-prose text-base leading-[1.6] text-white/85 md:text-[1.125rem]">
                {intro}
              </p>
            </HeroEntranceItem>
          )}
          {subhead && (
            <HeroEntranceItem>
              <p className="mt-6 text-lg leading-[1.6] text-white/75 md:text-xl">
                {subhead}
              </p>
            </HeroEntranceItem>
          )}
          {ctaBlock && <HeroEntranceItem>{ctaBlock}</HeroEntranceItem>}
        </HeroEntrance>
      </div>
    </section>
  );
}
