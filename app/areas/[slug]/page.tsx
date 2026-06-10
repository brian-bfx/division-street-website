import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { PageHero, SectionHeader } from "@/components/ds";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { getAllAreaSlugs, getAreaBySlug } from "@/content/areas";
import { getAreaImage } from "@/content/images";
import { getServiceBySlug } from "@/content/services";
import { getStoryBySlug, storyResult } from "@/lib/stories";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const area = getAreaBySlug(params.slug);
  if (!area) return {};

  return createPageMetadata({
    title: area.headline,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
    keywords: [
      `${area.name} marketing`,
      `${area.name} Chicago small business marketing`,
      "local marketing Chicago",
    ],
  });
}

export default function AreaDetailPage({ params }: Props) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();

  const featuredStory = area.featuredStorySlug
    ? getStoryBySlug(area.featuredStorySlug)
    : undefined;

  const relatedLinks = [
    ...area.serviceSlugs
      .map((slug) => getServiceBySlug(slug))
      .filter(Boolean)
      .map((service) => ({
        label: service!.title,
        href: `/services/${service!.slug}`,
        description: service!.metaDescription.slice(0, 90) + "…",
      })),
    ...(featuredStory
      ? [
          {
            label: `Client story: ${featuredStory.business}`,
            href: `/stories/${featuredStory.slug}`,
            description: storyResult(featuredStory).slice(0, 90) + "…",
          },
        ]
      : []),
    { label: "See pricing plans", href: "/pricing" },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(area.faqs)} />

      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[
            { name: "Areas", path: "/areas" },
            { name: area.name, path: `/areas/${area.slug}` },
          ]}
          eyebrow={`${area.name}, Chicago`}
          headline={area.headline}
          intro={area.entityIntro}
          image={getAreaImage(area.slug)}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <div className="mx-auto max-w-prose space-y-6 text-base leading-relaxed text-navy/80">
          <p>{area.context}</p>
          <p>{area.landmarks}</p>
        </div>

        <Reveal className={layout.sectionContent}>
          <SectionHeader headline={`Businesses we help in ${area.name}`} />
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {area.businessTypes.map((type) => (
              <li
                key={type}
                className="rounded-full border border-navy/10 bg-white px-4 py-2 text-base text-navy"
              >
                {type}
              </li>
            ))}
          </ul>
        </Reveal>

        {featuredStory && (
          <Reveal delay={80} className="mx-auto mt-16 max-w-prose">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange">
                Featured client story
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy">
                {featuredStory.business}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/70">
                {storyResult(featuredStory)}
              </p>
              <Link
                href={`/stories/${featuredStory.slug}`}
                className="mt-4 inline-block text-base font-medium text-brick hover:text-navy"
              >
                Read full story →
              </Link>
            </div>
          </Reveal>
        )}

        <div className="mx-auto mt-16 max-w-prose">
          <RelatedLinks
            headline={`Services for ${area.name} businesses`}
            links={relatedLinks}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader headline="Common questions" />
        <Reveal delay={80} className="mt-8">
          <FaqAccordion faqs={area.faqs} />
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
