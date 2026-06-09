import { typography } from "@/lib/design-system/typography";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`inline-block ${typography.eyebrow} ${className}`}>
      {children}
    </span>
  );
}
