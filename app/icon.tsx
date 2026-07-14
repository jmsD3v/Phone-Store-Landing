import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const initial = siteConfig.shortName.charAt(0).toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: siteConfig.themeColor,
          color: "white",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {initial}
      </div>
    ),
    { ...size }
  );
}
