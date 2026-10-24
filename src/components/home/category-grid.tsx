import Link from "next/link";
import { ArmchairIcon, LampIcon, ShelfIcon, TableIcon } from "@/components/icons";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import type { CategoryId } from "@/types";

const icons: Record<CategoryId, typeof ArmchairIcon> = {
  seating: ArmchairIcon,
  tables: TableIcon,
  lighting: LampIcon,
  storage: ShelfIcon,
};

export function CategoryGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const ids = Object.keys(icons) as CategoryId[];

  return (
    <Section>
      <Container>
        <h2 className="display-md">{dict.home.categories.title}</h2>
        <p className="mt-2 max-w-lg text-ink-soft">{dict.home.categories.subtitle}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ids.map((id) => {
            const Icon = icons[id];
            return (
              <li key={id}>
                <Link
                  href={`/${locale}/collection?category=${id}`}
                  className="group flex h-full flex-col rounded-card border border-line bg-paper p-6 transition hover:border-ink/30 hover:bg-paper-deep/40"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-paper-deep text-ink transition group-hover:bg-accent/15 group-hover:text-accent">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {dict.collection.categories[id]}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
