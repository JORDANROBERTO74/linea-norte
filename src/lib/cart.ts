import { region } from "@/config/region";
import type { CartItem, CartTotals } from "@/types";

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: "hydrate"; state: CartState }
  | { type: "add"; item: CartItem }
  | { type: "remove"; key: string }
  | { type: "setQuantity"; key: string; quantity: number }
  | { type: "clear" };

export const emptyCart: CartState = { items: [] };

export function buildCartItem(product: {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
}, quantity: number): CartItem {
  return {
    key: product.id,
    productId: product.id,
    slug: product.slug,
    name: product.name,
    image: product.image,
    unitPrice: product.price,
    quantity,
  };
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return action.state;
    case "add": {
      const existing = state.items.find((item) => item.key === action.item.key);
      if (!existing) {
        return { items: [...state.items, action.item] };
      }
      return {
        items: state.items.map((item) =>
          item.key === action.item.key
            ? { ...item, quantity: Math.min(20, item.quantity + action.item.quantity) }
            : item,
        ),
      };
    }
    case "remove":
      return { items: state.items.filter((item) => item.key !== action.key) };
    case "setQuantity":
      return {
        items: state.items
          .map((item) =>
            item.key === action.key
              ? { ...item, quantity: Math.min(20, Math.max(0, action.quantity)) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "clear":
      return emptyCart;
    default:
      return state;
  }
}

export function calculateTotals(state: CartState): CartTotals {
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const shipping =
    subtotal === 0 || subtotal >= region.freeShippingThreshold ? 0 : region.shippingFlat;

  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
  };
}

export function cartCount(state: CartState): number {
  return state.items.reduce((sum, item) => sum + item.quantity, 0);
}
