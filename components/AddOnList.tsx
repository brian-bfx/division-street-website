import type { AddOn } from "@/content/pricing";
import { Reveal } from "./Reveal";

type AddOnListProps = {
  addOns: AddOn[];
};

export function AddOnList({ addOns }: AddOnListProps) {
  return (
    <Reveal delay={80}>
      <ul className="divide-y divide-navy/10 overflow-hidden rounded-card-lg border border-navy/10 shadow-card">
        {addOns.map((addon) => (
          <li
            key={addon.name}
            className="flex items-center justify-between gap-4 bg-white px-6 py-4"
          >
            <span className="text-base font-medium text-navy">{addon.name}</span>
            <span className="shrink-0 font-display text-base font-semibold text-navy">
              {addon.price}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
