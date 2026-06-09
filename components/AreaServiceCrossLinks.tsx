import Link from "next/link";
import { allAreas } from "@/content/areas";
import { allServices } from "@/content/services";
import { SectionHeader } from "@/components/ds";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function AreaServiceCrossLinks() {
  return (
    <Section background="warm">
      <SectionHeader
        eyebrow="Explore"
        headline="Services & neighborhoods we serve"
        subhead="Local marketing for Chicago neighborhood businesses — browse by service or by area."
      />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal delay={80}>
          <h3 className="font-display text-xl font-semibold text-navy">Services</h3>
          <ul className="mt-4 space-y-2">
            {allServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-base text-brick transition-colors duration-micro hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-base font-medium text-navy/60 hover:text-brick"
              >
                All services →
              </Link>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={160}>
          <h3 className="font-display text-xl font-semibold text-navy">Areas</h3>
          <ul className="mt-4 space-y-2">
            {allAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="text-base text-brick transition-colors duration-micro hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
                >
                  {area.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/areas"
                className="text-base font-medium text-navy/60 hover:text-brick"
              >
                All areas →
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
