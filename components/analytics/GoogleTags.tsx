import Script from "next/script";

const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/** Primary tag ID — GA4 preferred, falls back to Ads ID */
const primaryId = ga4Id ?? adsId;

export function GoogleTags() {
  if (!primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${ga4Id ? `gtag('config', '${ga4Id}', { send_page_view: false });` : ""}
          ${adsId ? `gtag('config', '${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}
