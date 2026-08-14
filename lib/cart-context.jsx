'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PHONE } from './constants';

const CartContext = createContext(null);
const KEY = 'dcbd-rev-cart';
const GATE_KEY = 'dcbd-18gate';

export function SiteProviders({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || '[]');
      if (Array.isArray(saved)) setItems(saved);
      if (localStorage.getItem(GATE_KEY) === 'yes') setEntered(true);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, ready]);

  const api = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const total = items.reduce((n, i) => n + (i.price || 0) * i.qty, 0);
    return {
      items,
      open,
      setOpen,
      entered,
      ready,
      count,
      total,
      enter() {
        localStorage.setItem(GATE_KEY, 'yes');
        setEntered(true);
      },
      add(product, variant) {
        const chosen = variant || product.variants?.[0];
        const lineId = `${product.slug}:${chosen?.id || 'default'}`;
        setItems((current) => {
          const existing = current.find((i) => i.lineId === lineId);
          if (existing) {
            return current.map((i) => (i.lineId === lineId ? { ...i, qty: i.qty + 1 } : i));
          }
          return [
            ...current,
            {
              lineId,
              slug: product.slug,
              name: product.name,
              family: product.family,
              variantLabel: chosen?.label || product.sizeLabel || 'Estate',
              price: chosen?.price ?? null,
              qty: 1,
              xp: product.membership?.xp || 0,
              revPoints: product.membership?.revPoints || 0
            }
          ];
        });
        setOpen(true);
      },
      remove(lineId) {
        setItems((current) => current.filter((i) => i.lineId !== lineId));
      },
      clear() {
        setItems([]);
      },
      checkoutWhatsApp() {
        if (!items.length) return;
        const lines = items
          .map((i) => `- ${i.name} (${i.variantLabel}) x${i.qty}${i.price != null ? ` = £${(i.price * i.qty).toFixed(2)}` : ' = enquiry'}`)
          .join('\n');
        const xp = items.reduce((n, i) => n + (i.xp || 0) * i.qty, 0);
        const cards = total >= 100 ? 'Yes — £100+ unlocks 22 cards and one upgrade pull' : 'Not yet — spend £100+ for the 22-card vault pull';
        const message = `Hi DCBD, I want to order from the physical marketplace.\n\n${lines}\n\nTotal: ${total ? `£${total.toFixed(2)}` : 'Estate enquiry'}\nFlip Three / Vault cards: ${cards}\nEstimated XP: ${xp}\n\nPlease confirm stock, lab notes and payment.`;
        window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
      }
    };
  }, [items, open, entered, ready]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside SiteProviders');
  return ctx;
}

export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
