import { Button } from "@/components/Button";
import { PageHero } from "@/components/ds";
import { Eyebrow } from "@/components/Eyebrow";
import { ExpertiseAccordion } from "@/components/ExpertiseAccordion";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/ds/SectionHeader";
import { allServices, featuredService, servicesHub } from "@/content/services";
import { images } from "@/content/images";
import { buildExpertiseFromServices } from "@/lib/expertise";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services — Local Marketing for Wicker Park & Chicago",
  description: servicesHub.entityIntro,
  path: "/services",
  keywords: [
    "Wicker Park marketing services",
    "Chicago local SEO",
    "Google Business Profile Chicago",
  ],
});

export default async function ServicesPage() {
  const expertiseItems = await buildExpertiseFromServices(allServices);

  return (
    <>
      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[{ name: "Services", path: "/services" }]}
          eyebrow={servicesHub.eyebrow}
          headline={servicesHub.headline}
          intro={servicesHub.entityIntro}
          subhead={servicesHub.subhead}
          image={images.services.hub}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <Reveal>
          <div className="card mx-auto max-w-3xl border-brick text-center">
            <Eyebrow className="mb-2 block">{featuredService.title}</Eyebrow>
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
              {featuredService.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-navy/70">
              {featuredService.description}
            </p>
            <div className="mt-6">
              <Button href={`/services/${featuredService.slug}`} variant="primary">
                {featuredService.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section background="warm" className="!pt-0">
        <SectionHeader
          align="left"
          eyebrow="Our expertise"
          headline="Everything we build for local businesses"
          subhead="The deliverables we handle for each service — from Google visibility to websites that convert."
        />
        <ExpertiseAccordion items={expertiseItems} expandAll />
      </Section>
    </>
  );
}
