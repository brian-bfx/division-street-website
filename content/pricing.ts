import type { ImageSlot } from "@/content/images";
import { images } from "@/content/images";

export type PlanFeature = {
  title: string;
  description: string;
};

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: PlanFeature[];
  isPopular: boolean;
  ctaLabel: string;
  learnMoreLabel: string;
  learnMoreHref: string;
  image: ImageSlot;
};

export const plans: Plan[] = [
  {
    name: "Presence",
    price: "$250",
    cadence: "/month",
    tagline:
      "Ideal for businesses that need to show up on Google and build trust through reviews.",
    features: [
      {
        title: "Google Business Profile",
        description:
          "Show up when neighbors search — we set up and keep your profile working for you.",
      },
      {
        title: "Review monitoring & responses",
        description:
          "Every review gets a thoughtful reply so customers see you care.",
      },
      {
        title: "Monthly review requests",
        description:
          "We nudge happy customers to leave reviews — the steady way to build trust.",
      },
      {
        title: "Neighborhood SEO",
        description:
          "Rank for the searches that actually bring foot traffic in your area.",
      },
    ],
    isPopular: false,
    ctaLabel: "Select plan",
    learnMoreLabel: "Learn more",
    learnMoreHref: "/contact",
    image: images.pricing.plans.presence,
  },
  {
    name: "Presence + Social",
    price: "$550",
    cadence: "/month",
    tagline:
      "Perfect for shops that want to look active and connected without lifting a finger.",
    features: [
      {
        title: "Everything in Presence",
        description:
          "Google, reviews, and local SEO — the full foundation for getting found nearby.",
      },
      {
        title: "Managed Instagram + Facebook",
        description:
          "Look active on social without living on your phone — six posts a month, written and scheduled.",
      },
      {
        title: "Content calendar",
        description:
          "Know what's going out before it goes live — one-click approval on your monthly calendar.",
      },
      {
        title: "Comment & DM monitoring",
        description:
          "We watch your inbox Mon–Fri so customers get a reply even when you're with a client.",
      },
      {
        title: "Conversion tracking",
        description:
          "Calls, reservation form completions, and online order initiates — tied back to the campaigns driving them.",
      },
    ],
    isPopular: true,
    ctaLabel: "Select plan",
    learnMoreLabel: "Learn more",
    learnMoreHref: "/contact",
    image: images.pricing.plans.presenceSocial,
  },
  {
    name: "Growth",
    price: "$1,200",
    cadence: "/month",
    tagline:
      "Designed for businesses with a growth goal — more locations, slow days to fill, or a new line to launch.",
    features: [
      {
        title: "Everything in Presence + Social",
        description:
          "Google, reviews, social, and content — the full local marketing stack in one plan.",
      },
      {
        title: "Paid ad management",
        description:
          "Local Meta and Google campaigns managed for you — ad spend billed separately.",
      },
      {
        title: "Email & SMS campaigns",
        description:
          "Two campaigns a month to bring regulars back and fill slow weeks.",
      },
      {
        title: "Monthly strategy call",
        description:
          "A dedicated check-in to review what's working and plan the next move together.",
      },
      {
        title: "Multi-location GBP management and reporting",
        description:
          "One dashboard for every location — profiles optimized and performance reported across the board.",
      },
    ],
    isPopular: false,
    ctaLabel: "Select plan",
    learnMoreLabel: "Learn more",
    learnMoreHref: "/contact",
    image: images.pricing.plans.growth,
  },
];

export type DiagnosticOffer = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const diagnosticOffer: DiagnosticOffer = {
  name: "Local Visibility Audit",
  price: "From $500",
  tagline:
    "See where local customers are finding your competitors instead of you — and what to fix first.",
  features: [
    "Google Business Profile review — know if you're showing up when neighbors search",
    "Top local search opportunities in your neighborhood",
    "Local keyword map — the 10–15 terms most likely to drive foot traffic in your area",
    "Competitor comparison — who's beating you and why",
    "Review & reputation analysis",
    "Website conversion review — where visitors drop off before calling or booking",
    "Ad visibility check",
    "Tracking gaps identified",
    "30-day local demand action plan",
    "Fee waived with 1-year commitment",
  ],
  ctaLabel: "Request an audit",
  ctaHref: "/contact",
};

export type AddOn = { name: string; price: string };

export const addOns: AddOn[] = [
  { name: "One-page website", price: "$1,500" },
  { name: "3-page website", price: "$2,800" },
  { name: "Photo day (half-day shoot, edited library)", price: "$600" },
  { name: "Menu / signage design", price: "from $350" },
  {
    name: "Review-generation kit (QR cards, table tents, signage)",
    price: "$200",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Is there a contract?",
    answer:
      "No long-term lock-in. Plans are month-to-month with 30 days' notice to cancel.",
  },
  {
    question: "Do you work with my type of business?",
    answer:
      "If you're a local shop in or around Wicker Park — coffee, retail, pet, food, services, fitness — yes. The neighborhood is our specialty.",
  },
  {
    question: "What if I'm not sure which plan I need?",
    answer:
      "Start with a free 15-minute audit of your Google profile and online presence. We'll tell you exactly where you stand and what's worth doing — no pressure.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Reviews and Google visibility usually move within 30–60 days. Social momentum builds over the first few months. Paid ads can drive traffic within the first week.",
  },
  {
    question: "Do you only work in Wicker Park?",
    answer:
      "Wicker Park is our home base, but we work with businesses across nearby Chicago neighborhoods — Bucktown, Ukrainian Village, Logan Square, West Town, and the surrounding area. If you're a local shop serving your neighborhood, we're a good fit.",
  },
  {
    question: "What's included in local SEO for a Chicago small business?",
    answer:
      "We optimize your Google Business Profile, make sure your name, address, and phone are consistent everywhere online, target neighborhood search terms, publish Google posts, and monitor reviews. The goal is simple: when someone nearby searches for what you offer, you show up and look trustworthy.",
  },
  {
    question: "How is Division Street Digital different from a big Chicago agency?",
    answer:
      "We're built for neighborhood shops, not national brands. You get a dedicated local partner who knows Wicker Park and Bucktown — not a rotating account team, not a 12-month contract, and not a stack of services you'll never use. Month-to-month plans, plain language, and work that shows up on Google and at your door.",
  },
];

export const pricingPage = {
  eyebrow: "Pricing",
  headline: "Flexible plans",
  subhead:
    "Choose the right plan for your neighborhood business. Month-to-month — cancel anytime with 30 days' notice.",
  diagnosticHeadline: "Start with clarity",
  diagnosticNote:
    "A one-time audit that shows you exactly where local customers are dropping off — before you spend more on ads or SEO.",
  addOnsHeadline: "One-time add-ons",
  addOnsNote: "Need something built once? Add it to any plan.",
  faqHeadline: "Common questions",
};
