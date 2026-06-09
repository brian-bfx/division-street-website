import type { Story } from "./stories/types";

export type { Story, StoryImage, StorySection, StoryService } from "./stories/types";

export const storiesPage = {
  eyebrow: "Client Stories",
  headline: "Real businesses. Real results.",
  entityIntro:
    "Division Street Digital has helped galleries, brands, coffee shops, boutiques, and other Chicago businesses get found online, look professional, and turn visitors into customers.",
  subhead:
    "A few of the businesses we've helped — each project is different, but the goal is the same: make your best work easy to find and act on.",
  closingCta: {
    headline: "Want results like these?",
    cta: { label: "See our pricing", href: "/pricing" },
  },
};

export const stories: Story[] = [
  {
    slug: "vsg-contemporary",
    business: "VSG Contemporary",
    type: "Art Gallery",
    neighborhood: "West Loop",
    services: [{ label: "Websites", slug: "websites" }],
    sections: [
      {
        eyebrow: "The challenge",
        body:
          "Allan was a first-time entrepreneur opening a contemporary art gallery — hundreds of items on the checklist, and a professional website sat right at the top as the most public-facing asset of the business.",
      },
      {
        eyebrow: "What we did",
        body:
          "We designed and built a clean, functional website that matches the gallery's caliber — easy for collectors and visitors to browse exhibitions, learn about VSG Contemporary, and take the next step.",
      },
      {
        eyebrow: "The result",
        body:
          "Nearly immediate results, both qualitative and quantitative — Allan says he feels like a stronger, more professional business every day because of the site.",
      },
    ],
    quote:
      "As a first time entrepreneur, there were hundreds of items on my checklist and it was my first time at all of them. A website with a clean interface & functionality was right there at the top of this list and is the most public facing asset of my business. BFX has exceeded my expectations at every level, from client care to end product results. Each day, I feel like a better, stronger and more professional business because of my website, both qualitative and quantitative with nearly immediate results. I hired Brian 6 months after opening the gallery and wish I did it from day 1, it would have saved me both time, money and a dozen headaches.",
    quoteAttribution: "Allan Weinberger, Founder/Director, VSG Contemporary",
    hero: {
      label: "Gallery hero",
      hint: "Exterior of VSG Contemporary or a wide shot of the main exhibition space — clean, gallery lighting, artwork visible",
      src: "/images/stories/vsg-contemporary.svg",
    },
    gallery: [
      {
        label: "Homepage — desktop",
        hint: "Browser mockup of the VSG Contemporary homepage on a desktop screen",
        aspect: "card",
      },
      {
        label: "Homepage — mobile",
        hint: "Phone mockup showing the mobile-responsive site — navigation, exhibition info, and CTAs readable",
        aspect: "portrait",
      },
      {
        label: "Exhibition view",
        hint: "Interior gallery shot during an opening or installation — artwork on walls, visitors optional",
        aspect: "card",
      },
      {
        label: "Site detail page",
        hint: "Screenshot or mockup of an exhibition or artist page — typography and imagery on brand",
        aspect: "card",
      },
    ],
  },
  {
    slug: "enstrumental-brand",
    business: "Enstrumental Brand",
    type: "Brand",
    neighborhood: "Chicago",
    services: [
      { label: "Websites", slug: "websites" },
      { label: "E-commerce" },
    ],
    sections: [
      {
        eyebrow: "The challenge",
        body:
          "After two disappointing experiences with overseas web agencies, Drew was frustrated and close to putting the brand on hold — he needed a website redesign and e-commerce build he could actually trust.",
      },
      {
        eyebrow: "What we did",
        body:
          "We mapped out a full project plan — site migration, design, content, and e-commerce — then worked through it together with weekly meetings to review progress, designs, and action items.",
      },
      {
        eyebrow: "The result",
        body:
          "The thoroughness of the plan reenergized Drew's confidence in the brand. He calls the experience extremely satisfying and recommends Brian for anyone looking to strengthen their digital presence.",
      },
    ],
    quote:
      "When I first met Brian Feener at an art gallery back in 07/2023, I was on the verge of slowly landing my company/brand at a \"position of rest.\" For context, I was a bit frustrated and disappointed with reaching out to individuals or companies who offered assistance with website development and redesign, due to 2 past unsatisfactory experiences with 2 companies overseas. Not too long after our encounter and conversation, I reached out to Brian for a meeting where I explained my objectives for my website, and he relayed the various services/assistance that he and his company (BFX Commerce) could offer me and the brand pertaining to enhancements with web design and e-commerce. In a short time, he provided me with a comprehensive project outline and strategic approach for us to collectively speak, build, and work on. I was extremely impressed by the thoroughness of the agenda and thoughtfulness of the plan that he laid out. This generated an organic confidence in me, that actually reenergized my faith and desire to continue with the brand, and the initial mission I set upon my start up. With each step throughout the project, whether that was administrative items, timing, site migration, design and content, project management expectations, etc., his attention to detail, willingness to provide constructive suggestions, and positive disposition, resulted in an extremely satisfying experience for me as a customer. In addition, I was excited at the opportunity to work with someone on my site, who I could see and contact on a consistent basis. This is the personal touch I desired. His willingness to make himself available for weekly meetings to review progress, designs, and action items, was not only highly impressive and appreciative; it was also significantly aided in my comfort level. I highly recommend Brian for any individual, small business, or larger company looking for an efficient and reliable individual to enhance their digital placement and overall productions of their enterprise.",
    quoteAttribution: "Drew, Founder | Owner, Enstrumental Brand",
    hero: {
      label: "Brand hero",
      hint: "Enstrumental Brand homepage in a browser mockup, or a strong product/lifestyle shot that represents the brand",
      src: "/images/stories/enstrumental-brand.svg",
    },
    gallery: [
      {
        label: "Homepage — desktop",
        hint: "Full-width browser mockup of the redesigned Enstrumental Brand homepage",
        aspect: "card",
      },
      {
        label: "Shop — desktop",
        hint: "E-commerce catalog or product page — clear navigation, product imagery, and add-to-cart flow",
        aspect: "card",
      },
      {
        label: "Homepage — mobile",
        hint: "Phone mockup showing the mobile-responsive site — shop, navigation, and brand identity intact",
        aspect: "portrait",
      },
      {
        label: "Product detail page",
        hint: "Screenshot of a product page — photography, description, pricing, and purchase options",
        aspect: "card",
      },
    ],
  },
  {
    slug: "damen-grounds-coffee",
    business: "Damen Grounds Coffee",
    type: "Coffee Shop",
    neighborhood: "Wicker Park",
    services: [
      { label: "Google Business Profile", slug: "google-business-profile" },
      { label: "Social Media", slug: "social-media" },
    ],
    sections: [
      {
        eyebrow: "The challenge",
        body:
          "They had loyal regulars but almost no Google presence — 12 reviews, outdated hours, and no photos on their profile. Newcomers walking Damen Ave had no idea they existed.",
      },
      {
        eyebrow: "What we did",
        body:
          "We rebuilt their Google Business Profile with professional photos, weekly Google posts for seasonal drinks, and a review-request system at the counter. We also started posting three times a week on Instagram with a consistent neighborhood vibe.",
      },
      {
        eyebrow: "The result",
        body:
          "They went from 12 to 58 Google reviews in four months, started appearing in the local map pack for 'coffee near me' searches, and saw a noticeable bump in weekday morning foot traffic.",
      },
    ],
    quote:
      "I used to think marketing was for big chains. Now people find us on Google before they even walk past the shop.",
    quoteAttribution: "Maria Santos, Owner, Damen Grounds Coffee",
    hero: {
      label: "Coffee shop storefront",
      hint: "Exterior or interior of the client's café — warm light, real customers optional",
      src: "/images/stories/damen-grounds-coffee.svg",
    },
  },
  {
    slug: "bucktown-bark-bone",
    business: "Bucktown Bark & Bone",
    type: "Pet Store",
    neighborhood: "Bucktown",
    services: [
      { label: "Google Business Profile", slug: "google-business-profile" },
      { label: "Social Media", slug: "social-media" },
    ],
    sections: [
      {
        eyebrow: "The challenge",
        body:
          "A great selection and knowledgeable staff, but their social accounts were dormant and competitors dominated local search for pet supplies and grooming in Bucktown.",
      },
      {
        eyebrow: "What we did",
        body:
          "We optimized their Google profile, responded to every review, launched a monthly email with new product highlights, and posted customer pet photos on Instagram with local hashtags.",
      },
      {
        eyebrow: "The result",
        body:
          "Google profile views doubled in 90 days, they gained 340 new Instagram followers, and the owner reported more first-time customers mentioning they 'found them on Google.'",
      },
    ],
    quote:
      "We finally look online like we feel in the store — busy, friendly, and part of the neighborhood.",
    quoteAttribution: "James Okonkwo, Owner, Bucktown Bark & Bone",
    hero: {
      label: "Pet store photo",
      hint: "Shop front or owner with a happy customer and their pet",
      src: "/images/stories/bucktown-bark-bone.svg",
    },
  },
  {
    slug: "ukrainian-village-threads",
    business: "Ukrainian Village Threads",
    type: "Boutique",
    neighborhood: "Ukrainian Village",
    services: [
      { label: "Google Business Profile", slug: "google-business-profile" },
      { label: "Social Media", slug: "social-media" },
    ],
    sections: [
      {
        eyebrow: "The challenge",
        body:
          "Beautiful inventory and a strong in-store experience, but inconsistent branding online and almost no reviews. They relied entirely on walk-by traffic.",
      },
      {
        eyebrow: "What we did",
        body:
          "We refreshed their Google Business Profile, set up a review-generation kit with QR cards at checkout, and created a content calendar for Instagram featuring new arrivals and styled flat lays.",
      },
      {
        eyebrow: "The result",
        body:
          "Reviews grew from 8 to 47 in three months, Instagram engagement tripled, and they started seeing customers from Logan Square and Wicker Park who discovered them through search.",
      },
    ],
    quote:
      "The review cards alone changed everything. People leave a review while they're still smiling at the register.",
    quoteAttribution: "Elena Vasquez, Owner, Ukrainian Village Threads",
    hero: {
      label: "Boutique photo",
      hint: "Window display, owner in the shop, or a styled product shot on-site",
      src: "/images/stories/ukrainian-village-threads.svg",
    },
  },
];
