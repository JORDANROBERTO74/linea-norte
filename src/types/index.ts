export type CategoryId = "seating" | "tables" | "lighting" | "storage";

export type Localized<T> = Record<"en" | "es", T>;

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  /** Price in minor units (cents). */
  price: number;
  image: string;
  /** Short material / origin line shown on cards. */
  material: Localized<string>;
  featured: boolean;
  details: Localized<string[]>;
  description: Localized<string>;
};

export type Article = {
  slug: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  body: Localized<string[]>;
  date: string;
  /** Stable label used as the tag on cards. */
  tag: Localized<string>;
  image: string;
  author: Localized<string>;
};

export type CartItem = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
};

export type CartTotals = {
  subtotal: number;
  shipping: number;
  total: number;
};
