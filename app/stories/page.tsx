import { Button } from "@/components/Button";
import { PageHero, SectionHeader } from "@/components/ds";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { images } from "@/content/images";
import { stories, storiesPage } from "@/content/stories";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Client Stories — Wicker Park & Chicago Small Businesses",
  description: storiesPage.entityIntro,
  path: "/stories",
  keywords: ["Wicker Park marketing case studies", "Chicago small business marketing"],
});

export default function StoriesPage() {
  return (
    <>
      <Section hero tightBottom>
        <PageHero
          eyebrow={storiesPage.eyebrow}
          headline={storiesPage.headline}
          intro={storiesPage.entityIntro}
          subhead={storiesPage.subhead}
          image={images.stories.hero}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <div className="space-y-8 md:space-y-12">
          {stories.map((story, index) => (
            <CaseStudyCard key={story.slug} story={story} index={index} />
          ))}
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
