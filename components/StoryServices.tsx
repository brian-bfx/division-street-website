import Link from "next/link";
import type { StoryService } from "@/content/stories";

type StoryServicesProps = {
  services: StoryService[];
};

export function StoryServices({ services }: StoryServicesProps) {
  if (!services.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {services.map((service) => (
        <li key={service.label}>
          {service.slug ? (
            <Link
              href={`/services/${service.slug}`}
              className="inline-block rounded-full border border-navy/10 bg-white px-3 py-1 text-sm font-medium text-navy transition-colors hover:border-brick/30 hover:text-brick"
            >
              {service.label}
            </Link>
          ) : (
            <span className="inline-block rounded-full border border-navy/10 bg-white px-3 py-1 text-sm font-medium text-navy">
              {service.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
