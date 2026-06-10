import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { PageHero, SectionHeader } from "@/components/ds";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { getAreaBySlug } from "@/content/areas";
import { getBlogPostBySlug } from "@/content/blog";
import { getServiceImage } from "@/content/images";
import { getAllServiceSlugs, getServiceBySlug } from "@/content/services";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.headline,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.title} Wicker Park`,
      `${service.title} Chicago`,
      "local marketing Chicago",
    ],
  });
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedLinks = [
    ...service.relatedAreaSlugs
      .map((slug) => getAreaBySlug(slug))
      .filter(Boolean)
      .map((area) => ({
        label: `Marketing in ${area!.name}`,
        href: `/areas/${area!.slug}`,
        description: area!.metaDescription.slice(0, 100) + "…",
      })),
    ...service.relatedBlogSlugs
      .map((slug) => getBlogPostBySlug(slug))
      .filter(Boolean)
      .map((post) => ({
        label: post!.title,
        href: `/blog/${post!.slug}`,
        description: post!.excerpt,
      })),
    { label: "See pricing plans", href: "/pricing" },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          faqPageSchema(service.faqs),
        ]}
      />

      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]}
          eyebrow={service.title}
          headline={service.headline}
          intro={service.entityIntro}
          image={getServiceImage(service.slug)}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <div className="mx-auto max-w-prose space-y-6 text-base leading-relaxed text-navy/80">
          {service.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <div className={`${layout.sectionContent} ${layout.gridCards}`}>
          {service.benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div className="card">
                <h2 className="font-display text-xl font-semibold text-navy">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-navy/70">
                  {benefit.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={`mx-auto max-w-prose ${layout.sectionContent}`}>
          <RelatedLinks links={relatedLinks} />
        </div>
      </Section>

      <Section>
        <SectionHeader headline="Common questions" />
        <Reveal delay={80} className="mt-8">
          <FaqAccordion faqs={service.faqs} />
        </Reveal>
        <Reveal delay={160} className="mt-12 text-center">
          <Button href="/pricing" variant="primary">
            See pricing
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
