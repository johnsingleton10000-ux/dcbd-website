import Link from 'next/link';
import RapidCutReel from '../components/RapidCutReel';
import FlipThreeCard from '../components/FlipThreeCard';
import GraffitiLayer from '../components/GraffitiLayer';
import { ARTWORK_WALL, PRODUCTS } from '../lib/catalog';
import { FLIP_CARDS, FLIP_ATTRIBUTES, FLIP_RARITY } from '../lib/flip-three';
import { BRAND, EMAIL, MEMBERSHIP, MIX_OFFER, PILLARS, PHONE, WHATSAPP, VAULT_RULES } from '../lib/constants';

const featured = FLIP_CARDS.filter((c) => ['gelato-cake', 'purple-punch', 'mcr-legend', 'napoleon'].includes(c.id));

export default function Home() {
  return (
    <main className="relative overflow-hidden concrete">
      <GraffitiLayer />

      <section className="relative min-h-[92vh] overflow-hidden">
        <img src="/art/manchester-night.jpg" alt="Original Northern Quarter night artwork" className="absolute inset-0 h-full w-full object-cover" />
        <img src="/art/night-car.jpg" alt="" className="absolute right-[-8%] top-[18%] hidden w-[46%] rotate-3 opacity-80 lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="sticker lime" style={{ '--r': '-6deg' }}>18+ ENTRY</span>
              <span className="sticker gold" style={{ '--r': '5deg' }}>MCR MADE</span>
              <span className="sticker pink" style={{ '--r': '-2deg' }}>{MEMBERSHIP.price} ACCESS</span>
            </div>
            <p className="mt-6 text-[11px] font-black uppercase tracking-[0.45em] text-gold">Welcome to the DCBD Estate</p>
            <h1 className="font-display mt-3 text-6xl uppercase leading-[0.8] md:text-8xl lg:text-9xl">
              <span className="glitch spray" data-text="Built Different">Built Different</span>
            </h1>
            <p className="font-marker mt-4 text-2xl text-lime md:text-4xl">{BRAND.tagline}</p>
            <p className="mt-5 max-w-xl text-lg text-zinc-300">
              Raw Manchester road energy. Original artwork. Flip Three cards in the mix. Not a corporate shop template — a universe with bass, brick, and a gate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#vault" className="rounded-full bg-lime px-8 py-4 text-center text-sm font-black uppercase tracking-widest text-black">I am 18+ · enter the vault</a>
              <Link href="/arena" className="rounded-full border border-neon bg-neon/20 px-8 py-4 text-center text-sm font-black uppercase tracking-widest">Flip Three arena</Link>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-3 text-xs uppercase tracking-widest">
              <Stat k="Flip Three" v="Cards in play" />
              <Stat k={MEMBERSHIP.price} v="Movement access" />
              <Stat k="MCR" v="Northern Quarter" />
              <Stat k="18 Gate" v="Community first" />
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <img src="/art/estate-ape-cap.jpg" alt="Original DCBD ape mascot artwork" className="relative z-10 w-full rotate-2 rounded-[1.5rem] object-cover gold-frame" />
            <img src="/art/manc-bee.jpg" alt="Original Manc bee mascot" className="absolute -left-8 -top-8 z-20 w-28 rotate-[-12deg] rounded-2xl purple-frame md:w-36" />
            <img src="/art/flip-gelato.jpg" alt="Gelato Cake Flip Three card" className="absolute -bottom-10 -right-6 z-20 w-32 rotate-6 rounded-xl gold-frame md:w-40" />
            <span className="sticker white absolute bottom-8 left-4 z-30 text-sm" style={{ '--r': '-10deg' }}>ORIGINAL ART · NOT STOCK</span>
          </div>
        </div>
      </section>

      <RapidCutReel />

      <section id="vault" className="relative px-4 py-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/art/estate-hud.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">Official DCBD Estate Vault</p>
              <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">The menu is a card wall</h2>
            </div>
            <p className="max-w-sm font-marker text-xl text-lime">Collect. Trade. Laugh. Flex. Be legendary every day.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRODUCTS.map((p, i) => (
              <article key={p.name} className={`relative overflow-hidden rounded-[1.2rem] bg-black/80 p-3 ${i % 2 ? 'rotate-1' : '-rotate-1'} ${p.attr === 'attack' ? 'gold-frame' : p.attr === 'defend' ? 'purple-frame' : 'border border-lime/40'}`}>
                <div className="cut-frame h-44 overflow-hidden rounded-xl">
                  <img src={p.art} alt={`${p.name} original artwork`} className="h-full w-full object-cover" />
                </div>
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] text-gold">{p.type}</p>
                <h3 className="font-display text-2xl uppercase leading-none">{p.name}</h3>
                <p className="mt-1 text-sm font-black text-lime">{p.price}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">{p.attr} · Flip Three live</p>
                <p className="mt-2 text-sm text-zinc-400">{p.note}</p>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Hi ElCastroPlugged, I'd like to order ${p.name}.`)}`}
                  className="mt-3 block rounded-full bg-neon py-2 text-center text-[11px] font-black uppercase tracking-widest"
                >
                  Order / enquire
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8 jagged bg-orange-500 px-5 py-4 text-black">
            <p className="font-ops text-xl uppercase">{MIX_OFFER.title} · {MIX_OFFER.price}</p>
            <p className="font-black uppercase">{MIX_OFFER.text}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-4 py-20">
        <img src="/art/estate-gorilla.jpg" alt="" className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-neon">Flick 3 / Flip Three</p>
          <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">Not just a shop. Cards in the bloodstream.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((card, i) => (
              <FlipThreeCard key={card.id} card={card} delay={i * 80} />
            ))}
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {VAULT_RULES.map((rule) => (
              <div key={rule.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-black uppercase text-gold">{rule.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{rule.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {FLIP_ATTRIBUTES.map((a) => (
              <span key={a.id} className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-widest">
                {a.icon} {a.label} — {a.text}
              </span>
            ))}
          </div>
          <Link href="/arena" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-black uppercase tracking-widest text-black">
            Battle in the arena
          </Link>
        </div>
      </section>

      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">Heart of the Estate</p>
              <h2 className="font-display text-6xl uppercase leading-none">One account. One ecosystem. Endless growth.</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {['Shopping', 'Education', 'Community', 'Gameplay', 'Collections', 'Rewards'].map((item) => (
                  <div key={item} className="rounded-xl border border-neon/40 bg-neon/10 p-4 text-center font-black uppercase tracking-widest">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/art/estate-hud.jpg" alt="Original Estate HUD artwork" className="w-full rotate-[-2deg] rounded-[1.5rem] object-cover purple-frame" />
              <span className="sticker gold absolute -left-3 top-6" style={{ '--r': '-12deg' }}>INTERFACE CUT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-lime">Estate Artwork Library</p>
          <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">Original frames. No stock filler.</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {ARTWORK_WALL.map((art, i) => (
              <figure key={art.title} className={`relative overflow-hidden rounded-2xl ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={art.src} alt={`${art.title} original DCBD artwork`} className={`w-full object-cover ${i % 3 === 0 ? 'h-full min-h-[22rem]' : 'h-48 md:h-56'}`} />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold">{art.tag}</p>
                  <p className="font-display text-2xl uppercase leading-none">{art.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="relative overflow-hidden px-4 py-24">
        <img src="/art/estate-gate.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-5xl rounded-[1.8rem] border border-gold/50 bg-black/80 p-8 card-glow md:p-14">
          <span className="sticker lime" style={{ '--r': '-5deg' }}>{MEMBERSHIP.kicker}</span>
          <p className="mt-6 text-[11px] font-black uppercase tracking-[0.4em] text-gold">Estate Access</p>
          <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">{MEMBERSHIP.price}<span className="text-3xl text-zinc-400"> {MEMBERSHIP.cadence}</span></h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">{MEMBERSHIP.pitch}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Flip Three arena & vault rules', 'Voice on flavours, art, drops', 'Education hub · community endz'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-black uppercase tracking-widest text-sm">{item}</div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-neon/20 p-4">
                <p className="font-black uppercase text-lime">{p.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{p.text}</p>
              </div>
            ))}
          </div>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent('Hi ElCastroPlugged, I want Estate Access at £5.99 — not a box, a key to the movement.')}`}
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-lime via-gold to-neon px-8 py-4 text-sm font-black uppercase tracking-widest text-black"
          >
            Claim {MEMBERSHIP.price} Estate Access
          </a>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-purple-300">Hemp Education Hub</p>
            <h2 className="font-display text-6xl uppercase leading-none">Knowledge over hype</h2>
            <p className="mt-5 text-zinc-300">The Individual Cannabinoid Revolution stays responsible: no medical promises, no fake guarantees. Lab-focused. 18+ only.</p>
            <Link href="/education" className="mt-6 inline-flex rounded-full bg-lime px-8 py-4 text-sm font-black uppercase tracking-widest text-black">Learn the revolution</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {FLIP_RARITY.slice(0, 6).map((r) => (
              <div key={r.id} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: r.color }}>{r.label}</p>
                <p className="mt-1 text-sm text-zinc-400">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="checkout" className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.8rem] gold-frame bg-black/80">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">Direct service</p>
              <h2 className="font-display text-6xl uppercase leading-none">Talk to ElCastroPlugged</h2>
              <p className="mt-5 text-zinc-300">Not a faceless checkout. Direct dialogue, payment choice, clever science. Nothing under £18 delivered on product. Membership sits at {MEMBERSHIP.price} because the movement should be reachable.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi ElCastroPlugged, I'd like to place an order.")}`} className="rounded-full bg-lime px-6 py-3 text-center text-xs font-black uppercase tracking-widest text-black">WhatsApp the Estate</a>
                <a href={`mailto:${EMAIL}?subject=DCBD%20Estate`} className="rounded-full border border-white/20 px-6 py-3 text-center text-xs font-black uppercase tracking-widest">Email {EMAIL}</a>
              </div>
              <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">WhatsApp {PHONE} · 18+ only · UK law · lab testing · no medical claims</p>
            </div>
            <img src="/art/estate-gorilla.jpg" alt="Original Estate commander artwork" className="h-full min-h-[22rem] w-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-3">
      <p className="font-display text-3xl leading-none text-gold">{k}</p>
      <p className="text-zinc-400">{v}</p>
    </div>
  );
}
