"use client"

import { Product, products } from "@/app/data/products";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = { slug: string; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  detailed: (CartItem & { product: Product })[];
  whatsappUrl: string;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "sat_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* ignore */ }
  }, [items]);

  const api = useMemo<CartCtx>(() => {
    const detailed = items
      .map((i) => ({ ...i, product: products.find((p) => p.slug === i.slug)! }))
      .filter((i) => i.product);

    const lines = detailed
      .map((i) => `• ${i.product.name} — Qty: ${i.qty} (${i.product.price})`)
      .join("%0A");
    const text =
      `Hello S.A. Traders, I would like to enquire about the following products:%0A%0A${lines}%0A%0APlease share best wholesale pricing and availability. Thank you!`;
    const whatsappUrl = `https://wa.me/919839661544?text=${text}`;

    return {
      items,
      count: items.reduce((s, i) => s + i.qty, 0),
      add: (slug, qty = 1) =>
        setItems((prev) => {
          const ex = prev.find((p) => p.slug === slug);
          return ex
            ? prev.map((p) => (p.slug === slug ? { ...p, qty: p.qty + qty } : p))
            : [...prev, { slug, qty }];
        }),
      remove: (slug) => setItems((prev) => prev.filter((p) => p.slug !== slug)),
      setQty: (slug, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((p) => p.slug !== slug)
            : prev.map((p) => (p.slug === slug ? { ...p, qty } : p)),
        ),
      clear: () => setItems([]),
      detailed,
      whatsappUrl,
    };
  }, [items]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
