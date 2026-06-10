import { AreaServiceCrossLinks } from "@/components/AreaServiceCrossLinks";
import { Button } from "@/components/Button";
import { CaseStudies } from "@/components/CaseStudies";
import { Eyebrow } from "@/components/Eyebrow";
import {
  BackgroundHero,
  FeatureSplit,
  SectionHeader,
} from "@/components/ds";
import { ExpertiseAccordion } from "@/components/ExpertiseAccordion";
import { Section } from "@/components/Section";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { buildExpertiseFromHome } from "@/lib/expertise";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Local Marketing for Wicker Park & Chicago Small Businesses",
  description: site.description,
  path: "/",
  keywords: [
    "Wicker Park marketing",
    "Chicago local marketing",
    "small business marketing Chicago",
  ],
});

export default async function HomePage() {
  const expertiseItems = await buildExpertiseFromHome(home.whatWeDo.items);

  return (
    <>
      <BackgroundHero
        headline={home.hero.headline}
        intro={home.hero.entityIntro}
        image={images.home.hero}
        imagePriority
        align="left"
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
      />

      <Section background="warm">
        <SectionHeader
          align="left"
          eyebrow={home.whatWeDo.eyebrow}
          headline="How we help neighborhood businesses grow"
        />
        <ExpertiseAccordion items={expertiseItems} defaultOpenIndex={0} />
      </Section>

      <Section>
        <FeatureSplit image={images.home.whoFor} imagePattern="card">
          <Eyebrow className="mb-4">{home.whoFor.eyebrow}</Eyebrow>
          <h2 className="text-display-section">{home.whoFor.headline}</h2>
          <p className="mt-8 text-base leading-relaxed text-navy/80 md:text-lg">
            {home.whoFor.body}
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            {home.whoFor.types.map((type) => (
              <li
                key={type}
                className="rounded-full border border-navy/10 bg-warm px-4 py-2 text-base text-navy"
              >
                {type}
              </li>
            ))}
          </ul>
        </FeatureSplit>
      </Section>

      <Section background="warm">
        <CaseStudies />
      </Section>

      <AreaServiceCrossLinks />

      <Section background="navy">
        <FeatureSplit
          image={images.home.closingCta}
          imagePattern="card"
          imagePosition="left"
        >
          <h2 className="text-display-section text-white">
            {home.closingCta.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            {home.closingCta.body}
          </p>
          <div className="mt-8">
            <Button href={home.closingCta.cta.href} variant="primary">
              {home.closingCta.cta.label}
            </Button>
          </div>
        </FeatureSplit>
      </Section>
    </>
  );
}
