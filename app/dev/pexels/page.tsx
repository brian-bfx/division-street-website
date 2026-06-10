import { redirect } from "next/navigation";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { ResolvedMediaImage } from "@/components/ds/ResolvedMediaImage";
import { SectionHeader } from "@/components/ds/SectionHeader";
import {
  getAllImageSlots,
  isPexelsEnabled,
  listCachedPhotos,
} from "@/lib/pexels";
import { warmPexelsCache } from "@/lib/pexels/resolve";

async function warmCacheAction() {
  "use server";
  if (process.env.NODE_ENV === "production") return;
  if (!isPexelsEnabled()) return;
  await warmPexelsCache();
  redirect("/dev/pexels");
}

export const metadata = {
  title: "Pexels Dev Browser",
  robots: { index: false, follow: false },
};

export default async function PexelsDevPage() {
  if (process.env.NODE_ENV === "production") {
    return (
      <Section>
        <p className="text-base text-navy/70">This page is only available in development.</p>
      </Section>
    );
  }

  const enabled = isPexelsEnabled();
  const slots = getAllImageSlots();
  const missingSrc = slots.filter((slot) => !slot.src);
  const cached = await listCachedPhotos();

  return (
    <>
      <Section hero>
        <SectionHeader
          align="left"
          eyebrow="Development"
          headline="Pexels image browser"
          subhead="Auto-fills image placeholders from each slot's hint text. Results are cached locally in .pexels-cache.json so refreshes stay fast."
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="secondary">
            Back to site
          </Button>
          {enabled ? (
            <form action={warmCacheAction}>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-button bg-brick px-10 py-4 text-base font-semibold text-white transition-all duration-micro hover:-translate-y-0.5 hover:bg-orange hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
              >
                Warm cache for all placeholders
              </button>
            </form>
          ) : null}
        </div>
        <p className="mt-6 text-base text-navy/70">
          Status:{" "}
          <span className="font-semibold text-navy">
            {enabled ? "Enabled" : "Disabled — add PEXELS_API_KEY to .env.local"}
          </span>
        </p>
        <p className="mt-2 text-sm text-navy/55">
          {missingSrc.length} placeholders without a src · {cached.length} cached Pexels
          lookups
        </p>
      </Section>

      <Section background="warm">
        <SectionHeader
          align="left"
          headline="Placeholder slots"
          subhead="Each card resolves through ResolvedMediaImage using the hint as the Pexels search query."
        />
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {missingSrc.map((slot) => (
            <article key={slot.id} className="card">
              <p className="font-mono text-xs text-navy/45">{slot.id}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-navy">
                {slot.label}
              </h2>
              <p className="mt-2 text-sm text-navy/60">{slot.hint}</p>
              <div className="mt-6">
                <ResolvedMediaImage {...slot} pattern="card" className="w-full" />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
