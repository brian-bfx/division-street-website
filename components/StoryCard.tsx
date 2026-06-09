import Link from "next/link";
import type { Story } from "@/content/stories";
import { ImageCard } from "@/components/ds/ImageCard";
import { isPlaceholderStory, storyCardImageSlot } from "@/lib/stories";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { StorySections } from "./StorySections";
import { StoryServices } from "./StoryServices";

type StoryCardProps = {
  story: Story;
  index: number;
};

export function StoryCard({ story, index }: StoryCardProps) {
  const isPlaceholder = isPlaceholderStory(story);

  const card = (
    <ImageCard
      image={storyCardImageSlot(story)}
      flushImage
      interactive={!isPlaceholder}
      className={isPlaceholder ? "border-dashed opacity-60" : ""}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          {story.business}
        </h2>
        <Eyebrow>
          {story.type} · {story.neighborhood}
        </Eyebrow>
      </div>

      {story.services?.length ? (
        <div className="mt-4">
          <StoryServices services={story.services} />
        </div>
      ) : null}

      <div className="mt-6">
        <StorySections story={story} />
      </div>

      {!isPlaceholder && (
        <p className="mt-6 text-base font-medium text-brick">
          Read full story →
        </p>
      )}
    </ImageCard>
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
