import Link from 'next/link';
import { productsInVault } from '../../lib/catalog';
import { WEIGHT_CATEGORIES as RECEIPT_WEIGHTS } from '../../lib/flip-three';
import ProductCard from '../../components/ProductCard';
import DropImage from '../../components/DropImage';
import { dropSrc } from '../../lib/artwork';

export default function FlowerShopPage() {
  const products = productsInVault('flower');

  return (
    <main className="min-h-screen bg-[#07140c]">
      <section className="relative overflow-hidden px-4 py-20">
        <DropImage src={dropSrc('tradeVaultManchester')} alt="Trade Vault Manchester flower hall" className="absolute inset-0 h-full w-full object-cover opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.2),transparent_40%)]" />
        </DropImage>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-green-300">Flower Shop · DCBD universe</p>
          <h1 className="font-display mt-4 text-6xl md:text-8xl">Enter the Flower Shop</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">A distinct hall. Original Estate bud photography only. Weight categories from the Estate receipt. Membership and Flip Three stay connected.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/store" className="rounded-full border border-white/20 px-6 py-3 text-xs font-black uppercase">Back to DCBD Store</Link>
            <Link href="/dashboard#membership" className="rounded-full bg-green-400 px-6 py-3 text-xs font-black uppercase text-black">Membership</Link>
            <Link href="/cards" className="rounded-full bg-gold px-6 py-3 text-xs font-black uppercase text-black">Flip Three</Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-green-300">Categories</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Premium Grade', 'Hemp Derived', 'Vault Approved', 'Lab Verified'].map((c) => (
              <span key={c} className="rounded-full border border-green-400/20 px-4 py-2 text-xs font-black uppercase tracking-widest">{c}</span>
            ))}
          </div>
          <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-gold">Receipt weights</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {RECEIPT_WEIGHTS.map((w) => (
              <span key={w} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-black">{w}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase">Listed flower</h2>
          <p className="mt-3 max-w-3xl text-zinc-400">Only hemp flower named on the Trade Vault Manchester board is listed. Additional strains wait for original photography — the frames stay ready.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
