export type ImageAspect = "hero" | "card" | "square" | "portrait";

export type ImageSlot = {
  label: string;
  hint: string;
  aspect: ImageAspect;
  src?: string;
  alt?: string;
};

export const images = {
  home: {
    hero: {
      label: "Hero photo",
      hint: "Warm street-level shot of Wicker Park — storefronts, sidewalk, neighborhood energy",
      aspect: "hero",
      src: "/images/home-hero.svg",
      alt: "Wicker Park neighborhood storefronts",
    },
    whatWeDo: [
      {
        label: "Google & local search",
        hint: "Owner checking phone outside their shop, or Google Maps on a phone screen",
        aspect: "square",
        alt: "Local business found on Google",
      },
      {
        label: "Social media",
        hint: "Candid behind-the-counter or product shot that feels like a real Instagram post",
        aspect: "square",
        alt: "Small business social media content",
      },
      {
        label: "Repeat customers",
        hint: "Regulars at a café counter, or a friendly handoff at a retail register",
        aspect: "square",
        alt: "Customers returning to a local shop",
      },
    ] satisfies ImageSlot[],
    whoFor: {
      label: "Neighborhood shops",
      hint: "Collage-worthy shot of diverse local businesses — café, boutique, pet store, etc.",
      aspect: "card",
      alt: "Local shops in the Wicker Park area",
    },
    socialProof: [
      {
        label: "Client photo 1",
        hint: "Portrait of a business owner in their shop — warm, natural light",
        aspect: "portrait",
        alt: "Division Street Digital client",
      },
      {
        label: "Client photo 2",
        hint: "Portrait of a second business owner — different trade, same neighborhood feel",
        aspect: "portrait",
        alt: "Division Street Digital client",
      },
    ] satisfies ImageSlot[],
    closingCta: {
      label: "Closing CTA photo",
      hint: "Owner opening shop in the morning, or welcoming a customer at the door",
      aspect: "card",
      alt: "Local business owner welcoming customers",
    },
  },
  pricing: {
    hero: {
      label: "Pricing hero",
      hint: "Clean shot of a thriving local storefront — communicates value without stock-photo vibes",
      aspect: "hero",
      alt: "Thriving local business storefront",
    },
  },
  stories: {
    hero: {
      label: "Stories hero",
      hint: "Wide shot of Wicker Park commercial strip or a row of independent shop fronts",
      aspect: "hero",
      alt: "Independent shops in Wicker Park",
    },
  },
  signup: {
    hero: {
      label: "Get started",
      hint: "Friendly owner at their business — builds trust above the sign-up form",
      aspect: "card",
      alt: "Local business owner",
    },
    sidebar: {
      label: "Sign-up sidebar",
      hint: "Friendly owner at their business — builds trust next to the form",
      aspect: "portrait",
      alt: "Local business owner",
    },
  },
  contact: {
    hero: {
      label: "Contact us",
      hint: "Neighborhood detail shot — mural, street sign, or familiar Chicago corner",
      aspect: "card",
      alt: "Chicago neighborhood",
    },
    sidebar: {
      label: "Contact sidebar",
      hint: "Neighborhood detail shot — mural, street sign, or familiar Wicker Park corner",
      aspect: "portrait",
      alt: "Wicker Park neighborhood",
    },
  },
  about: {
    hero: {
      label: "About hero",
      hint: "Team or founder in a neighborhood setting — approachable, not corporate",
      aspect: "hero",
      alt: "Division Street Digital team",
    },
    founder: {
      label: "Founder portrait",
      hint: "Brian in the neighborhood or at a client shop — natural light, candid",
      aspect: "portrait",
      alt: "Brian Feener, founder of Division Street Digital",
    },
    process: {
      label: "How we work",
      hint: "Laptop and coffee at a local café, or reviewing a Google profile with a client",
      aspect: "card",
      alt: "Local marketing consultation",
    },
  },
  services: {
    hub: {
      label: "Services",
      hint: "Montage of local business types — retail, food, services — Chicago neighborhood feel",
      aspect: "hero",
      alt: "Chicago local business marketing services",
    },
    localMarketing: {
      label: "Local marketing",
      hint: "Customer finding a business on their phone near a Chicago storefront",
      aspect: "hero",
      alt: "Local marketing for Chicago businesses",
    },
    problem: {
      label: "The discovery problem",
      hint: "Customer comparing options on phone outside shops — maps, reviews visible",
      aspect: "card",
      alt: "Customer researching local businesses",
    },
    "local-seo": {
      label: "Local SEO",
      hint: "Google Maps result on phone with neighborhood storefront in background",
      aspect: "hero",
      alt: "Local SEO for Chicago businesses",
    },
    "google-business-profile": {
      label: "Google Business Profile",
      hint: "Business owner updating their Google profile or customer viewing listing",
      aspect: "hero",
      alt: "Google Business Profile management",
    },
    "social-media": {
      label: "Social media",
      hint: "Instagram-worthy product or behind-the-counter shot at a local shop",
      aspect: "hero",
      alt: "Social media for local shops",
    },
    "reviews-reputation": {
      label: "Reviews & reputation",
      hint: "Happy customer moment or owner responding to a review on phone",
      aspect: "hero",
      alt: "Google reviews for local businesses",
    },
    websites: {
      label: "Websites",
      hint: "Mobile phone showing a clean local business website outside the shop",
      aspect: "hero",
      alt: "Small business websites",
    },
  },
  areas: {
    hub: {
      label: "Areas we serve",
      hint: "Chicago neighborhood map feel or Damen/Milwaukee corridor street scene",
      aspect: "hero",
      alt: "Chicago neighborhoods we serve",
    },
    "wicker-park": {
      label: "Wicker Park",
      hint: "Damen Ave or Six Corners — coffee shops, boutiques, foot traffic",
      aspect: "hero",
      alt: "Wicker Park Chicago",
    },
    bucktown: {
      label: "Bucktown",
      hint: "Armitage shop row or residential street near commercial strip",
      aspect: "hero",
      alt: "Bucktown Chicago",
    },
    "ukrainian-village": {
      label: "Ukrainian Village",
      hint: "Chicago Ave retail or Division St restaurant row",
      aspect: "hero",
      alt: "Ukrainian Village Chicago",
    },
    "logan-square": {
      label: "Logan Square",
      hint: "Milwaukee Ave corridor or Logan Blvd — local shops and foot traffic",
      aspect: "hero",
      alt: "Logan Square Chicago",
    },
    "west-town": {
      label: "West Town",
      hint: "Chicago Ave or Grand Ave independent shops",
      aspect: "hero",
      alt: "West Town Chicago",
    },
  },
  blog: {
    hub: {
      label: "Blog",
      hint: "Owner reading on laptop at their shop, or notebook and coffee — learning vibe",
      aspect: "hero",
      alt: "Local marketing guides",
    },
    "google-business-profile-wicker-park": {
      label: "Google Business Profile guide",
      hint: "Phone showing Google Maps listing for a neighborhood shop",
      aspect: "card",
      alt: "Google Business Profile guide",
    },
    "why-local-seo-matters-chicago": {
      label: "Local SEO guide",
      hint: "Map pack on phone with Chicago street in background",
      aspect: "card",
      alt: "Why local SEO matters in Chicago",
    },
    "how-to-get-more-google-reviews": {
      label: "Google reviews guide",
      hint: "QR code or review request moment at checkout",
      aspect: "card",
      alt: "How to get more Google reviews",
    },
    "instagram-wicker-park-retail": {
      label: "Instagram for retail",
      hint: "Product flat-lay or in-store shot that feels like a real post",
      aspect: "card",
      alt: "Instagram for Wicker Park retail",
    },
    "wicker-park-vs-bucktown-marketing": {
      label: "Wicker Park vs Bucktown",
      hint: "Split feel — Damen corridor vs Armitage shop row",
      aspect: "card",
      alt: "Wicker Park vs Bucktown marketing",
    },
    "what-does-local-marketing-agency-do": {
      label: "What agencies do",
      hint: "Agency meeting with shop owner — laptop, Google profile on screen",
      aspect: "card",
      alt: "What a local marketing agency does",
    },
  },
} as const;

export function getServiceImage(slug: string): ImageSlot {
  const map = images.services as Record<string, ImageSlot>;
  return (
    map[slug] ?? {
      label: "Service",
      hint: "Local business in Chicago neighborhood",
      aspect: "hero",
      alt: "Local marketing service",
    }
  );
}

export function getAreaImage(slug: string): ImageSlot {
  const map = images.areas as Record<string, ImageSlot>;
  return (
    map[slug] ?? {
      label: "Chicago neighborhood",
      hint: "Local commercial corridor",
      aspect: "hero",
      alt: "Chicago neighborhood",
    }
  );
}

export function getBlogImage(slug: string): ImageSlot {
  const map = images.blog as Record<string, ImageSlot>;
  return (
    map[slug] ?? {
      label: "Blog post",
      hint: "Local business marketing topic",
      aspect: "card",
      alt: "Local marketing guide",
    }
  );
}
