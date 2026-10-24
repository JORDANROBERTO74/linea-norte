import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { formatDate } from "@/lib/format";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import type { Article } from "@/types";

export function ArticleCard({
  article,
  locale,
  dict,
}: {
  article: Article;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <article className="group grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <Link
        href={`/${locale}/journal/${article.slug}`}
        className="relative block aspect-[4/3] overflow-hidden rounded-card bg-paper-deep"
      >
        <Image
          src={article.image}
          alt={article.title[locale]}
          fill
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {article.tag[locale]} · {formatDate(article.date, locale)}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold leading-snug">
          <Link
            href={`/${locale}/journal/${article.slug}`}
            className="hover:text-accent"
          >
            {article.title[locale]}
          </Link>
        </h2>
        <p className="mt-3 text-ink-soft">{article.excerpt[locale]}</p>
        <Link
          href={`/${locale}/journal/${article.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          {dict.journal.read}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
