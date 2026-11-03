import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon; mirrors app/icon.svg. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111318",
          color: "#f5f5f2",
          fontSize: 110,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        A<span style={{ color: "#a8b9a5" }}>.</span>
      </div>
    ),
    size,
  );
}
