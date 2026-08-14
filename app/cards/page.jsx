import Link from 'next/link';
import { FLIP_THREE_DECKS, FLIP_RARITY, FLIP_ATTRIBUTES, BB1_SET } from '../../lib/flip-three';
import { dropSrc } from '../../lib/artwork';
import DropImage from '../../components/DropImage';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../lib/catalog';

export default function CardsPage() {
  const decks = PRODUCTS.filter((p) => p.family === 'Flip Three Deck');
  const trapstar = PRODUCTS.find((p) => p.slug === 'bb1-trapstar-manchester-takeover');

  return (
    <main className="grit-bg px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Flip Three</p>
        <h1 className="font-display mt-3 text-6xl md:text-8xl">3 decks. 90 cards. Endless legacy.</h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-300">The physical store stays connected to the collectible layer. This page is the card bible — not the full playable game.</p>

        <div id="flip-three" className="mt-8 overflow-hidden rounded-[1.6rem] border border-gold/30">
          <DropImage src={dropSrc('flipThreeDecks')} alt="Flip Three three-deck master sheet" className="h-80 w-full object-cover md:h-[28rem]">
            <DropImage src={dropSrc('flipThreeDecksAlt')} alt="Flip Three decks detail" className="h-80 w-full object-cover md:h-[28rem]">
              <div className="product-stage theme-ancient-gold h-80 md:h-[28rem]">
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <p className="text-xs font-black uppercase tracking-[0.3em]">History. Legends. Hustle.</p>
                  <p className="font-display text-5xl">Play the past. Own the future.</p>
                </div>
              </div>
            </DropImage>
          </DropImage>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {FLIP_THREE_DECKS.map((deck) => (
            <article key={deck.id} className="rounded-[1.3rem] border border-gold/20 bg-black/50 p-5">
              <h2 className="text-2xl font-black uppercase">{deck.name}</h2>
              <p className="mt-2 text-sm text-zinc-400">{deck.theme}</p>
              <p className="mt-3 text-xs font-black uppercase tracking-widest text-gold">{deck.commons} common · {deck.luxury} luxury</p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-zinc-500">Named from the master sheet</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                {deck.luxuryNames.slice(0, 5).map((n) => <li key={n}>{n}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {decks.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>

        <section className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {FLIP_RARITY.map((r) => (
            <div key={r.id} className="rounded-2xl border border-white/10 p-4">
              <p className="text-sm font-black uppercase" style={{ color: r.color }}>{r.label}</p>
              <p className="mt-2 text-xs text-zinc-400">{r.text}</p>
            </div>
          ))}
        </section>
        <section className="mt-6 grid gap-4 md:grid-cols-4">
          {FLIP_ATTRIBUTES.map((a) => (
            <div key={a.id} className="rounded-2xl border border-white/10 p-4">
              <p className="text-sm font-black uppercase text-gold">{a.label}</p>
              <p className="mt-2 text-xs text-zinc-400">{a.text}</p>
            </div>
          ))}
        </section>

        {trapstar && (
          <section className="mt-14">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-gold">{BB1_SET.name}</p>
            <h2 className="mt-2 text-4xl font-black uppercase">Manchester Takeover set</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {BB1_SET.breakdown.map((row) => (
                <div key={row.rarity} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-sm font-black uppercase">{row.count} {row.rarity}</p>
                  <p className="mt-2 text-xs text-zinc-400">{row.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 max-w-md"><ProductCard product={trapstar} /></div>
          </section>
        )}

        <p className="mt-10 text-sm text-zinc-500">Physical purchases can later award associated cards, rarity pulls, XP, boosters and collection progress. Those fields already exist on every product record.</p>
        <Link href="/store" className="mt-4 inline-flex text-xs font-black uppercase tracking-widest text-gold">Return to the physical store</Link>
      </div>
    </main>
  );
}
