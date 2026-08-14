import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProduct, relatedProducts, stockLabel } from '../../../lib/catalog';
import ProductArt from '../../../components/ProductArt';
import FlipStats from '../../../components/FlipStats';
import ProductBuy from '../../../components/ProductBuy';
import ProductCard from '../../../components/ProductCard';
import DropImage from '../../../components/DropImage';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  return { title: product ? `${product.name} | DCB Revolution` : 'Product' };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const related = relatedProducts(product);

  return (
    <main className="grit-bg px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-gold">
          <Link href="/store">Store</Link>
          {product.vaults.map((v) => (
            <span key={v}> · <Link href={`/vaults/${v}`}>{v.replace('-', ' ')}</Link></span>
          ))}
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 gold-frame">
            <DropImage src={product.poster || product.image} alt={product.name} className="h-[420px] w-full object-cover md:h-[540px]">
              <ProductArt product={product} className="h-[420px] md:h-[540px]" />
            </DropImage>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-purple-300">{product.family}</p>
            <h1 className="font-display mt-2 text-6xl">{product.name}</h1>
            {product.tagline && <p className="mt-3 text-lg font-black uppercase text-gold">{product.tagline}</p>}
            <p className="mt-4 text-zinc-300">{product.description}</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-zinc-500">{stockLabel(product.stock)} · {product.category}</p>
            {product.facts && (
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {product.facts.map((fact) => (
                  <li key={fact} className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm">{fact}</li>
                ))}
              </ul>
            )}
            {product.flavours && (
              <div className="mt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-gold">Available in alternative flavours</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.flavours.map((f) => (
                    <span key={f} className="rounded-full border border-gold/30 px-3 py-1 text-[11px] font-black uppercase tracking-widest">{f}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-6"><FlipStats product={product} /></div>
            <div className="mt-6"><ProductBuy product={product} /></div>
          </div>
        </div>
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-3xl font-black uppercase">Connected Estate pieces</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
