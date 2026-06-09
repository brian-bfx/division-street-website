import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brick text-white hover:bg-orange focus-visible:ring-brick",
  secondary:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
  outline:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center rounded-button px-8 py-4 text-base font-semibold transition-all duration-micro hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
