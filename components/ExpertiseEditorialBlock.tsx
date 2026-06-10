import Image from "next/image";
import Link from "next/link";
import type { ExpertiseItem } from "@/lib/expertise";

type ExpertiseEditorialBlockProps = {
  item: ExpertiseItem;
};

function EditorialEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.8125rem] font-medium uppercase tracking-eyebrow text-navy/50 md:text-sm">
      <span className="inline-block h-2 w-2 shrink-0 bg-orange" aria-hidden />
      {children}
    </span>
  );
}

function EditorialCta({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-12 items-center gap-4 bg-navy px-6 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-micro hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 md:text-sm"
    >
      {label}
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-micro group-hover:bg-white/15"
        aria-hidden
      >
        <svg
          className="h-3.5 w-3.5 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 6l6 6-6 6"
          />
        </svg>
      </span>
    </Link>
  );
}

export function ExpertiseEditorialBlock({ item }: ExpertiseEditorialBlockProps) {
  const editorial = item.editorial;
  if (!editorial) return null;

  const featuredImages = editorial.featuredImageIndices.map(
    (index) => item.subItems[index],
  );

  return (
    <article className="border border-navy/10 bg-white shadow-card">
      <div className="p-8 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,11rem)_1fr] lg:gap-16 xl:gap-24">
          <div className="flex flex-col items-start gap-8 lg:pt-2">
            <EditorialEyebrow>{editorial.eyebrow}</EditorialEyebrow>
            {editorial.cta ? (
              <EditorialCta label={editorial.cta.label} href={editorial.cta.href} />
            ) : null}
          </div>

          <div className="min-w-0">
            <h2
              id={`expertise-heading-${item.slug}`}
              className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-navy"
            >
              {editorial.headline}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
              {featuredImages.map((subItem) =>
                subItem.imageSrc ? (
                  <div
                    key={subItem.label}
                    className="relative aspect-[4/3] overflow-hidden rounded-card-lg bg-warm"
                  >
                    <Image
                      src={subItem.imageSrc}
                      alt={subItem.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 28vw"
                    />
                  </div>
                ) : (
                  <div
                    key={subItem.label}
                    className="flex aspect-[4/3] items-center justify-center rounded-card-lg border border-dashed border-navy/15 bg-warm px-3 text-center text-xs text-navy/45"
                  >
                    {subItem.label}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-navy/10 pt-12 md:mt-20 md:pt-16">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
            {editorial.stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`min-w-0 px-0 lg:px-8 ${
                  index > 0 ? "lg:border-l lg:border-navy/10" : ""
                } ${index % 2 === 1 ? "border-l border-navy/10 pl-6 lg:pl-8" : "lg:pl-0"} ${
                  index >= 2 ? "border-t border-navy/10 pt-10 lg:border-t-0 lg:pt-0" : ""
                }`}
              >
                <p className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-none tracking-[-0.03em] text-navy">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-navy/60">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
