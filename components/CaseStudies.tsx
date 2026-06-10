import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/home";
import type { Story } from "@/content/stories";
import { typography } from "@/lib/design-system/typography";
import { getStoryBySlug, isPlaceholderStory } from "@/lib/stories";

const HOME_CASE_STUDY_SLUGS = [
  "vsg-contemporary",
  "enstrumental-brand",
] as const;

export async function CaseStudies() {
  const featuredStories = HOME_CASE_STUDY_SLUGS
    .map((slug) => getStoryBySlug(slug))
    .filter((story): story is Story => Boolean(story && !isPlaceholderStory(story)));

  return (
    <>
      <div className="mb-12 md:mb-16">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <h2 className={typography.section}>{home.socialProof.headline}</h2>
          <div className="flex min-w-[12rem] flex-1 items-center gap-3">
            <span className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-medium uppercase tracking-eyebrow text-navy/45 md:text-[0.8125rem]">
              <span
                className="inline-block h-2 w-2 shrink-0 bg-brick"
                aria-hidden
              />
              {home.socialProof.eyebrow}
            </span>
            <div className="h-px flex-1 bg-navy/10" aria-hidden />
          </div>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {featuredStories.map((story, index) => (
          <CaseStudyCard key={story.slug} story={story} index={index} />
        ))}
      </div>

      {home.socialProof.cta ? (
        <Reveal delay={160} className="mt-12 text-center">
          <Button href={home.socialProof.cta.href} variant="secondary">
            {home.socialProof.cta.label}
          </Button>
        </Reveal>
      ) : null}
    </>
  );
}
