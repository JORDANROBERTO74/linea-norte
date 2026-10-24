import { Container, Section } from "@/components/ui/layout";

type Testimonial = { quote: string; author: string; location: string };

export function Testimonials({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: Testimonial[];
}) {
  return (
    <Section className="bg-forest text-paper">
      <Container>
        <h2 className="display-md">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-lg text-paper/70">{subtitle}</p> : null}

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.author} className="rounded-card border border-white/10 bg-white/5 p-6">
              <p className="font-display text-lg leading-relaxed text-paper/90">
                “{item.quote}”
              </p>
              <p className="mt-5 text-sm font-semibold">{item.author}</p>
              <p className="text-xs text-paper/60">{item.location}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
