import { region } from "@/config/region";
import type { Locale } from "@/i18n/config";

const dateLocales: Record<Locale, string> = {
  en: "en-GB",
  es: "es-ES",
};

export function formatPrice(minorUnits: number): string {
  return new Intl.NumberFormat(region.locale, {
    style: "currency",
    currency: region.currency,
    minimumFractionDigits: 2,
  }).format(minorUnits / 100);
}

export function formatDate(value: string, locale: Locale): string {
  return new Intl.DateTimeFormat(dateLocales[locale], {
    dateStyle: "medium",
  }).format(new Date(value));
}
