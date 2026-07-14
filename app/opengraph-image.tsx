import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F5F7",
          color: "#1D1D1F",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600 }}>{siteConfig.businessName}</div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#6E6E73" }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
