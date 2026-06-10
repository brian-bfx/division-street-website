import type { Story } from "@/content/stories";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { parseQuoteAttribution, storyDisplayQuote } from "@/lib/stories";

type StorySectionsProps = {
  story: Story;
  quoteSize?: "card" | "detail";
};

export function StorySections({ story, quoteSize = "card" }: StorySectionsProps) {
  const quoteClass =
    quoteSize === "detail"
      ? "font-display text-2xl leading-snug text-navy"
      : "font-display text-xl leading-snug text-navy md:text-2xl";
  const quote = storyDisplayQuote(
    story,
    quoteSize === "detail" ? "full" : "short",
  );
  const { name } = parseQuoteAttribution(story.quoteAttribution, story.type);

  return (
    <>
      <div className="space-y-6 text-base leading-relaxed text-navy/80">
        {story.sections.map((section) => (
          <div key={section.eyebrow}>
            <Eyebrow className="mb-2 block">{section.eyebrow}</Eyebrow>
            <p>{section.body}</p>
          </div>
        ))}
      </div>

      <blockquote className="mt-8 border-l-4 border-brick pl-6">
        <p className={quoteClass}>&ldquo;{quote}&rdquo;</p>
        <footer className="mt-4 flex items-center gap-3">
          {story.headshot ? (
            <Image
              src={story.headshot.src}
              alt={story.headshot.alt ?? name}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-md object-cover"
            />
          ) : null}
          <cite className="text-base not-italic text-navy/60">
            — {story.quoteAttribution}
          </cite>
        </footer>
      </blockquote>
    </>
  );
}
