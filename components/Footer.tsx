import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-sm font-medium tracking-eyebrow">
              {site.wordmark}
            </p>
            <p className="mt-2 max-w-sm text-base leading-relaxed text-white/70">
              {site.neighborhoodLine}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              {site.footerNote}
            </p>
            <div className="mt-4 space-y-1 text-base text-white/90">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center transition-colors duration-micro hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {site.email}
              </a>
              <br />
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex min-h-11 items-center transition-colors duration-micro hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">
              <span className="font-medium text-white/80">Areas we serve:</span>{" "}
              {site.serviceArea.neighborhoods.join(", ")}, {site.serviceArea.region}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-8">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-base text-white/70 transition-colors duration-micro hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-base text-white/70 transition-colors duration-micro hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
