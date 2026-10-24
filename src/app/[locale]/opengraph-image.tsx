import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export const alt = "Línea Norte — furniture that lasts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF8F4",
          padding: "70px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 999,
            backgroundColor: "#F0ECE4",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: 60,
            width: 240,
            height: 240,
            borderRadius: 999,
            backgroundColor: "#E97730",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: "#E97730",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#5C5850",
              display: "flex",
            }}
          >
            {dict.common.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1,
              color: "#1C1B18",
              fontFamily: "Georgia, serif",
              display: "flex",
            }}
          >
            Línea Norte
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 40,
              color: "#5C5850",
              maxWidth: 760,
              display: "flex",
            }}
          >
            {dict.home.hero.subtitle}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#5C5850" }}>
          {dict.footer.note}
        </div>
      </div>
    ),
    size,
  );
}
