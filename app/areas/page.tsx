import { PageHero } from "@/components/ds";
import { AreaIndexList } from "@/components/AreaIndexList";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { allAreas, areasHub } from "@/content/areas";
import { images } from "@/content/images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Areas We Serve — Division Street Digital, Chicago",
  description: areasHub.entityIntro,
  path: "/areas",
  keywords: [
    "Wicker Park marketing",
    "Bucktown marketing",
    "Chicago neighborhood marketing",
    "Lincoln Park marketing",
    "Lakeview marketing",
  ],
});

export default function AreasPage() {
  return (
    <>
      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[{ name: "Areas", path: "/areas" }]}
          eyebrow={areasHub.eyebrow}
          headline={areasHub.headline}
          intro={areasHub.entityIntro}
          subhead={areasHub.subhead}
          image={images.areas.hub}
        />
      </Section>

      <Section spacing="intro">
        <Reveal>
          <AreaIndexList areas={allAreas} />
        </Reveal>
      </Section>
    </>
  );
}
