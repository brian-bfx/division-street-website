import { ImageResponse } from "next/og";
import { colors } from "@/lib/colors";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.navy,
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: colors.brick,
          }}
        >
          D
        </div>
      </div>
    ),
    { ...size }
  );
}
