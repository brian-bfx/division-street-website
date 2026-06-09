type SubmitButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "bg-brick text-white hover:bg-brick/90 focus-visible:ring-brick",
  secondary:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
};

export function SubmitButton({
  children,
  loading = false,
  variant = "primary",
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`inline-flex min-h-11 w-full items-center justify-center rounded-button px-7 py-3.5 text-base font-semibold transition-all duration-micro hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto ${variants[variant]}`}
    >
      {loading ? "Sending…" : children}
    </button>
  );
}
