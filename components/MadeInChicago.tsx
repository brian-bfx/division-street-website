import { ChicagoFlag } from "@/components/ChicagoFlag";
import { site } from "@/content/site";

type MadeInChicagoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function MadeInChicago({
  className = "",
  variant = "dark",
}: MadeInChicagoProps) {
  const textClass =
    variant === "dark" ? "text-white/60" : "text-navy/60";

  return (
    <p
      className={`inline-flex items-center gap-2.5 text-sm ${textClass} ${className}`}
    >
      <ChicagoFlag className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" />
      <span>{site.madeInChicago}</span>
    </p>
  );
}
