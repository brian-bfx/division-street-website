import Link from "next/link";
import { Button } from "@/components/Button";
import { ImageCard, PageHero } from "@/components/ds";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { allServices, featuredService, servicesHub } from "@/content/services";
import { images, getServiceImage } from "@/content/images";
import { layout } from "@/lib/design-system/layout";
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

export default function ServicesPage() {
  return (
    <>
      <Section hero>
        <PageHero
          breadcrumbs={[{ name: "Services", path: "/services" }]}
          eyebrow={servicesHub.eyebrow}
          headline={servicesHub.headline}
          intro={servicesHub.entityIntro}
          subhead={servicesHub.subhead}
          image={images.services.hub}
        />
      </Section>

      <Section background="warm" spacing="compact" className="!pt-0">
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

      <Section background="pinstripe" className="!pt-0">
        <div className={layout.gridCards}>
          {allServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <Link
                href={`/services/${service.slug}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
              >
                <ImageCard
                  image={getServiceImage(service.slug)}
                  interactive
                  flushImage
                >
                  <Eyebrow className="mb-2 block">{service.title}</Eyebrow>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {service.headline}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy/70">
                    {service.metaDescription}
                  </p>
                  <p className="mt-4 text-base font-medium text-brick">
                    Learn more →
                  </p>
                </ImageCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
