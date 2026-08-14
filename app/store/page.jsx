import Link from 'next/link';
import { VAULTS } from '../../lib/vaults';
import { MIX_OFFER, VAULT_RULES } from '../../lib/constants';
import { ORIGINAL_ASSETS, dropSrc } from '../../lib/artwork';
import { PRODUCTS, productsInVault } from '../../lib/catalog';
import DropImage from '../../components/DropImage';
import ProductCard from '../../components/ProductCard';

export default function StorePage() {
  const spotlight = [
    PRODUCTS.find((p) => p.slug === 'estate-cali-concentrate'),
    PRODUCTS.find((p) => p.slug === 'blue-cheese-x-fyreberry-patela'),
    PRODUCTS.find((p) => p.slug === 'isolate-hash-thca'),
    PRODUCTS.find((p) => p.slug === 'apples-bananas-thca-piatella')
  ].filter(Boolean);

  return (
    <main className="grit-bg px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">DCBD physical marketplace</p>
        <h1 className="font-display mt-3 text-6xl md:text-8xl">The Store</h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-300">Vaults first. Original artwork first. Flip Three stays wired into every product without turning this layer into the full game.</p>

        <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/10">
          <DropImage src={dropSrc('estateMenu')} alt="Estate concentrates, hashes and e-liquids menu" className="h-72 w-full object-cover md:h-96">
            <DropImage src={ORIGINAL_ASSETS.caliGrid} alt="Cali collection wall" className="h-72 w-full object-cover md:h-96">
              <div className="product-stage theme-orange-resin h-72 md:h-96">
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">Not just a code, it's a way of life</p>
                  <p className="font-display text-5xl">Estate menu</p>
                </div>
              </div>
            </DropImage>
          </DropImage>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {VAULTS.map((vault) => (
            <Link key={vault.slug} href={`/vaults/${vault.slug}`} className="rounded-2xl border border-white/10 bg-black/50 p-4">
              <p className="text-xs font-black uppercase text-gold">{productsInVault(vault.slug).length} listed</p>
              <h2 className="mt-2 text-xl font-black uppercase">{vault.name}</h2>
              <p className="mt-2 text-xs text-zinc-400">{vault.kicker}</p>
            </Link>
          ))}
        </div>

        <section className="mt-14">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-300">Artwork-led spotlight</p>
          <h2 className="mt-2 text-4xl font-black uppercase">From the posters</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {spotlight.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section id="mix" className="mt-14 grid gap-6 rounded-[1.6rem] border border-orange-400/20 bg-black/60 p-6 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-orange-300">Why mix?</p>
            <h2 className="mt-2 text-4xl font-black uppercase">{MIX_OFFER.title}</h2>
            <p className="mt-3 text-zinc-300">{MIX_OFFER.text}</p>
            <p className="mt-4 text-sm text-zinc-400">Mix is an Estate mechanic, not a fake SKU. Choose three flavours from concentrates, hash or e-liquids and the Rev Desk confirms the bag.</p>
          </div>
          <div className="grid gap-3">
            {VAULT_RULES.map((rule) => (
              <div key={rule.title} className="rounded-2xl border border-white/10 p-4">
                <p className="font-black uppercase">{rule.title}</p>
                <p className="text-sm text-zinc-400">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
