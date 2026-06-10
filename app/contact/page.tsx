import { FormLayout, PageHero } from "@/components/ds";
import { ContactForm } from "@/components/forms/ContactForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Section } from "@/components/Section";
import { contactPage } from "@/content/forms";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: contactPage.headline,
  description: contactPage.subhead,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section hero tightBottom>
        <PageHero
          eyebrow={contactPage.eyebrow}
          headline={contactPage.headline}
          subhead={contactPage.subhead}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <FormLayout
          mobileImage={images.contact.hero}
          sidebarImage={images.contact.sidebar}
          footer={
            <>
              Or email us directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-brick underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
            </>
          }
        >
          <ContactForm />
        </FormLayout>
      </Section>

      <StickyMobileCta label="Schedule a Review" href="/contact" />
    </>
  );
}
