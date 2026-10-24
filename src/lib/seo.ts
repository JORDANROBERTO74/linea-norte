import type { Metadata } from "next";
import { site } from "@/config/site";
import { locales, type Locale } from "@/i18n/config";

type MetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
};

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
}: MetadataInput): Metadata {
  const canonical = `${site.url}/${locale}${path}`;
  const languages = Object.fromEntries(
    locales.map((code) => [code, `${site.url}/${code}${path}`]),
  );

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      title,
      description,
      url: canonical,
      images: [{ url: `${site.url}/${locale}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
