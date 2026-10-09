import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/data/site";

export const alt = `${SITE_NAME} — Restaurant websites, Casablanca`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og can't read the site's .woff2 files, so this uses the built-in sans.
// Add a .ttf/.otf of Neue Montreal to load it here.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#171717",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: 176,
            fontWeight: 400,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            marginTop: 120,
          }}
        >
          milcode
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              background: "#C0FF0D",
              marginLeft: 10,
              marginBottom: 24,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 28,
            borderTop: "1px solid rgba(241, 241, 241, 0.2)",
            fontSize: 34,
            color: "#A3A3A3",
            letterSpacing: "-0.01em",
          }}
        >
          Restaurant websites — Casablanca
        </div>
      </div>
    ),
    size
  );
}
