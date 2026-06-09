"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

/** Sends GA4 page_view on App Router navigations (not just first load) */
export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    trackPageView(path);
  }, [pathname, searchParams]);

  return null;
}
