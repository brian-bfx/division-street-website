import { Suspense } from "react";
import { FormLayout, PageHero } from "@/components/ds";
import { SignupForm } from "@/components/forms/SignupForm";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Section } from "@/components/Section";
import { signupPage } from "@/content/forms";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: signupPage.headline,
  description: signupPage.subhead,
  path: "/signup",
});

function SignupFormFallback() {
  return (
    <div className="card animate-pulse space-y-6">
      <div className="h-12 rounded-button bg-warm" />
      <div className="h-12 rounded-button bg-warm" />
      <div className="h-12 rounded-button bg-warm" />
    </div>
  );
}

export default function SignupPage() {
  return (
    <>
      <Section hero tightBottom>
        <PageHero
          eyebrow={signupPage.eyebrow}
          headline={signupPage.headline}
          subhead={signupPage.subhead}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <FormLayout
          mobileImage={images.signup.hero}
          sidebarImage={images.signup.sidebar}
          footer={
            <>
              Prefer email?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-brick underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
            </>
          }
        >
          <Suspense fallback={<SignupFormFallback />}>
            <SignupForm />
          </Suspense>
        </FormLayout>
      </Section>

      <StickyMobileCta label="Questions? Contact Us" href="/contact" />
    </>
  );
}
