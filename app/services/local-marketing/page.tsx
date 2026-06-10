import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import {
  FeatureSplit,
  PageHero,
  SectionHeader,
} from "@/components/ds";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { images } from "@/content/images";
import { localMarketing } from "@/content/local-marketing";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: localMarketing.meta.title,
  description: localMarketing.meta.description,
  path: "/services/local-marketing",
  keywords: [
    "local marketing Chicago",
    "local marketing small business",
    "Wicker Park marketing",
    "local demand engine",
    "local visibility audit",
  ],
});

export default function LocalMarketingPage() {
  const { meta, hero, problem, whatWeDo, whoFor, howItWorks, pillars, corePromise, offers, faqs } =
    localMarketing;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: meta.title,
            description: meta.description,
            path: "/services/local-marketing",
          }),
          faqPageSchema(faqs),
        ]}
      />

      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[
            { name: "Services", path: "/services" },
            { name: "Local Marketing", path: "/services/local-marketing" },
          ]}
          eyebrow="Local Marketing"
          headline={meta.headline}
          intro={hero.subheadline}
          image={images.services.localMarketing}
          imagePriority
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <FeatureSplit image={images.services.problem} imagePattern="card">
          <h2 className="text-display-section">{problem.headline}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-navy/80">
            {problem.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </FeatureSplit>
      </Section>

      <Section id={whatWeDo.id}>
        <SectionHeader
          eyebrow="What we do"
          headline={whatWeDo.headline}
          subhead={whatWeDo.intro}
        />
        <ul className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 md:gap-8">
          {whatWeDo.services.map((service, i) => (
            <Reveal key={service} delay={i * 60}>
              <li className="card text-base leading-relaxed text-navy/80">
                {service}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section background="warm">
        <SectionHeader
          eyebrow="Who it's for"
          headline={whoFor.headline}
          subhead={whoFor.intro}
        />
        <ul className="flex flex-wrap justify-center gap-3">
          {whoFor.categories.map((cat, i) => (
            <Reveal key={cat} delay={i * 40}>
              <li className="rounded-full border border-navy/10 bg-white px-4 py-2 text-base text-navy">
                {cat}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section background="pinstripe">
        <SectionHeader headline={howItWorks.headline} />
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="card h-full">
                <span className="font-display text-sm font-bold text-brick">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="warm">
        <SectionHeader headline={pillars.headline} />
        <div className={layout.gridCardsLg}>
          {pillars.items.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60}>
              <div className="card h-full">
                <h3 className="font-display text-xl font-semibold text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy/70">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          headline={corePromise.headline}
          subhead={corePromise.body}
        />
      </Section>

      <Section background="warm" id="offers">
        <SectionHeader
          eyebrow="Offers"
          headline={offers.headline}
          subhead={offers.intro}
        />
        <div className={`${layout.gridCards} lg:grid-cols-2`}>
          {offers.items.map((offer, i) => (
            <Reveal key={offer.name} delay={i * 80}>
              <div
                className={`card flex h-full flex-col ${
                  offer.featured ? "border-brick" : ""
                }`}
              >
                {offer.featured && (
                  <Eyebrow className="mb-2 block">Start here</Eyebrow>
                )}
                <h3 className="font-display text-2xl font-bold text-navy">
                  {offer.name}
                </h3>
                <p className="mt-2 font-display text-xl font-semibold text-brick">
                  {offer.price}
                </p>
                <p className="mt-4 text-base leading-relaxed text-navy/80">
                  {offer.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-base text-navy/70">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brick" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={offer.cta.href}
                    variant={offer.featured ? "primary" : "secondary"}
                  >
                    {offer.cta.label}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader headline="Common questions" />
        <Reveal delay={80} className="mt-8">
          <FaqAccordion faqs={faqs} />
        </Reveal>
        <Reveal delay={160} className="mt-12 text-center">
          <Button href="/contact" variant="primary">
            Schedule a Local Marketing Review
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
