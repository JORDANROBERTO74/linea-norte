"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import {
  calculateTotals,
  cartCount,
  cartReducer,
  emptyCart,
  type CartState,
} from "@/lib/cart";
import type { CartItem, CartTotals } from "@/types";

const storageKey = "linea-norte.cart.v1";

type CartContextValue = {
  state: CartState;
  totals: CartTotals;
  count: number;
  hydrated: boolean;
  add: (item: CartItem) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): CartState | null {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CartState>;
    if (!Array.isArray(parsed.items)) return null;
    return { items: parsed.items };
  } catch {
    return null;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, emptyCart);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredCart();
    if (stored) {
      dispatch({ type: "hydrate", state: stored });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from localStorage after hydration
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // Ignore storage failures (private mode, quota).
    }
  }, [state, hydrated]);

  const add = useCallback((item: CartItem) => dispatch({ type: "add", item }), []);
  const remove = useCallback((key: string) => dispatch({ type: "remove", key }), []);
  const setQuantity = useCallback(
    (key: string, quantity: number) => dispatch({ type: "setQuantity", key, quantity }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const totals = useMemo(() => calculateTotals(state), [state]);
  const count = useMemo(() => cartCount(state), [state]);

  const value = useMemo<CartContextValue>(
    () => ({ state, totals, count, hydrated, add, remove, setQuantity, clear }),
    [state, totals, count, hydrated, add, remove, setQuantity, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
