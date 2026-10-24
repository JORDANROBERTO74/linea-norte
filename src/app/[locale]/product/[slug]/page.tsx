import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/product/add-to-cart";
import { ProductGrid } from "@/components/product/product-grid";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/ui/layout";
import { region } from "@/config/region";
import { site } from "@/config/site";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    locale,
    path: `/product/${product.slug}`,
    title: `${product.name} — ${site.name}`,
    description: product.description[locale],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const dict = getDictionary(locale);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description[locale],
    image: `${site.url}${product.image}`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: (product.price / 100).toFixed(2),
      priceCurrency: region.currency,
      availability: "https://schema.org/InStock",
      url: `${site.url}/${locale}/product/${product.slug}`,
    },
  };

  return (
    <>
      <Section className="pt-8 sm:pt-12">
        <Container>
          <Link
            href={`/${locale}/collection`}
            className="text-sm font-medium text-ink-soft hover:text-ink"
          >
            ← {dict.product.back}
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-deep">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>

            <div className="lg:py-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="olive">{dict.collection.categories[product.category]}</Badge>
              </div>

              <h1 className="display-lg mt-4">{product.name}</h1>
              <p className="mt-2 text-ink-soft">{product.material[locale]}</p>
              <p className="mt-5 max-w-lg text-ink">{product.description[locale]}</p>

              <AddToCart product={product} dict={dict} />

              <dl className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-1">
                <div>
                  <dt className="eyebrow text-ink-soft">{dict.product.details}</dt>
                  <dd className="mt-1 text-sm">{product.details[locale].join(" · ")}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="display-md">{dict.product.related}</h2>
            <div className="mt-6">
              <ProductGrid products={related} locale={locale} />
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd data={jsonLd} />
    </>
  );
}
