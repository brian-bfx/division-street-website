import Link from "next/link";
import { ImageCard, PageHero } from "@/components/ds";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { allAreas, areasHub } from "@/content/areas";
import { getAreaImage, images } from "@/content/images";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Areas We Serve — Division Street Digital, Chicago",
  description: areasHub.entityIntro,
  path: "/areas",
  keywords: [
    "Wicker Park marketing",
    "Bucktown marketing",
    "Chicago neighborhood marketing",
  ],
});

export default function AreasPage() {
  return (
    <>
      <Section hero>
        <PageHero
          breadcrumbs={[{ name: "Areas", path: "/areas" }]}
          eyebrow={areasHub.eyebrow}
          headline={areasHub.headline}
          intro={areasHub.entityIntro}
          subhead={areasHub.subhead}
          image={images.areas.hub}
        />
      </Section>

      <Section background="pinstripe" className="!pt-0">
        <div className={layout.gridCards}>
          {allAreas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 80}>
              <Link
                href={`/areas/${area.slug}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
              >
                <ImageCard
                  image={getAreaImage(area.slug)}
                  interactive
                  flushImage
                >
                  <Eyebrow className="mb-2 block">{area.name}, Chicago</Eyebrow>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {area.headline}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy/70">
                    {area.metaDescription}
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
