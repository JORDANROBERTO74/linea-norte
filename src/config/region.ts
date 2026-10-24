/**
 * Single source of truth for the market this store serves.
 * Change this file to relocate the store: currency, formatting and
 * shipping rules follow automatically.
 */
export const region = {
  id: "es",
  /** ISO 4217 code used for pricing and formatting. */
  currency: "EUR",
  /** BCP 47 locale used by Intl formatters. */
  locale: "es-ES",
  /** Flat shipping fee in minor units (cents). */
  shippingFlat: 1200,
  /** Order subtotal (minor units) from which shipping is free. */
  freeShippingThreshold: 30000,
} as const;

export type Region = typeof region;
