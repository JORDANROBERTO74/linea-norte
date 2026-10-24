import { ProductCard } from "@/components/product/product-card";
import type { Locale } from "@/i18n/config";
import type { Product } from "@/types";

export function ProductGrid({
  products,
  locale,
}: {
  products: Product[];
  locale: Locale;
}) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard product={product} locale={locale} priority={index < 3} />
        </li>
      ))}
    </ul>
  );
}
