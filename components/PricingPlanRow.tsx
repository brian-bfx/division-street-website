import Link from "next/link";
import type { Plan } from "@/content/pricing";
import { getSignupHref } from "@/content/forms";
import { ResolvedMediaImage } from "./ds/ResolvedMediaImage";
import { Reveal } from "./Reveal";

type PricingPlanRowProps = {
  plan: Plan;
  index: number;
};

function FeatureBullet() {
  return (
    <span
      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brick"
      aria-hidden="true"
    />
  );
}

export async function PricingPlanRow({ plan, index }: PricingPlanRowProps) {
  return (
    <Reveal delay={index * 100}>
      <article className="overflow-hidden rounded-card-lg border border-navy/10 bg-white shadow-card">
        <div className="border-b border-navy/10 bg-warm px-6 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-navy">
              {plan.name}
            </h3>
            {plan.isPopular && (
              <span className="rounded bg-brick px-2 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-white">
                Popular
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_minmax(220px,260px)_minmax(200px,240px)]">
          <div className="flex flex-col gap-6 border-navy/10 p-6 md:gap-8 md:p-8 lg:border-r">
            {plan.features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <FeatureBullet />
                <div>
                  <p className="font-semibold text-navy">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center border-navy/10 px-6 pb-6 md:px-8 lg:border-r lg:p-8">
            <p className="text-sm leading-relaxed text-navy/70">{plan.tagline}</p>
            <p className="mt-5 font-display text-4xl font-bold text-navy">
              {plan.price}
              <span className="text-base font-normal text-navy/60">
                {plan.cadence}
              </span>
            </p>
            <Link
              href={getSignupHref(plan.name)}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-navy px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-micro hover:-translate-y-0.5 hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              {plan.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={plan.learnMoreHref}
              className="mt-4 text-sm font-medium text-navy/70 underline-offset-2 hover:text-navy hover:underline"
            >
              {plan.learnMoreLabel}
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="hidden px-8 pt-8 lg:block">
              <h4 className="font-display text-lg font-bold text-navy">
                {plan.name}
              </h4>
            </div>
            <div className="flex-1 p-6 pt-0 md:p-8 lg:p-0 lg:pt-4">
              <ResolvedMediaImage
                {...plan.image}
                pattern="card"
                className="h-full min-h-[200px] w-full lg:min-h-[260px]"
                rounded={false}
              />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
