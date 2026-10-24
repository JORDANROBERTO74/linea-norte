import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CartView } from "@/components/cart/cart-view";
import { Container, Section } from "@/components/ui/layout";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/cart",
    title: dict.meta.cart.title,
    description: dict.meta.cart.description,
  });
}

export default async function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section className="pt-10 sm:pt-14">
      <Container>
        <header className="max-w-2xl">
          <h1 className="display-lg">{dict.cart.title}</h1>
          <p className="mt-3 text-lg text-ink-soft">{dict.cart.subtitle}</p>
        </header>

        <div className="mt-8">
          <CartView locale={locale} dict={dict} />
        </div>
      </Container>
    </Section>
  );
}
