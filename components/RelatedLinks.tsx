import Link from "next/link";

export type RelatedLink = {
  label: string;
  href: string;
  description?: string;
};

type RelatedLinksProps = {
  headline?: string;
  links: RelatedLink[];
};

export function RelatedLinks({
  headline = "Related pages",
  links,
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <aside className="mt-16 rounded-card-lg border border-navy/10 bg-warm p-8 md:p-10">
      <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
        {headline}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-base font-medium text-brick transition-colors duration-micro hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
            {link.description && (
              <p className="mt-1 text-sm text-navy/60">{link.description}</p>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
