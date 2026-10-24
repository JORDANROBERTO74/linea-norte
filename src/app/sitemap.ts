import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/collection",
    "/about",
    "/journal",
    "/contact",
    "/cart",
    "/legal/privacy",
    "/legal/terms",
    ...products.map((product) => `/product/${product.slug}`),
    ...articles.map((article) => `/journal/${article.slug}`),
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route.includes("/product/") || route.includes("/journal/")
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: route === "" ? 1 : route.includes("/product/") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${site.url}/${code}${route}`]),
        ),
      },
    })),
  );
}
