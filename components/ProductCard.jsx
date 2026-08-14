'use client';

import Link from 'next/link';
import { formatPrice, stockLabel } from '../lib/catalog';
import { useCart } from '../lib/cart-context';
import FlipStats from './FlipStats';
import ProductArt from './ProductArt';

export default function ProductCard({ product }) {
  const cart = useCart();
  const price = product.price;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-zinc-950 card-glow">
      {price != null && <span className="price-ribbon">{formatPrice(price)}</span>}
      <div className="flex items-start justify-between gap-3 px-4 pb-2 pt-4">
        <div>
          <h3 className="text-lg font-black uppercase leading-tight">{product.name}</h3>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-purple-300">
            {product.family}{product.sizeLabel ? ` | ${product.sizeLabel}` : ''}
          </p>
        </div>
        <Link href={`/product/${product.slug}`} className="grid h-7 w-7 place-items-center rounded-full border border-white/20 text-xs font-black" aria-label={`Details for ${product.name}`}>
          i
        </Link>
      </div>
      <ProductArt product={product} className="mx-3 h-48 rounded-xl border border-white/10" />
      {product.tagline && (
        <div className="jagged-banner mx-3 mt-3 px-3 py-2 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.12em]">{product.tagline}</p>
          {product.description && <p className="mt-1 text-[11px] text-purple-100/80">{product.description.split('.')[0]}.</p>}
        </div>
      )}
      <div className="mt-3 px-3">
        <FlipStats product={product} />
      </div>
      <div className="mt-auto flex items-center justify-between px-4 pt-3 text-[11px] uppercase tracking-widest text-zinc-400">
        <span>{stockLabel(product.stock)}</span>
        <span>{product.membership?.benefit || 'Rev Points on flip'}</span>
      </div>
      <div className="p-3">
        <button
          className="rev-btn"
          onClick={() => cart.add(product)}
        >
          {price == null ? 'Ask Rev Desk' : 'Add to Rev Cart'}
        </button>
      </div>
    </article>
  );
}
