import { site } from "@/content/site";

export const businessTypes = [
  "Coffee",
  "Retail",
  "Pet",
  "Food & dining",
  "Fitness",
  "Services",
  "Other",
] as const;

export const planOptions = [
  "Presence",
  "Presence + Social",
  "Growth",
  "Not sure",
] as const;

/** URL slugs for /signup?plan= — must match plan names from pricing.ts */
export const planSlugs: Record<string, string> = {
  Presence: "presence",
  "Presence + Social": "presence-social",
  Growth: "growth",
  "Not sure": "not-sure",
};

export const planSlugToName: Record<string, (typeof planOptions)[number]> = {
  presence: "Presence",
  "presence-social": "Presence + Social",
  growth: "Growth",
  "not-sure": "Not sure",
};

export function getSignupHref(planName: string): string {
  const slug = planSlugs[planName];
  return slug ? `/signup?plan=${slug}` : "/signup";
}

export const signupPage = {
  eyebrow: "Get started",
  headline: "Tell us about your business",
  subhead:
    "Fill out the form below and we'll be in touch within one business day. No pressure, no jargon.",
  successTitle: "You're all set!",
  successMessage:
    "Thanks for reaching out. We'll review your info and get back to you within one business day.",
  errorMessage:
    `Something went wrong on our end. Please try again, or email us directly at ${site.email}.`,
};

export const contactPage = {
  eyebrow: "Contact",
  headline: "Send us a message",
  subhead:
    "Questions about pricing, plans, or whether we're a good fit? We'd love to hear from you.",
  successTitle: "Message sent!",
  successMessage:
    "Thanks for getting in touch. We'll respond within one business day.",
  errorMessage:
    `Something went wrong on our end. Please try again, or email us at ${site.email}.`,
};

export const consentBanner = {
  message:
    "We use cookies for analytics and ads so we can measure what's working. You can accept or decline — either way, the site works fine.",
  acceptLabel: "Accept",
  declineLabel: "Decline",
  privacyLabel: "Privacy policy",
  privacyHref: "/privacy",
  cookieSettingsLabel: "Cookie settings",
};
