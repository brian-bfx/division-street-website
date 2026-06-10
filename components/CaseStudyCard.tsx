import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/content/stories";
import { imageSizes } from "@/lib/design-system/images";
import { resolveImage } from "@/lib/pexels/resolve";
import {
  formatCaseNumber,
  isPlaceholderStory,
  parseQuoteAttribution,
  storyCardImageSlot,
} from "@/lib/stories";
import { Reveal } from "./Reveal";

type CaseStudyCardProps = {
  story: Story;
  index: number;
};

function businessInitial(business: string): string {
  const letter = business.replace(/[^a-zA-Z]/g, "").charAt(0);
  return letter ? letter.toUpperCase() : "?";
}

function AuthorAvatar({
  name,
  headshot,
}: {
  name: string;
  headshot?: { src: string; alt?: string };
}) {
  if (headshot) {
    return (
      <Image
        src={headshot.src}
        alt={headshot.alt ?? name}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-md object-cover"
      />
    );
  }

  const initial = name.replace(/[^a-zA-Z]/g, "").charAt(0).toUpperCase() || "?";

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy/8 font-display text-sm font-semibold text-navy/70"
      aria-hidden
    >
      {initial}
    </div>
  );
}

export async function CaseStudyCard({ story, index }: CaseStudyCardProps) {
  const isPlaceholder = isPlaceholderStory(story);
  const imageSlot = storyCardImageSlot(story);
  const resolved = await resolveImage({ ...imageSlot, aspect: "square" });
  const imageSrc = resolved.src ?? imageSlot.src;
  const { name, title } = parseQuoteAttribution(story.quoteAttribution, story.type);
  const caseNumber = formatCaseNumber(index);

  const card = (
    <article
      className={`overflow-hidden rounded-card-lg border border-navy/10 bg-white shadow-card transition-all duration-micro ${
        isPlaceholder
          ? "border-dashed opacity-60"
          : "hover:-translate-y-0.5 hover:shadow-card-hover"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brick/15 font-display text-xs font-semibold text-brick"
            aria-hidden
          >
            {businessInitial(story.business)}
          </div>
          <p className="truncate font-display text-lg font-semibold text-navy md:text-xl">
            {story.business}
          </p>
        </div>
        <p className="shrink-0 text-xs font-medium uppercase tracking-eyebrow text-navy/45 md:text-[0.8125rem]">
          CASE ({caseNumber})
        </p>
      </div>

      <div className="border-t border-navy/10" aria-hidden />

      <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="relative aspect-square lg:aspect-auto lg:min-h-[280px]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageSlot.alt ?? story.business}
              fill
              className="object-cover"
              sizes={imageSizes.card}
            />
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center bg-warm" aria-hidden />
          )}
        </div>

        <div className="grid border-t border-navy/10 lg:border-l lg:border-t-0 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-8 border-b border-navy/10 p-6 md:border-b-0 md:border-r md:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold leading-snug text-navy md:text-2xl">
                {story.card.headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-navy/65 md:text-[1.0625rem]">
                {story.card.outcome}
              </p>
            </div>
            {!isPlaceholder && (
              <p className="text-base font-medium text-brick">Learn more</p>
            )}
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
            <p className="text-base leading-relaxed text-navy/75 md:text-[1.0625rem]">
              {story.card.summary}
            </p>
            <div className="flex items-center gap-3">
              <AuthorAvatar name={name} headshot={story.headshot} />
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-navy">{name}</p>
                {title ? (
                  <p className="mt-0.5 text-sm text-navy/60">{title}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <Reveal delay={(index % 3) * 80}>
      {isPlaceholder ? (
        card
      ) : (
        <Link
          href={`/stories/${story.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
        >
          {card}
        </Link>
      )}
    </Reveal>
  );
}
