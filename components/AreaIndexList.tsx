import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import type { Area } from "@/content/areas";

type AreaIndexListProps = {
  areas: Area[];
};

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="text-navy/50"
    >
      <path
        d="M8 1.5C5.51472 1.5 3.5 3.51472 3.5 6C3.5 9.25 8 14.5 8 14.5C8 14.5 12.5 9.25 12.5 6C12.5 3.51472 10.4853 1.5 8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function AreaIndexList({ areas }: AreaIndexListProps) {
  const sorted = [...areas].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-navy/10 pb-4">
        <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">
          Chicago neighborhoods
        </h2>
        <span
          className="hidden h-5 w-px shrink-0 bg-navy/15 sm:block"
          aria-hidden
        />
        <Eyebrow className="!text-[0.6875rem] !tracking-[0.14em]">
          Areas
        </Eyebrow>
      </div>

      <ul className="divide-y divide-navy/10">
        {sorted.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/areas/${area.slug}`}
              className="group -mx-2 flex items-center gap-3 rounded-sm px-2 py-3 transition-colors duration-micro hover:bg-navy/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 sm:gap-4 sm:py-3.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center sm:h-8 sm:w-8">
                <LocationIcon />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-navy transition-colors duration-micro group-hover:text-brick">
                  {area.name}
                </p>
                <p className="mt-0.5 truncate text-xs leading-snug text-navy/55">
                  {area.region}
                </p>
              </div>
              <span
                className="shrink-0 text-xs font-medium text-navy/35 transition-colors duration-micro group-hover:text-brick"
                aria-hidden
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
