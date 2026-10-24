import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/config/site";
import { articles, getArticleBySlug } from "@/data/articles";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    locale,
    path: `/journal/${article.slug}`,
    title: `${article.title[locale]} — ${site.name}`,
    description: article.excerpt[locale],
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    image: `${site.url}${article.image}`,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author[locale] },
    publisher: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <Section className="pt-8 sm:pt-12">
        <Container className="max-w-3xl">
          <Link
            href={`/${locale}/journal`}
            className="text-sm font-medium text-ink-soft hover:text-ink"
          >
            ← {dict.journal.back}
          </Link>

          <header className="mt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
              {article.tag[locale]} · {formatDate(article.date, locale)}
            </p>
            <h1 className="display-lg mt-4">{article.title[locale]}</h1>
            <p className="mt-4 text-ink-soft">{article.author[locale]}</p>
          </header>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src={article.image}
              alt={article.title[locale]}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 720px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
            {article.body[locale].map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-ink" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <JsonLd data={jsonLd} />
    </>
  );
}
