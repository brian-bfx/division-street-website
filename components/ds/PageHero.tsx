import type { ImageSlot } from "@/content/images";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import {
  HeroEntrance,
  HeroEntranceItem,
} from "@/components/motion/HeroEntrance";
import { typography } from "@/lib/design-system/typography";
import { ResolvedMediaImage } from "./ResolvedMediaImage";

type BreadcrumbItem = { name: string; path: string };

type Cta = { label: string; href: string };

type PageHeroProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  intro?: string;
  image?: ImageSlot;
  imagePriority?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  ctas?: React.ReactNode;
  layout?: "stacked" | "split";
  align?: "center" | "left";
  className?: string;
};

export function PageHero({
  eyebrow,
  headline,
  subhead,
  intro,
  image,
  imagePriority = false,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  ctas,
  layout = "stacked",
  align = "center",
  className = "",
}: PageHeroProps) {
  const alignText =
    align === "center" ? "text-center" : "text-center lg:text-left";
  const alignCta =
    align === "center"
      ? "items-center justify-center"
      : "items-center justify-center lg:justify-start";

  const ctaBlock =
    ctas ??
    (primaryCta || secondaryCta ? (
      <div className={`mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6 ${alignCta}`}>
        {primaryCta && (
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
        )}
        {secondaryCta && (
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        )}
      </div>
    ) : null);

  const textBlock = (
    <HeroEntrance className={alignText}>
      {breadcrumbs && (
        <HeroEntranceItem>
          <Breadcrumbs
            items={breadcrumbs}
            className="!mb-4 justify-center lg:justify-start"
          />
        </HeroEntranceItem>
      )}
      {eyebrow && (
        <HeroEntranceItem>
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        </HeroEntranceItem>
      )}
      <HeroEntranceItem>
        <h1 className={typography.hero}>{headline}</h1>
      </HeroEntranceItem>
      {intro && (
        <HeroEntranceItem>
          <p className={`mt-8 max-w-prose ${typography.bodyLead}`}>{intro}</p>
        </HeroEntranceItem>
      )}
      {subhead && (
        <HeroEntranceItem>
          <p className={`mt-6 ${typography.subhead}`}>{subhead}</p>
        </HeroEntranceItem>
      )}
      {image && layout === "stacked" && (
        <HeroEntranceItem>
          <div className="mt-10">
            <ResolvedMediaImage
              {...image}
              pattern="hero"
              priority={imagePriority}
              className="w-full"
            />
          </div>
        </HeroEntranceItem>
      )}
      {ctaBlock && <HeroEntranceItem>{ctaBlock}</HeroEntranceItem>}
    </HeroEntrance>
  );

  if (layout === "split" && image) {
    return (
      <HeroEntrance
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${className}`}
      >
        <HeroEntranceItem className="order-2 lg:order-1">
          <div className={alignText}>
            {breadcrumbs && (
              <Breadcrumbs
                items={breadcrumbs}
                className="!mb-4 justify-center lg:justify-start"
              />
            )}
            {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
            <h1 className={typography.hero}>{headline}</h1>
            {intro && (
              <p className={`mt-8 max-w-prose ${typography.bodyLead}`}>
                {intro}
              </p>
            )}
            {subhead && (
              <p className={`mt-6 ${typography.subhead}`}>{subhead}</p>
            )}
            {ctaBlock}
          </div>
        </HeroEntranceItem>
        <HeroEntranceItem className="order-1 lg:order-2">
          <ResolvedMediaImage
            {...image}
            pattern="hero"
            priority={imagePriority}
            className="w-full"
          />
        </HeroEntranceItem>
      </HeroEntrance>
    );
  }

  return <div className={className}>{textBlock}</div>;
}
