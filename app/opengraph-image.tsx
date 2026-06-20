import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — AI, Cybersecurity & Data Analysis student`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0e14",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(124,156,255,0.25), transparent 45%), radial-gradient(circle at 85% 75%, rgba(0,229,160,0.18), transparent 45%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#7c9cff",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#00e5a0",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#ffb454",
            }}
          />
          <span style={{ marginLeft: 10, fontSize: 22, color: "#8a96ac", letterSpacing: 4, textTransform: "uppercase" }}>
            AI / CYBERSECURITY / DATA ANALYSIS
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: "#e4e9f2", marginTop: 28 }}>
          Amina Emad
        </div>

        <div style={{ display: "flex", fontSize: 34, color: "#8a96ac", marginTop: 18, maxWidth: 900 }}>
          Building across three lenses — machine learning, network security, and data analysis.
        </div>

        <div style={{ display: "flex", marginTop: 56, fontSize: 24, color: "#4b5768", letterSpacing: 2 }}>
          aminaemad57@gmail.com · github.com/Amina231205
        </div>
      </div>
    ),
    { ...size }
  );
}
