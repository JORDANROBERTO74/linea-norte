import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Container, Section } from "@/components/ui/layout";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/format";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function JournalPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display-md">{dict.home.journal.title}</h2>
            <p className="mt-2 max-w-lg text-ink-soft">{dict.home.journal.subtitle}</p>
          </div>
          <Link
            href={`/${locale}/journal`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            {dict.home.journal.viewAll}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/journal/${article.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-paper-deep">
                <Image
                  src={article.image}
                  alt={article.title[locale]}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                {article.tag[locale]} · {formatDate(article.date, locale)}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug group-hover:text-accent">
                {article.title[locale]}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
