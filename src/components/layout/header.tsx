"use client";

import Link from "next/link";
import { useState } from "react";
import { CartIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Container } from "@/components/ui/layout";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { useCart } from "@/providers/cart-provider";

type NavItem = { label: string; href: string };

export function Header({
  locale,
  nav,
  cartLabel,
  languageLabel,
  menuLabel,
  closeLabel,
  homeLabel,
}: {
  locale: Locale;
  nav: NavItem[];
  cartLabel: string;
  languageLabel: string;
  menuLabel: string;
  closeLabel: string;
  homeLabel: string;
}) {
  const { count, hydrated } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link
            href={`/${locale}`}
            aria-label={homeLabel}
            className="font-display text-[1.35rem] font-semibold tracking-tight text-ink"
          >
            Línea <span className="font-light">Norte</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-ink-soft transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} label={languageLabel} className="hidden sm:flex" />

          <Link
            href={`/${locale}/cart`}
            className="relative inline-flex h-10 items-center gap-2 rounded-full border border-line bg-white/60 px-3 text-sm font-medium text-ink transition hover:border-ink/40"
            aria-label={`${cartLabel}${hydrated && count > 0 ? ` (${count})` : ""}`}
          >
            <CartIcon className="size-5" />
            <span className="hidden sm:inline">{cartLabel}</span>
            {hydrated && count > 0 ? (
              <span className="grid size-5 place-items-center rounded-full bg-accent text-[0.65rem] font-bold text-white">
                {count}
              </span>
            ) : null}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-line bg-white/60 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? closeLabel : menuLabel}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-line bg-paper md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="rounded-xl px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-line px-2 pt-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              {languageLabel}
            </span>
            <LocaleSwitcher locale={locale} label={languageLabel} />
          </div>
        </Container>
      </div>
    </header>
  );
}
