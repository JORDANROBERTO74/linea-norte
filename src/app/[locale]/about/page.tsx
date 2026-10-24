import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Testimonials } from "@/components/home/testimonials";
import { JsonLd } from "@/components/json-ld";
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
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const about = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: dict.meta.about.title,
    url: `${locale === "es" ? "es" : "en"}`,
  };

  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <header className="max-w-2xl">
            <p className="eyebrow text-accent">{dict.about.hero.eyebrow}</p>
            <h1 className="display-lg mt-4">{dict.about.hero.title}</h1>
            <p className="mt-5 text-lg text-ink-soft">{dict.about.hero.body}</p>
          </header>
        </Container>
      </Section>

      <Section className="bg-paper-deep/50">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow text-accent">{dict.about.story.eyebrow}</p>
              <h2 className="display-md mt-4">{dict.about.story.title}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>{dict.about.story.p1}</p>
              <p>{dict.about.story.p2}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="display-md">{dict.about.values.title}</h2>
            <p className="mt-2 text-ink-soft">{dict.about.values.subtitle}</p>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {dict.about.values.items.map((item) => (
              <li key={item.title} className="rounded-card border border-line bg-paper p-6">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-forest text-paper">
        <Container>
          <h2 className="display-md">{dict.about.stats.title}</h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-3">
            {dict.about.stats.items.map((item) => (
              <div key={item.label}>
                <dd className="font-display text-5xl font-semibold text-accent-soft">
                  {item.value}
                </dd>
                <dt className="mt-2 text-sm text-paper/70">{item.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Testimonials
        title={dict.about.testimonials.title}
        items={dict.about.testimonials.items}
      />

      <JsonLd data={about} />
    </>
  );
}
