import { Container, Section } from "@/components/ui/layout";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: ReadonlyArray<{ h: string; p: string }>;
}) {
  return (
    <Section className="pt-10 sm:pt-14">
      <Container className="max-w-3xl">
        <header>
          <h1 className="display-lg">{title}</h1>
          <p className="mt-3 text-sm text-ink-soft">{updated}</p>
        </header>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.h}>
              <h2 className="font-display text-xl font-semibold">{section.h}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{section.p}</p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
