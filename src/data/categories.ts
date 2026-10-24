import type { CategoryId } from "@/types";

export type Category = {
  id: CategoryId;
};

export const categories: Category[] = [
  { id: "seating" },
  { id: "tables" },
  { id: "lighting" },
  { id: "storage" },
];

export const categoryOrder: CategoryId[] = categories.map((item) => item.id);
