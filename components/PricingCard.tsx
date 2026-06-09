import type { Plan } from "@/content/pricing";
import { getSignupHref } from "@/content/forms";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

type PricingCardProps = {
  plan: Plan;
  index: number;
};

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <Reveal delay={index * 80}>
      <article
        className={`relative flex h-full flex-col rounded-card-lg border bg-white p-8 shadow-card transition-all duration-micro hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-card-hover md:p-10 ${
          plan.isPopular ? "border-brick" : "border-navy/10"
        }`}
      >
        {plan.isPopular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brick px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Most popular
          </span>
        )}

        <h3 className="font-display text-2xl font-bold text-navy">{plan.name}</h3>
        <p className="mt-2 text-base leading-relaxed text-navy/70">
          {plan.tagline}
        </p>

        <div className="mt-6">
          <span className="font-display text-4xl font-bold text-navy">
            {plan.price}
          </span>
          <span className="text-base text-navy/60">{plan.cadence}</span>
        </div>

        <ul className="mt-8 flex-1 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-base leading-relaxed text-navy/80"
            >
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-brick"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-navy/60">
          <span className="font-medium text-navy/80">Best for:</span>{" "}
          {plan.bestFor}
        </p>

        <div className="mt-8">
          <Button
            href={getSignupHref(plan.name)}
            variant={plan.isPopular ? "primary" : "secondary"}
            className="w-full"
          >
            {plan.ctaLabel}
          </Button>
        </div>
      </article>
    </Reveal>
  );
}
