/**
 * Canonical origin for metadata, canonical links, hreflang, sitemap, robots and
 * Open Graph URLs. Set NEXT_PUBLIC_SITE_URL on the host (the Vercel production
 * domain, for example); the fallback keeps local builds pointing at the live site.
 */
const FALLBACK_URL = "https://linea-norte.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Línea Norte",
  legalName: "Línea Norte S.L.",
  domain: "linea-norte.vercel.app",
  url: resolveSiteUrl(),
  email: "hola@lineanorte.es",
  phone: "+34 910 123 456",
  address: {
    street: "Calle Norte 18",
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
  },
  social: {
    instagram: "https://instagram.com/lineanorte",
    pinterest: "https://pinterest.com/lineanorte",
  },
  nav: [
    { key: "collection", href: "/collection" },
    { key: "about", href: "/about" },
    { key: "journal", href: "/journal" },
    { key: "contact", href: "/contact" },
  ],
} as const;
