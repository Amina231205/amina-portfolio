import { ImageResponse } from "next/og";

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
          backgroundColor: "#0a0e14",
          borderRadius: 6,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: "#e4e9f2" }}>
          AE<span style={{ color: "#7c9cff" }}>.</span>
        </span>
      </div>
    ),
    { ...size }
  );
}
