import Link from 'next/link';
import DropImage from '../../components/DropImage';
import { ORIGINAL_ASSETS, dropSrc } from '../../lib/artwork';
import { JOURNEY } from '../../lib/constants';
import { FLIP_THREE_DECKS } from '../../lib/flip-three';

export default function BackstoryPage() {
  const chapters = [
    ['DCBD', 'The Estate is the family. Craft, cold brew, Manchester grit and California refinement sit in the same universe.'],
    ['18GATE', 'Adult entry. Disability Estate. From pain to purpose. You are not joining a brand — you are joining the endz.'],
    ['The cards', 'Every physical piece can carry a collectible identity: rarity, ability, attack, defence.'],
    ['Flip Three', 'Three decks. 90 cards. History. Legends. Hustle. Play the past. Own the future.'],
    ['Collecting', 'Commons, luxury, legendary and wonder pulls. Gold foil. Unique numbers. Holographic finish.'],
    ['Trading', 'Cards work in real life or the digital world. Architecture is ready for later trade rails.'],
    ['Physical products', 'Concentrates, CaliBolt, hash, extracts, tea, flower and accessories — the first physical layer.'],
    ['The wider universe', 'Dashboard, membership, forum/community and future booster packs plug into this store instead of sitting beside a generic shop.']
  ];

  return (
    <main className="grit-bg px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">The backstory</p>
        <h1 className="font-display mt-3 text-6xl md:text-8xl">Not another product category</h1>
        <p className="mt-5 max-w-3xl text-lg text-zinc-300">This is the world behind the store: DCBD → 18GATE → the cards → Flip Three → collecting → trading → physical products → the wider universe.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <DropImage src={dropSrc('estateReceipt')} alt="DCBD Estate Revolution poster" className="h-80 w-full rounded-[1.5rem] object-cover">
            <DropImage src={ORIGINAL_ASSETS.founder} alt="DCBD founder artwork" className="h-80 w-full rounded-[1.5rem] object-cover">
              <div className="product-stage theme-vault-gold h-80 rounded-[1.5rem]">
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <p className="font-display text-5xl">Estate Revolution</p>
                  <p className="text-sm text-gold">Cash flow — moving weight moving different</p>
                </div>
              </div>
            </DropImage>
          </DropImage>
          <DropImage src={dropSrc('gate18')} alt="18GATE Disability Estate" className="h-80 w-full rounded-[1.5rem] object-cover">
            <div className="product-stage theme-pluto h-80 rounded-[1.5rem]">
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-300">18GATE</p>
                <p className="font-display text-5xl">Disability Estate</p>
              </div>
            </div>
          </DropImage>
        </div>

        <ol className="mt-12 grid gap-4">
          {chapters.map(([title, text], i) => (
            <li key={title} className="grid gap-3 rounded-[1.3rem] border border-white/10 bg-black/40 p-5 md:grid-cols-[140px_1fr] md:items-center">
              <p className="font-display text-4xl text-gold">0{i + 1}</p>
              <div>
                <h2 className="text-2xl font-black uppercase">{title}</h2>
                <p className="mt-2 text-zinc-300">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-12">
          <h2 className="text-3xl font-black uppercase">Flip Three decks in this universe</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {FLIP_THREE_DECKS.map((deck) => (
              <Link key={deck.id} href={`/product/flip-three-${deck.slug.includes('pluto') ? 'plutos-babies' : deck.slug.includes('empire') ? 'empire-gangsters' : 'gangsta-ancient'}`} className="rounded-[1.3rem] border border-gold/20 bg-black/50 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-gold">{deck.commons} common · {deck.luxury} luxury</p>
                <h3 className="mt-2 text-2xl font-black uppercase">{deck.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{deck.theme}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          {JOURNEY.map((step) => (
            <Link key={step.label} href={step.href} className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-widest">{step.label}</Link>
          ))}
        </div>
      </div>
    </main>
  );
}
