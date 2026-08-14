import Link from 'next/link';
import { VAULTS } from '../lib/vaults';
import { JOURNEY, MIX_OFFER, BRAND } from '../lib/constants';
import { ORIGINAL_ASSETS, dropSrc } from '../lib/artwork';
import DropImage from '../components/DropImage';

export default function Home() {
  return (
    <main className="grit-bg">
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <DropImage src={ORIGINAL_ASSETS.hero} alt="DCBD Estate grit art engine" className="absolute inset-0 h-full w-full object-cover opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,43,226,0.25),transparent_40%)]" />
        </DropImage>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">18GATE is open · DCB Revolution</p>
            <h1 className="font-display mt-4 text-6xl leading-[0.85] md:text-8xl">Physical marketplace of the DCBD universe</h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">Not a generic shop. Vaults, original artwork, Flip Three rewards and Estate membership — built from the posters, menus and product sheets of DCBD / 18GATE.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/store" className="rounded-full bg-gold px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black">Enter the Store</Link>
              <Link href="/backstory" className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-black uppercase tracking-widest">The Backstory</Link>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-black/70 p-6 card-glow">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-300">The journey</p>
            <ol className="mt-4 grid gap-2">
              {JOURNEY.map((step, i) => (
                <li key={step.label}>
                  <Link href={step.href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-gold/40">
                    <span className="text-sm font-black uppercase"><span className="mr-2 text-gold">0{i + 1}</span>{step.label}</span>
                    <span className="text-xs text-zinc-400">{step.text}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Vaults</p>
          <h2 className="font-display mt-2 text-5xl md:text-6xl">Ten halls. One Estate.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {VAULTS.map((vault) => (
              <Link key={vault.slug} href={`/vaults/${vault.slug}`} className="rounded-[1.3rem] border border-white/10 bg-black/50 p-5 hover:border-gold/40">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">{vault.kicker}</p>
                <h3 className="mt-3 text-2xl font-black uppercase">{vault.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{vault.lede}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Link href="/flower-shop" className="overflow-hidden rounded-[1.6rem] border border-green-400/20 bg-black">
            <DropImage src={dropSrc('tradeVaultManchester')} alt="Trade Vault Manchester" className="h-56 w-full object-cover">
              <div className="product-stage theme-flower h-56" />
            </DropImage>
            <div className="p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-green-300">Flower Shop</p>
              <h2 className="mt-2 text-3xl font-black uppercase">A distinct hall inside the universe</h2>
              <p className="mt-3 text-zinc-400">Entrance, categories, membership and Flip Three — original flower photography only.</p>
            </div>
          </Link>
          <div className="rounded-[1.6rem] border border-orange-400/20 bg-black/70 p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-orange-300">{MIX_OFFER.title}</p>
            <h2 className="mt-2 text-3xl font-black uppercase">Personalized mix the bag</h2>
            <p className="mt-3 text-zinc-300">{MIX_OFFER.text}</p>
            <p className="mt-4 font-display text-5xl text-gold">£{MIX_OFFER.price}</p>
            <Link href="/store#mix" className="mt-5 inline-flex rounded-full bg-orange-500 px-6 py-3 text-xs font-black uppercase text-black">Build a mix in the store</Link>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-center text-sm text-zinc-500">{BRAND.movement}</p>
      </section>
    </main>
  );
}
