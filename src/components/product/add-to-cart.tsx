"use client";

import { useEffect, useState } from "react";
import { CheckIcon, PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import type { Dictionary } from "@/i18n/get-dictionary";
import { buildCartItem } from "@/lib/cart";
import { cn } from "@/lib/cn";
import { useCart } from "@/providers/cart-provider";
import type { Product } from "@/types";

export function AddToCart({ product, dict }: { product: Product; dict: Dictionary }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 2200);
    return () => clearTimeout(timer);
  }, [added]);

  function handleAdd() {
    add(buildCartItem(product, quantity));
    setAdded(true);
  }

  return (
    <div className="mt-7">
      <div className="flex items-baseline gap-3">
        <Price value={product.price} size="lg" />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <QuantityStepper value={quantity} onChange={setQuantity} label={dict.cart.quantity} />
        <Button size="lg" onClick={handleAdd} className="min-w-44">
          {added ? (
            <>
              <CheckIcon className="size-4" />
              {dict.product.added}
            </>
          ) : (
            <>
              <PlusIcon className="size-4" />
              {dict.product.add}
            </>
          )}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={cn(
          "mt-3 text-sm text-accent transition-opacity",
          added ? "opacity-100" : "opacity-0",
        )}
      >
        {added ? dict.product.added : ""}
      </p>

      <p className="mt-2 text-sm text-ink-soft">{dict.product.shipping}</p>
    </div>
  );
}
