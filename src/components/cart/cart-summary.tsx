import type { ReactNode } from "react";
import { Price } from "@/components/ui/price";
import type { Dictionary } from "@/i18n/get-dictionary";
import { formatPrice } from "@/lib/format";
import type { CartTotals } from "@/types";

export function CartSummary({
  totals,
  dict,
  children,
}: {
  totals: CartTotals;
  dict: Dictionary;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-card border border-line bg-paper p-6">
      <h2 className="font-display text-xl font-semibold">{dict.cart.total}</h2>

      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-ink-soft">{dict.cart.subtotal}</dt>
          <dd className="tabular-nums">
            <Price value={totals.subtotal} size="sm" />
          </dd>
        </div>

        <div className="flex items-center justify-between">
          <dt className="text-ink-soft">{dict.cart.shipping}</dt>
          <dd className="tabular-nums">
            {totals.shipping === 0 ? dict.cart.free : formatPrice(totals.shipping)}
          </dd>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-3 text-base">
          <dt className="font-semibold">{dict.cart.total}</dt>
          <dd className="font-semibold tabular-nums">
            <Price value={totals.total} />
          </dd>
        </div>
      </dl>

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
