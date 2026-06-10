import type { ImageSlot } from "@/content/images";
import type { Service } from "@/content/services";
import { resolveImage } from "@/lib/pexels";

export type ExpertiseDeliverable = {
  label: string;
  hint: string;
  pexelsQuery?: string;
};

export type ExpertiseCategory = {
  slug: string;
  title: string;
  description: string;
  href?: string;
  deliverables: ExpertiseDeliverable[];
};

export type ExpertiseSubItem = {
  label: string;
  imageSrc?: string;
  imageAlt: string;
};

export type ExpertiseStat = {
  value: string;
  description: string;
};

export type ExpertiseEditorial = {
  eyebrow: string;
  headline: string;
  featuredImageIndices: number[];
  stats: ExpertiseStat[];
  cta?: { label: string; href: string };
};

export type ExpertiseItem = {
  slug: string;
  title: string;
  description: string;
  href?: string;
  layout?: "accordion" | "editorial";
  editorial?: ExpertiseEditorial;
  subItems: ExpertiseSubItem[];
};

async function resolveDeliverableImage(
  deliverable: ExpertiseDeliverable,
): Promise<string | undefined> {
  const slot: ImageSlot = {
    label: deliverable.label,
    hint: deliverable.hint,
    pexelsQuery: deliverable.pexelsQuery,
    aspect: "card",
    alt: deliverable.label,
  };
  const resolved = await resolveImage(slot);
  return resolved.src;
}

export async function buildExpertiseItems(
  categories: ExpertiseCategory[],
): Promise<ExpertiseItem[]> {
  return Promise.all(
    categories.map(async (category) => {
      const subItems = await Promise.all(
        category.deliverables.map(async (deliverable) => ({
          label: deliverable.label,
          imageSrc: await resolveDeliverableImage(deliverable),
          imageAlt: deliverable.label,
        })),
      );

      return {
        slug: category.slug,
        title: category.title,
        description: category.description,
        href: category.href,
        subItems,
      };
    }),
  );
}

export function serviceToExpertiseCategory(service: Service): ExpertiseCategory {
  return {
    slug: service.slug,
    title: service.title,
    description: service.metaDescription,
    href: `/services/${service.slug}`,
    deliverables: service.benefits.slice(0, 4).map((benefit) => ({
      label: benefit.title,
      hint: benefit.body,
      pexelsQuery: `${benefit.title} local small business`,
    })),
  };
}

export async function buildExpertiseFromServices(
  services: Service[],
): Promise<ExpertiseItem[]> {
  return buildExpertiseItems(services.map(serviceToExpertiseCategory));
}

type HomeWhatWeDoItem = {
  slug: string;
  title: string;
  body: string;
  layout?: "accordion" | "editorial";
  editorial?: ExpertiseEditorial;
  deliverables: ExpertiseDeliverable[];
};

export async function buildExpertiseFromHome(
  items: HomeWhatWeDoItem[],
): Promise<ExpertiseItem[]> {
  const built = await buildExpertiseItems(
    items.map((item) => ({
      slug: item.slug,
      title: item.title,
      description: item.body,
      href: "/services",
      deliverables: item.deliverables,
    })),
  );

  return built.map((item, index) => {
    const source = items[index];
    if (source.layout !== "editorial" || !source.editorial) return item;
    return {
      ...item,
      layout: "editorial",
      editorial: source.editorial,
    };
  });
}
