import { ImageResponse } from "next/og";
import { hasLocale } from "@/i18n/config";
import sv from "@/i18n/dictionaries/sv";
import en from "@/i18n/dictionaries/en";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aven Studio";

// Brand tokens, duplicated here because ImageResponse cannot read CSS variables.
const ink = "#111318";
const paper = "#f5f5f2";
const silver = "#a6a8ad";
const sage = "#a8b9a5";

/** Branded share image for each locale. */
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = hasLocale(lang) && lang === "en" ? en : sv;
  // ImageResponse lays text out with flexbox, so words are separate items and the accent dot joins the last one.
  const words = dict.home.hero.headline.split(" ");
  const last = words.pop();

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
          background: ink,
          color: paper,
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: "-0.02em" }}>
          <span>Aven</span>
          <span style={{ marginLeft: 10, color: silver }}>Studio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 96, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 900 }}>
            {words.map((word, i) => (
              <span key={i} style={{ marginRight: 20 }}>
                {word}
              </span>
            ))}
            <span style={{ display: "flex" }}>
              {last}
              <span style={{ color: sage }}>.</span>
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 28, color: silver }}>
            {dict.home.hero.pillars.join("  ·  ")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
