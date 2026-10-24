import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { buttonStyles } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="bg-accent text-white">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="display-md">{dict.home.cta.title}</h2>
          <p className="mt-3 text-white/90">{dict.home.cta.subtitle}</p>
        </div>
        <Link
          href={`/${locale}/contact`}
          className={buttonStyles({
            size: "lg",
            className: "bg-white text-ink hover:bg-paper-deep",
          })}
        >
          {dict.home.cta.cta}
          <ArrowRight className="size-4" />
        </Link>
      </Container>
    </Section>
  );
}
