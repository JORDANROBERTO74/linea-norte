"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/layout";
import { buttonStyles } from "@/components/ui/button";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export default function NotFound() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale && isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl font-semibold text-accent">404</p>
      <h1 className="display-md mt-4">{dict.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink-soft">{dict.notFound.text}</p>
      <Link href={`/${locale}/collection`} className={buttonStyles({ className: "mt-8" })}>
        {dict.notFound.cta}
      </Link>
    </Container>
  );
}
