import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/journal/article-card";
import { Container, Section } from "@/components/ui/layout";
import { articles } from "@/data/articles";
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
    path: "/journal",
    title: dict.meta.journal.title,
    description: dict.meta.journal.description,
  });
}

export default async function JournalPage({
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
          <h1 className="display-lg">{dict.journal.title}</h1>
          <p className="mt-3 text-lg text-ink-soft">{dict.journal.subtitle}</p>
        </header>

        <div className="mt-12 space-y-14">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} locale={locale} dict={dict} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
