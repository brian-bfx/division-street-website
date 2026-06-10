type ChicagoFlagProps = {
  className?: string;
  title?: string;
};

export function ChicagoFlag({
  className = "h-4 w-6",
  title = "Chicago flag",
}: ChicagoFlagProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG; next/image adds no value here
    <img
      src="/images/chicago-flag.svg"
      alt={title}
      className={className}
      width={72}
      height={48}
      decoding="async"
    />
  );
}
