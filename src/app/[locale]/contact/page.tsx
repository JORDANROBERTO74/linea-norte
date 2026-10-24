import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact/contact-form";
import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PinterestIcon,
} from "@/components/icons";
import { Container, Section } from "@/components/ui/layout";
import { site } from "@/config/site";
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
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function ContactPage({
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
          <h1 className="display-lg">{dict.contact.title}</h1>
          <p className="mt-3 text-lg text-ink-soft">{dict.contact.subtitle}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm dict={dict} />

          <aside className="space-y-6">
            <div className="rounded-card border border-line bg-paper p-6">
              <h2 className="font-display text-xl font-semibold">{dict.contact.info.title}</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <dt className="eyebrow text-ink-soft">{dict.contact.info.address}</dt>
                    <dd className="mt-1">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.country}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <dt className="eyebrow text-ink-soft">{dict.contact.info.email}</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${site.email}`} className="hover:text-accent">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <dt className="eyebrow text-ink-soft">{dict.contact.info.phone}</dt>
                    <dd className="mt-1">{site.phone}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <dt className="eyebrow text-ink-soft">{dict.contact.info.hours}</dt>
                    <dd className="mt-1">{dict.contact.info.hoursValue}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="rounded-card border border-line bg-paper p-6">
              <h2 className="font-display text-xl font-semibold">{dict.contact.social.title}</h2>
              <div className="mt-4 flex gap-3">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid size-11 place-items-center rounded-full border border-line text-ink transition hover:border-ink/40 hover:text-accent"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href={site.social.pinterest}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  className="grid size-11 place-items-center rounded-full border border-line text-ink transition hover:border-ink/40 hover:text-accent"
                >
                  <PinterestIcon className="size-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
