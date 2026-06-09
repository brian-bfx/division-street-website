import { site } from "@/content/site";

export const privacyPage = {
  eyebrow: "Privacy",
  headline: "Privacy policy",
  // TODO: have this reviewed by a lawyer before running paid ads at scale
  intro:
    "We keep this simple. Here's what we collect, why, and what you can do about it.",
  sections: [
    {
      title: "What we collect",
      body: "When you fill out our sign-up or contact form, we collect the info you provide — your name, email, phone, business details, and message. We also collect basic analytics data (pages visited, how you found us) through Google Analytics and Google Ads, if you consent to cookies.",
    },
    {
      title: "Why we collect it",
      body: "Form data lets us respond to your inquiry and see if we're a good fit to work together. Analytics data helps us understand whether our website and ads are reaching local business owners like you — so we can improve, not so we can sell your data.",
    },
    {
      title: "Who we share it with",
      body: "Form submissions are emailed to us through Resend, our email delivery service. Analytics data goes to Google (Analytics and Ads) only if you accept cookies. We don't sell your information to anyone.",
    },
    {
      title: "How to opt out",
      body: `Click "Cookie settings" in the site footer to change your analytics preference at any time. To ask us to delete your form submission or personal data, email ${site.email}.`,
    },
    {
      title: "How long we keep it",
      body: "We keep form submissions as long as needed to respond and follow up. Analytics data is retained per Google's default retention settings.",
    },
  ],
};
