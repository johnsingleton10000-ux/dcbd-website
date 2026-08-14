import FlipThreeCard from '../../components/FlipThreeCard';
import { FLIP_CARDS, FLIP_DECKS, FLIP_RARITY, FLIP_ATTRIBUTES } from '../../lib/flip-three';
import { VAULT_RULES } from '../../lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Flip Three Card Vault | DCBD',
  description: 'DCBD Flip Three collectible cards — original artwork, rarities, attack/defend/ability stats.'
};

export default function CardsPage() {
  return (
    <main className="concrete min-h-screen overflow-hidden px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-marker text-lime">The Card Vault</p>
        <h1 className="font-display text-6xl uppercase leading-none md:text-9xl">
          <span className="glitch spray" data-text="Flip Three">Flip Three</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-zinc-300">
          Every product becomes artwork. Every artwork becomes a card. Cards are the proof DCBD is a universe — not a catalogue of tiles.
        </p>
        <Link href="/arena" className="mt-6 inline-flex rounded-full bg-neon px-6 py-3 text-xs font-black uppercase tracking-widest">
          Open the arena
        </Link>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {FLIP_DECKS.map((deck) => (
            <div key={deck.id} className="rounded-2xl border border-gold/30 bg-black/70 p-4">
              <h2 className="font-display text-2xl uppercase leading-none">{deck.name}</h2>
              <p className="mt-2 text-sm text-zinc-400">{deck.theme}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {FLIP_RARITY.map((r) => (
            <span key={r.id} className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-widest" style={{ color: r.color }}>
              {r.label} · {r.text}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {FLIP_ATTRIBUTES.map((a) => (
            <span key={a.id} className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-zinc-300">
              {a.icon} {a.label}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FLIP_CARDS.map((card, i) => (
            <FlipThreeCard key={card.id} card={card} delay={i * 50} />
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {VAULT_RULES.map((rule) => (
            <div key={rule.title} className="rounded-2xl border border-white/10 bg-black/60 p-5">
              <p className="font-black uppercase text-gold">{rule.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{rule.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-widest text-zinc-500">18+ only. Cards are catalogue and play pieces. No medical claims. Lab details confirmed before live checkout.</p>
      </div>
    </main>
  );
}
