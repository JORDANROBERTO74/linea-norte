import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { buttonStyles } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Philosophy({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src="/images/about.webp"
              alt={dict.home.philosophy.title}
              fill
              sizes="(max-width: 768px) 90vw, 560px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-accent">{dict.home.philosophy.eyebrow}</p>
            <h2 className="display-lg mt-4">{dict.home.philosophy.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              {dict.home.philosophy.body}
            </p>
            <Link
              href={`/${locale}/about`}
              className={buttonStyles({ variant: "secondary", size: "lg", className: "mt-8" })}
            >
              {dict.home.philosophy.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
