import { AreaServiceCrossLinks } from "@/components/AreaServiceCrossLinks";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import {
  FeatureSplit,
  ImageCard,
  PageHero,
  SectionHeader,
} from "@/components/ds";
import { MediaImage } from "@/components/ds/MediaImage";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { plans } from "@/content/pricing";
import { site } from "@/content/site";
import { getSocialProofQuotes } from "@/lib/stories";
import { layout } from "@/lib/design-system/layout";
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

export default function HomePage() {
  const quotes = getSocialProofQuotes();

  return (
    <>
      <Section hero>
        <PageHero
          headline={home.hero.headline}
          intro={home.hero.entityIntro}
          subhead={home.hero.subhead}
          image={images.home.hero}
          imagePriority
          layout="split"
          align="left"
          primaryCta={home.hero.primaryCta}
          secondaryCta={home.hero.secondaryCta}
        />
      </Section>

      <Section background="warm">
        <SectionHeader headline={home.whatWeDo.eyebrow} />
        <div className={`${layout.gridCardsLg}`}>
          {home.whatWeDo.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <ImageCard image={images.home.whatWeDo[i]} imagePattern="card">
                <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy/70">
                  {item.body}
                </p>
              </ImageCard>
            </Reveal>
          ))}
        </div>
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
        <SectionHeader headline={home.socialProof.headline} />
        <div className={`${layout.gridCards}`}>
          {images.home.socialProof.map((img, i) => (
            <Reveal key={img.label} delay={i * 80}>
              <div className="card flex flex-col gap-8 sm:flex-row">
                <MediaImage
                  {...img}
                  pattern="portrait"
                  className="w-full shrink-0 sm:w-36"
                />
                <div className="flex flex-1 flex-col justify-center">
                  {quotes[i] ? (
                    <blockquote>
                      <p className="font-display text-lg leading-snug text-navy">
                        &ldquo;{quotes[i].quote}&rdquo;
                      </p>
                      <footer className="mt-4 text-base text-navy/60">
                        — {quotes[i].attribution}
                      </footer>
                    </blockquote>
                  ) : (
                    <p className="text-base italic leading-relaxed text-navy/50">
                      {home.socialProof.emptyNote}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="pinstripe">
        <SectionHeader
          eyebrow={home.pricingTeaser.eyebrow}
          headline={home.pricingTeaser.headline}
          subhead={home.pricingTeaser.note}
        />
        <div className={`${layout.gridCardsLg}`}>
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className={`card text-center transition-all duration-micro hover:-translate-y-0.5 hover:shadow-card-hover ${
                  plan.isPopular ? "border-brick" : ""
                }`}
              >
                {plan.isPopular && (
                  <Eyebrow className="mb-2 block">Most popular</Eyebrow>
                )}
                <h3 className="text-display-subsection">
                  {plan.name}
                </h3>
                <p className="mt-4 font-display text-type-section font-semibold text-navy font-tnum">
                  {plan.price}
                  <span className="text-base font-normal text-navy/60">
                    {plan.cadence}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240} className="mt-12 text-center">
          <Button href={home.pricingTeaser.cta.href} variant="secondary">
            {home.pricingTeaser.cta.label}
          </Button>
        </Reveal>
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
