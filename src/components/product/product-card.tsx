import Image from "next/image";
import Link from "next/link";
import { Price } from "@/components/ui/price";
import type { Locale } from "@/i18n/config";
import type { Product } from "@/types";

export function ProductCard({
  product,
  locale,
  priority = false,
}: {
  product: Product;
  locale: Locale;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/${locale}/product/${product.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-paper-deep">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-ink-soft">{product.material[locale]}</p>
        </div>
        <Price value={product.price} size="sm" />
      </div>
    </Link>
  );
}
