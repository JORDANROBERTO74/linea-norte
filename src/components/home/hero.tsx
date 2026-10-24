import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LeafIcon, TruckIcon } from "@/components/icons";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-paper-deep/60">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-2 text-accent">
            <LeafIcon className="size-4" />
            {dict.home.hero.eyebrow}
          </p>

          <h1 className="display-xl mt-5 font-display text-ink">{dict.home.hero.title}</h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            {dict.home.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={`/${locale}/collection`} className={buttonStyles({ size: "lg" })}>
              {dict.home.hero.cta}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`/${locale}/about`}
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              {dict.home.hero.secondary}
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
            <TruckIcon className="size-4 text-accent" />
            {dict.home.hero.note}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-deep">
            <Image
              src="/images/hero.webp"
              alt={dict.home.hero.title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
