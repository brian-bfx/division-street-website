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
    card: {
      headline: "Gallery-ready digital presence",
      outcome: "Nearly immediate results — qualitative and quantitative from day one",
      summary:
        "We designed and built a clean, functional website that matches the gallery's caliber — easy for collectors and visitors to browse exhibitions, learn about VSG Contemporary, and take the next step.",
    },
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
    shortQuote:
      "BFX exceeded my expectations at every level. Each day I feel like a stronger, more professional business because of my website — I wish I'd hired Brian from day one.",
    quoteAttribution: "Allan Weinberger, Founder/Director, VSG Contemporary",
    headshot: {
      src: "/images/stories/vsg-contemporary-headshot.png",
      alt: "Allan Weinberger, Founder/Director of VSG Contemporary",
    },
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
    card: {
      headline: "Trusted website and e-commerce rebuild",
      outcome: "Reenergized confidence after two failed overseas agency experiences",
      summary:
        "We mapped a full project plan — site migration, design, content, and e-commerce — then worked through it together with weekly meetings to review progress, designs, and action items.",
    },
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
    shortQuote:
      "Brian's thorough project plan reenergized my faith in the brand. Weekly meetings, attention to detail, and a personal touch made it an extremely satisfying experience.",
    quoteAttribution: "Drew, Founder | Owner, Enstrumental Brand",
    headshot: {
      src: "/images/stories/enstrumental-brand-headshot.jpg",
      alt: "Drew, Founder and Owner of Enstrumental Brand",
    },
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
    slug: "wear-haus",
    business: "Wear|Haus",
    type: "Retail Brand",
    neighborhood: "Chicago",
    services: [{ label: "Websites", slug: "websites" }],
    card: {
      headline: "A site she's proud to grow with",
      outcome: "Stopped losing time and revenue on a DIY setup that wasn't converting",
      summary:
        "We rebuilt the site from the ground up and coached her through best practices — why certain decisions mattered, how to keep growing, and how to maintain the site without feeling lost in the technical details.",
    },
    sections: [
      {
        eyebrow: "The challenge",
        body:
          "Jessica was maintaining her own website to save money — but it was costing her time, revenue, and confidence. A DIY setup wasn't converting visitors or reflecting the brand she was building.",
      },
      {
        eyebrow: "What we did",
        body:
          "We rebuilt the site from the ground up and coached her through best practices — why certain decisions mattered, how to keep growing, and how to maintain the site without feeling lost in the technical details.",
      },
      {
        eyebrow: "The result",
        body:
          "A professional site she's proud of, a clearer path to grow the business, and a partner who was patient, thorough, and never made her feel behind on website optimization.",
      },
    ],
    quote:
      "As a business owner, I thought I was saving myself money by building and maintaining a website on my own. I couldn't have been more wrong. Not only was I not saving money, but I was actively losing money and valuable time trying to make something useless work. Brian stepped in and not only rebuilt my site — but coached me on best practices, explained why certain utilizations needed to be made and gave me ways to continue to grow my business. Throughout the process he was patient, thorough, and incredibly considerate to my specific needs. Not once did he make me feel stupid over the complexities of website optimization. You won't find a more compassionate and capable individual to care about your brand. Work with Brian!",
    shortQuote:
      "I thought DIY was saving me money — I was losing time and revenue. Brian rebuilt my site, coached me through best practices, and never once made me feel stupid. Work with Brian!",
    quoteAttribution: "Jessica Duffy, Wear|Haus",
    hero: {
      label: "Wear|Haus hero",
      hint: "Wear|Haus homepage in a browser mockup, or a lifestyle product shot that represents the brand",
      src: "/images/stories/wear-haus.svg",
    },
    gallery: [
      {
        label: "Homepage — desktop",
        hint: "Browser mockup of the Wear|Haus homepage on a desktop screen",
        aspect: "card",
      },
      {
        label: "Homepage — mobile",
        hint: "Phone mockup showing the mobile-responsive site — navigation and product imagery readable",
        aspect: "portrait",
      },
      {
        label: "Product collection",
        hint: "Screenshot or lifestyle shot of a key product collection page",
        aspect: "card",
      },
    ],
  },
];
