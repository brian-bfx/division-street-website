import type { ImageSlot } from "@/content/images";
import { Reveal } from "@/components/Reveal";
import { ResolvedMediaImage } from "./ResolvedMediaImage";

type FormLayoutProps = {
  mobileImage: ImageSlot;
  sidebarImage: ImageSlot;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function FormLayout({
  mobileImage,
  sidebarImage,
  children,
  footer,
}: FormLayoutProps) {
  return (
    <div className="mx-auto grid max-w-4xl items-start gap-10 lg:grid-cols-5 lg:gap-20">
      <div className="lg:col-span-3">
        <Reveal>
          <ResolvedMediaImage
            {...mobileImage}
            pattern="card"
            className="mb-10 w-full lg:hidden"
          />
        </Reveal>
        <Reveal delay={80}>{children}</Reveal>
        {footer && (
          <p className="mt-6 text-center text-base text-navy/60 lg:text-left">
            {footer}
          </p>
        )}
      </div>
      <Reveal delay={160} className="hidden lg:col-span-2 lg:block">
        <ResolvedMediaImage
          {...sidebarImage}
          pattern="portrait"
          className="w-full"
        />
      </Reveal>
    </div>
  );
}
