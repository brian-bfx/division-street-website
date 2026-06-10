export const home = {
  hero: {
    headline: "Get Found. Get Chosen. Get Contacted.",
    entityIntro:
      "Division Street Digital helps Chicago neighborhood businesses turn local search into calls, visits, bookings, and repeat customers — across Google, Maps, reviews, ads, and your website.",
    primaryCta: { label: "Schedule a Marketing Review", href: "/contact" },
    secondaryCta: { label: "Explore Local Marketing", href: "/services/local-marketing" },
  },
  whatWeDo: {
    eyebrow: "What we do",
    items: [
      {
        slug: "get-found",
        title: "Get found everywhere customers search",
        body: "Google, Maps, reviews, and local directories — we make sure you show up when someone nearby is looking for what you sell.",
        deliverables: [
          {
            label: "Google Business Profile",
            hint: "Owner updating Google Business Profile on phone outside shop",
            pexelsQuery: "google business profile small business",
          },
          {
            label: "Local SEO",
            hint: "Customer searching local businesses on phone near storefront",
            pexelsQuery: "local search smartphone storefront",
          },
          {
            label: "Map pack visibility",
            hint: "Google Maps results on phone with neighborhood street",
            pexelsQuery: "google maps phone local business",
          },
          {
            label: "Directory consistency",
            hint: "Small business storefront on Chicago neighborhood street",
            pexelsQuery: "chicago neighborhood storefront",
          },
        ],
      },
      {
        slug: "build-trust",
        title: "Build trust before they call",
        body: "Reviews, responses, photos, and proof that help customers choose you over the competition.",
        layout: "editorial" as const,
        editorial: {
          eyebrow: "Build trust",
          headline:
            "Reviews and proof turn searches into calls. The result — customers choose you first.",
          featuredImageIndices: [0, 2],
          cta: { label: "Learn more", href: "/services" },
          stats: [
            {
              value: "93%",
              description: "Of people read reviews before choosing a local business.",
            },
            {
              value: "24hr",
              description: "Target turnaround on new review responses.",
            },
            {
              value: "4×",
              description: "More visibility when your profile stays fresh with photos.",
            },
            {
              value: "100%",
              description: "Profiles we keep accurate, active, and on-brand.",
            },
          ],
        },
        deliverables: [
          {
            label: "Review generation",
            hint: "Happy customer leaving review at local shop register",
            pexelsQuery: "customer review small business",
          },
          {
            label: "Review responses",
            hint: "Business owner responding to reviews on phone",
            pexelsQuery: "business owner smartphone cafe",
          },
          {
            label: "Social proof",
            hint: "Instagram-style product shot at local retail shop",
            pexelsQuery: "small business instagram retail",
          },
          {
            label: "Profile photos",
            hint: "Professional photos of local shop interior and products",
            pexelsQuery: "local shop interior warm light",
          },
        ],
      },
      {
        slug: "drive-actions",
        title: "Turn searches into real actions",
        body: "Ads, landing pages, offers, and tracking built around calls, bookings, visits, and quote requests — not vanity metrics.",
        deliverables: [
          {
            label: "Landing pages",
            hint: "Mobile phone showing local business website",
            pexelsQuery: "mobile website small business",
          },
          {
            label: "Local ads",
            hint: "Shop owner reviewing marketing on laptop at counter",
            pexelsQuery: "small business owner laptop shop",
          },
          {
            label: "Offer campaigns",
            hint: "Promotional signage or seasonal offer in neighborhood store",
            pexelsQuery: "retail store promotion signage",
          },
          {
            label: "Call & booking tracking",
            hint: "Customer calling or booking appointment on phone",
            pexelsQuery: "customer phone booking appointment",
          },
        ],
      },
    ],
  },
  whoFor: {
    eyebrow: "Who it's for",
    headline: "Built for local shops, not national brands",
    body: "If you're a small business in or around Wicker Park — coffee, retail, pet, food, fitness, or services — the neighborhood is our specialty.",
    types: [
      "Coffee shops",
      "Retail",
      "Pet stores",
      "Food & dining",
      "Fitness",
      "Services",
    ],
  },
  socialProof: {
    headline: "Case Studies",
    eyebrow: "Client Stories",
    cta: { label: "View all client stories", href: "/stories" },
  },
  closingCta: {
    headline: "Not sure where local customers are dropping off?",
    body: "Start with a Local Visibility Audit. We'll show you where competitors are winning, what to fix first, and what actually drives calls and bookings in your neighborhood.",
    cta: { label: "Request an Audit", href: "/contact" },
  },
};
