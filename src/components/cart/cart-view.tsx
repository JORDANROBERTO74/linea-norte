"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CartIcon } from "@/components/icons";
import { CartSummary } from "@/components/cart/cart-summary";
import { buttonStyles } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { useCart } from "@/providers/cart-provider";

export function CartView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { state, totals, hydrated, remove, setQuantity, clear } = useCart();

  if (!hydrated) {
    return (
      <div className="min-h-40 animate-pulse rounded-card bg-paper-deep/60" aria-hidden="true" />
    );
  }

  if (state.items.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-line bg-paper-deep/40 px-6 py-16 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-paper text-accent">
          <CartIcon className="size-6" />
        </span>
        <p className="mt-4 font-display text-xl">{dict.cart.empty}</p>
        <Link href={`/${locale}/collection`} className={buttonStyles({ className: "mt-6" })}>
          {dict.cart.emptyCta}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
      <ul className="divide-y divide-line rounded-card border border-line bg-paper">
        {state.items.map((item) => (
          <li key={item.key} className="flex gap-4 p-4 sm:p-5">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-paper-deep">
              <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <Link
                  href={`/${locale}/product/${item.slug}`}
                  className="font-display text-lg font-semibold hover:text-accent"
                >
                  {item.name}
                </Link>
                <div className="mt-3 flex items-center gap-3">
                  <QuantityStepper
                    value={item.quantity}
                    onChange={(quantity) => setQuantity(item.key, quantity)}
                    label={dict.cart.quantity}
                  />
                  <button
                    type="button"
                    onClick={() => remove(item.key)}
                    className="text-xs font-medium text-ink-soft underline-offset-2 hover:text-accent hover:underline"
                  >
                    {dict.cart.remove}
                  </button>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <Price value={item.unitPrice * item.quantity} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-4">
        <CartSummary totals={totals} dict={dict}>
          <Link
            href={`/${locale}/contact`}
            className={buttonStyles({ className: "w-full", size: "lg" })}
          >
            {dict.cart.cta}
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={`/${locale}/collection`}
            className="mt-3 block text-center text-sm font-medium text-ink-soft hover:text-ink"
          >
            {dict.cart.continue}
          </Link>
        </CartSummary>

        <p className="rounded-card border border-line bg-paper-deep/40 p-4 text-xs leading-relaxed text-ink-soft">
          {dict.cart.note}
        </p>

        <button
          type="button"
          onClick={clear}
          className="text-xs font-medium text-ink-soft underline-offset-2 hover:text-accent hover:underline"
        >
          {dict.cart.clear}
        </button>
      </div>
    </div>
  );
}
