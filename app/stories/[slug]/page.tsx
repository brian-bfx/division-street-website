import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { PageHero, SectionHeader } from "@/components/ds";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { StoryGallery } from "@/components/StoryGallery";
import { StorySections } from "@/components/StorySections";
import { StoryServices } from "@/components/StoryServices";
import { storiesPage } from "@/content/stories";
import { createPageMetadata } from "@/lib/metadata";
import { storyArticleSchema } from "@/lib/schema";
import {
  getAllStorySlugs,
  getStoryBySlug,
  storyGallerySlots,
  storyHeroSlot,
  storyLocation,
  storyResult,
} from "@/lib/stories";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const story = getStoryBySlug(params.slug);
  if (!story) return {};

  return createPageMetadata({
    title: `${story.business} — Client Story (${story.neighborhood}, Chicago)`,
    description: `${story.type} in ${story.neighborhood}: ${storyResult(story)}`,
    path: `/stories/${story.slug}`,
    keywords: [
      `${story.neighborhood} marketing`,
      `${story.type} marketing Chicago`,
    ],
  });
}

export default function StoryDetailPage({ params }: Props) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  const gallery = storyGallerySlots(story);

  return (
    <>
      <JsonLd
        data={storyArticleSchema({
          business: story.business,
          type: story.type,
          neighborhood: story.neighborhood,
          quote: story.quote,
          quoteAttribution: story.quoteAttribution,
          path: `/stories/${story.slug}`,
        })}
      />

      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[
            { name: "Client Stories", path: "/stories" },
            { name: story.business, path: `/stories/${story.slug}` },
          ]}
          eyebrow={`${story.type} · ${storyLocation(story)}`}
          headline={story.business}
          image={storyHeroSlot(story)}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <div className="mx-auto max-w-prose text-base leading-relaxed text-navy/80">
          {story.services?.length ? (
            <div className="mb-8">
              <StoryServices services={story.services} />
            </div>
          ) : null}

          <StorySections story={story} quoteSize="detail" />

          <StoryGallery images={gallery} />
        </div>
      </Section>

      <Section>
        <SectionHeader headline={storiesPage.closingCta.headline} />
        <div className="mt-8 text-center">
          <Button href={storiesPage.closingCta.cta.href} variant="primary">
            {storiesPage.closingCta.cta.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
