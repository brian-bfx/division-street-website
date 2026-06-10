import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { FeatureSplit, PageHero, SectionHeader } from "@/components/ds";
import { ResolvedMediaImage } from "@/components/ds/ResolvedMediaImage";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { aboutPage } from "@/content/about";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About — Division Street Digital, Chicago Local Marketing Agency",
  description: aboutPage.entityIntro,
  path: "/about",
  keywords: [
    "Wicker Park marketing agency",
    "Chicago local marketing",
    "small business marketing Chicago",
  ],
});

export default function AboutPage() {
  return (
    <>
      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[{ name: "About", path: "/about" }]}
          eyebrow={aboutPage.eyebrow}
          headline={aboutPage.headline}
          intro={aboutPage.entityIntro}
          subhead={aboutPage.subhead}
          image={images.about.hero}
        />
      </Section>

      <Section background="warm">
        <FeatureSplit
          image={images.about.founder}
          imagePattern="portrait"
          imagePosition="left"
        >
          <Eyebrow className="mb-4">Founder</Eyebrow>
          <h2 className="text-display-section">{aboutPage.founder.name}</h2>
          <p className="mt-2 text-base text-navy/60">{aboutPage.founder.role}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {aboutPage.founder.credentials.map((credential) => (
              <li
                key={credential}
                className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm text-navy/80"
              >
                {credential}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-navy/80 md:text-lg">
            {aboutPage.founder.whyStarted}
          </p>
          <p className="mt-6 text-base leading-relaxed text-navy/80">
            {aboutPage.founder.bio}
          </p>
        </FeatureSplit>
      </Section>

      <Section>
        <div className="mx-auto max-w-prose lg:max-w-none">
          <Eyebrow className="mb-4">Our home</Eyebrow>
          <h2 className="text-display-section text-center md:text-left">
            {aboutPage.whyNeighborhood.headline}
          </h2>
          <p className="mt-6 text-center text-base leading-relaxed text-navy/80 md:text-left">
            {aboutPage.whyNeighborhood.body}
          </p>
          <p className="mt-6 text-center text-base leading-relaxed text-navy/70 md:text-left">
            {site.neighborhoodLine}
          </p>
        </div>
      </Section>

      <Section background="warm">
        <SectionHeader
          headline={aboutPage.whoFor.headline}
          subhead={aboutPage.whoFor.body}
        />
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {aboutPage.whoFor.types.map((type) => (
            <li
              key={type}
              className="rounded-full border border-navy/10 bg-white px-4 py-2 text-base text-navy"
            >
              {type}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader headline={aboutPage.process.headline} />
        <div>
          <ResolvedMediaImage
            {...images.about.process}
            pattern="card"
            className="mx-auto mb-14 max-w-2xl md:mb-16"
          />
        </div>
        <div className={layout.gridCardsLg}>
          {aboutPage.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="card text-center md:text-left">
                <Eyebrow className="mb-2 block">Step {i + 1}</Eyebrow>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          headline={aboutPage.cta.headline}
          subhead={aboutPage.cta.body}
        />
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Button href={aboutPage.cta.primary.href} variant="primary">
            {aboutPage.cta.primary.label}
          </Button>
          <Button href={aboutPage.cta.secondary.href} variant="secondary">
            {aboutPage.cta.secondary.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
