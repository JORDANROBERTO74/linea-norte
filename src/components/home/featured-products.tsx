import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { ProductCard } from "@/components/product/product-card";
import { Container, Section } from "@/components/ui/layout";
import { getFeaturedProducts } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function FeaturedProducts({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = getFeaturedProducts();

  return (
    <Section className="bg-paper-deep/50">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display-md">{dict.home.featured.title}</h2>
            <p className="mt-2 max-w-lg text-ink-soft">{dict.home.featured.subtitle}</p>
          </div>
          <Link
            href={`/${locale}/collection`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            {dict.home.featured.viewAll}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              priority={index === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
