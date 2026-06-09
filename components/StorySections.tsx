import type { Story } from "@/content/stories";
import { Eyebrow } from "@/components/Eyebrow";

type StorySectionsProps = {
  story: Story;
  quoteSize?: "card" | "detail";
};

export function StorySections({ story, quoteSize = "card" }: StorySectionsProps) {
  const quoteClass =
    quoteSize === "detail"
      ? "font-display text-2xl leading-snug text-navy"
      : "font-display text-xl leading-snug text-navy md:text-2xl";

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
        <p className={quoteClass}>&ldquo;{story.quote}&rdquo;</p>
        <footer className="mt-2 text-base text-navy/60">
          — {story.quoteAttribution}
        </footer>
      </blockquote>
    </>
  );
}
