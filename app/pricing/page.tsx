import { AddOnList } from "@/components/AddOnList";
import { Button } from "@/components/Button";
import { PageHero, SectionHeader } from "@/components/ds";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Eyebrow } from "@/components/Eyebrow";
import { addOns, diagnosticOffer, faqs, plans, pricingPage } from "@/content/pricing";
import { images } from "@/content/images";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Pricing — Local Marketing Plans for Chicago Small Businesses",
  description:
    "Month-to-month local marketing plans for Wicker Park and Chicago neighborhood businesses. Google Business Profile, local SEO, social media, and reviews.",
  path: "/pricing",
  keywords: ["Wicker Park marketing pricing", "Chicago local marketing plans"],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Section hero>
        <PageHero
          eyebrow={pricingPage.eyebrow}
          headline={pricingPage.headline}
          intro={pricingPage.entityIntro}
          subhead={pricingPage.subhead}
          image={images.pricing.hero}
        />
      </Section>

      <Section background="warm" spacing="compact" className="!pt-0">
        <Reveal>
          <div className="card mx-auto max-w-3xl border-brick">
            <Eyebrow className="mb-2 block">{pricingPage.diagnosticHeadline}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
              {diagnosticOffer.name}
            </h2>
            <p className="mt-2 font-display text-2xl font-semibold text-brick">
              {diagnosticOffer.price}
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/80">
              {diagnosticOffer.tagline}
            </p>
            <p className="mt-2 text-base text-navy/60">{pricingPage.diagnosticNote}</p>
            <ul className="mt-6 space-y-2 text-base text-navy/70">
              {diagnosticOffer.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-brick" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={diagnosticOffer.ctaHref} variant="primary">
                {diagnosticOffer.ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section background="pinstripe">
        <SectionHeader headline="Monthly plans" />
        <div className={layout.gridCardsLg}>
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          headline={pricingPage.addOnsHeadline}
          subhead={pricingPage.addOnsNote}
          align="left"
        />
        <AddOnList addOns={addOns} />
      </Section>

      <Section background="warm">
        <SectionHeader headline={pricingPage.faqHeadline} />
        <Reveal delay={80} className="mt-8">
          <FaqAccordion faqs={faqs} />
        </Reveal>
      </Section>

      <StickyMobileCta label="Request an Audit" href="/contact" />
    </>
  );
}
