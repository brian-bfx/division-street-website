import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { colors } from "@/lib/colors";

export const alt = `${site.name} — Chicago Local Marketing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: colors.navy,
          color: colors.white,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: colors.orange,
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Local marketing for Chicago neighborhood businesses
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 800,
          }}
        >
          Google Business Profile · Local SEO · Social · Reviews
        </div>
      </div>
    ),
    { ...size }
  );
}
