import { PageHero, SectionHeader } from "@/components/ds";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { privacyPage } from "@/content/privacy";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: privacyPage.headline,
  description: privacyPage.intro,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Section hero spacing="compact" tightBottom>
        <PageHero
          eyebrow={privacyPage.eyebrow}
          headline={privacyPage.headline}
          intro={privacyPage.intro}
          align="left"
        />
      </Section>

      <Section background="warm" spacing="intro">
        <div className="mx-auto max-w-prose space-y-8">
          {privacyPage.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 80}>
              <div className="card">
                <h2 className="font-display text-xl font-bold text-navy md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy/80">
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
