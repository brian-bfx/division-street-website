import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { GoogleTags } from "@/components/analytics/GoogleTags";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { site } from "@/content/site";
import { siteWideSchemas } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Local Marketing for Small Businesses`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

// Consent Mode v2 defaults — must run before gtag.js loads
const consentDefaultScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />
        <JsonLd data={siteWideSchemas()} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Nav />
        <SmoothScrollProvider>
          <main className="flex-1">{children}</main>
        </SmoothScrollProvider>
        <Footer />
        <GoogleTags />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
