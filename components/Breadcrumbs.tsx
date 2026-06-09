import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type BreadcrumbItem = { name: string; path: string };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={`mb-10 ${className}`}>
      <JsonLd
        data={breadcrumbSchema(allItems)}
      />
      <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-navy/60">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-navy/30">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-navy/80">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors duration-micro hover:text-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
