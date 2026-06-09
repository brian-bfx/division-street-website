import { site } from "@/content/site";

type FaqItem = { question: string; answer: string };

type BreadcrumbItem = { name: string; path: string };

type ArticleInput = {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
};

type ServiceInput = {
  name: string;
  description: string;
  path: string;
};

type StoryInput = {
  business: string;
  type: string;
  neighborhood: string;
  quote: string;
  quoteAttribution: string;
  path: string;
};

const SCHEMA_CONTEXT = "https://schema.org";

function absoluteUrl(path: string): string {
  return `${site.url}${path}`;
}

function areaServedSchema() {
  return [
    {
      "@type": "City",
      name: "Chicago",
      containedInPlace: {
        "@type": "State",
        name: "Illinois",
      },
    },
    ...site.serviceArea.neighborhoods.map((name) => ({
      "@type": "Place",
      name: `${name}, Chicago, IL`,
    })),
  ];
}

export function organizationSchema() {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    description: site.description,
    areaServed: areaServedSchema(),
    founder: {
      "@type": "Person",
      name: site.founder.name,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    description: site.description,
    areaServed: areaServedSchema(),
    serviceType: site.serviceTypes,
    priceRange: "$$",
    knowsAbout: [
      "Local SEO",
      "Google Business Profile",
      "Social media marketing",
      "Online reputation management",
    ],
  };
}

export function siteWideSchemas() {
  return [organizationSchema(), webSiteSchema(), professionalServiceSchema()];
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path }: ServiceInput) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      areaServed: areaServedSchema(),
    },
    areaServed: areaServedSchema(),
  };
}

export function articleSchema({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: ArticleInput) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Person",
      name: site.founder.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function storyArticleSchema({
  business,
  type,
  neighborhood,
  quote,
  quoteAttribution,
  path,
}: StoryInput) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline: `${business} — Client Story`,
    description: `${type} in ${neighborhood}. ${quote}`,
    url: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: site.name,
    },
    about: {
      "@type": "LocalBusiness",
      name: business,
      address: {
        "@type": "PostalAddress",
        addressLocality: neighborhood,
        addressRegion: "IL",
        addressCountry: "US",
      },
    },
    citation: quoteAttribution,
  };
}
