'use client';

import DropImage from './DropImage';

export default function ProductArt({ product, className = '' }) {
  const theme = `theme-${product.artTheme || 'purple-tea'}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <DropImage src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover">
        <div className={`product-stage ${theme}`}>
          <div className="relative z-10 flex h-full min-h-[220px] flex-col items-center justify-center p-5 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-gold">{product.family}</p>
            <h3 className="font-display mt-2 text-4xl leading-none">{product.name}</h3>
            {product.sizeLabel && <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-purple-200">{product.sizeLabel}</p>}
          </div>
        </div>
      </DropImage>
    </div>
  );
}
