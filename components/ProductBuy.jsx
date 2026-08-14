'use client';

import { useState } from 'react';
import { formatPrice } from '../lib/catalog';
import { useCart } from '../lib/cart-context';

export default function ProductBuy({ product }) {
  const cart = useCart();
  const [variantId, setVariantId] = useState(product.variants?.[0]?.id);
  const variant = product.variants?.find((v) => v.id === variantId) || product.variants?.[0];

  return (
    <div className="rounded-[1.4rem] border border-gold/30 bg-black/60 p-6">
      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gold">Size / variant</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {product.variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setVariantId(v.id)}
            className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-widest ${variantId === v.id ? 'border-gold bg-gold text-black' : 'border-white/15 text-zinc-300'}`}
          >
            {v.label} · {formatPrice(v.price)}
          </button>
        ))}
      </div>
      <p className="mt-5 font-display text-5xl text-gold">{formatPrice(variant?.price)}</p>
      <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">{product.membership?.benefit} · +{product.membership?.xp || 0} XP</p>
      <button className="rev-btn mt-5" onClick={() => cart.add(product, variant)}>
        {variant?.price == null ? 'Ask Rev Desk' : 'Add to Rev Cart'}
      </button>
    </div>
  );
}
