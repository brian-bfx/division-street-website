"use client";

import { Suspense, useEffect, useState } from "react";
import { updateConsent } from "@/lib/analytics";
import { getConsentFromDocument } from "@/lib/consent";
import { ConsentBanner } from "./ConsentBanner";
import { PageViewTracker } from "./PageViewTracker";

export function AnalyticsProvider() {
  const [reopenBanner, setReopenBanner] = useState(false);

  // Restore prior consent choice after gtag loads
  useEffect(() => {
    const existing = getConsentFromDocument();
    if (existing === "accepted") updateConsent(true);
  }, []);

  // Footer "Cookie settings" reopens the banner
  useEffect(() => {
    const handler = () => setReopenBanner(true);
    window.addEventListener("wpm:open-cookie-settings", handler);
    return () =>
      window.removeEventListener("wpm:open-cookie-settings", handler);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <ConsentBanner
        forceOpen={reopenBanner}
        onClose={() => setReopenBanner(false)}
      />
    </>
  );
}
