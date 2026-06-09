export type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
  bestFor: string;
};

export const plans: Plan[] = [
  {
    name: "Presence",
    price: "$250",
    cadence: "/mo",
    tagline: "Get found by the people already searching nearby.",
    features: [
      "Google Business Profile setup & ongoing optimization",
      "Review monitoring + responses to every review",
      "Monthly review-request campaign to your customers",
      "Local SEO basics so you rank in the neighborhood",
      "1 Google post per week (offers, hours, updates)",
      "Monthly one-page report — what changed, what's working",
    ],
    isPopular: false,
    ctaLabel: "Get Started",
    bestFor:
      "Businesses that just need to show up and look great when people search.",
  },
  {
    name: "Presence + Social",
    price: "$550",
    cadence: "/mo",
    tagline: "A social presence that looks like you actually have time for it.",
    features: [
      "Everything in Presence, plus:",
      "Managed Instagram + Facebook — 6 posts per month",
      "Stories templates + monthly story content",
      "Light photo direction (we tell you what to shoot, or shoot it)",
      "Caption writing + local hashtags + community tagging",
      "Comment & DM monitoring (Mon–Fri)",
      "Monthly content calendar you approve in one click",
    ],
    isPopular: true,
    ctaLabel: "Get Started",
    bestFor:
      "Shops that want to look active and connected without lifting a finger.",
  },
  {
    name: "Growth",
    price: "$1,200",
    cadence: "/mo",
    tagline: "Paid campaigns and email/SMS to actually grow.",
    features: [
      "Everything in Presence + Social, plus:",
      "Local Meta + Google ad management (ad spend billed separately)",
      "Email & SMS list building (in-store + online signups)",
      "2 email or SMS campaigns per month",
      "Seasonal campaign planning (holidays, slow seasons, events)",
      "Monthly strategy call",
    ],
    isPopular: false,
    ctaLabel: "Get Started",
    bestFor:
      "Businesses with a growth goal — a second location, slow weekdays to fill, a new product line.",
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
    "Competitor comparison — who's beating you and why",
    "Review & reputation analysis",
    "Website conversion review — where visitors drop off before calling or booking",
    "Ad visibility check",
    "Tracking gaps identified",
    "30-day local demand action plan",
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
  headline: "More calls, visits, and bookings — pick your starting point",
  entityIntro:
    "Division Street Digital helps Chicago neighborhood businesses get found, trusted, and contacted across Google, Maps, reviews, ads, and your website. Start with a one-time audit or jump into a month-to-month plan.",
  subhead: "Not sure where to start? Begin with a Local Visibility Audit. Cancel monthly plans anytime with 30 days' notice.",
  diagnosticHeadline: "Start with clarity",
  diagnosticNote:
    "A one-time audit that shows you exactly where local customers are dropping off — before you spend more on ads or SEO.",
  addOnsHeadline: "One-time add-ons",
  addOnsNote: "Need something built once? Add it to any plan.",
  faqHeadline: "Common questions",
};
