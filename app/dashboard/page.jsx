import Link from 'next/link';
import { STRIPE_MEMBERSHIP, JOURNEY, VAULT_RULES } from '../../lib/constants';
import { dropSrc } from '../../lib/artwork';
import DropImage from '../../components/DropImage';
import { PRODUCTS } from '../../lib/catalog';

const CANNABINOIDS = [
  ['CBD', 'Non-intoxicating hemp cannabinoid. Education only.'],
  ['CBG', 'Often called the mother cannabinoid.'],
  ['CBN', 'Appears as other cannabinoids age.'],
  ['Delta-8', 'Discussed in the education centre. Check current UK rules.'],
  ['Delta-9', 'Discussed with legal-limit labelling. No medical claims.']
];

export default function DashboardPage() {
  const collection = PRODUCTS.filter((p) => p.collection?.trackable).length;

  return (
    <main className="min-h-screen bg-[#090909] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-[1.3rem] border border-white/10 bg-black/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gold">Trade Vault Manchester</p>
            <p className="mt-2 text-lg font-black uppercase">Est. 2023</p>
            <nav className="mt-6 grid gap-2 text-sm font-black uppercase tracking-widest text-zinc-300">
              <Link href="/dashboard" className="text-gold">Dashboard</Link>
              <Link href="/store">Products</Link>
              <Link href="/education">Education</Link>
              <Link href="/cards">Cards</Link>
              <Link href="/backstory">Backstory</Link>
              <Link href="/dashboard#membership">Membership</Link>
            </nav>
            <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center">
              <p className="text-xs font-black uppercase text-green-300">Vault status · Secure</p>
              <p className="mt-2 text-[11px] text-zinc-400">Encrypted connection language for later chain verification — not a live ledger yet.</p>
            </div>
          </aside>

          <div>
            <section className="relative overflow-hidden rounded-[1.5rem] border border-white/10 p-8">
              <DropImage src={dropSrc('tradeVaultManchester')} alt="Trade Vault Manchester" className="absolute inset-0 h-full w-full object-cover opacity-25">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.18),transparent_40%)]" />
              </DropImage>
              <div className="relative">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Time below revolution</p>
                <h1 className="font-display mt-3 text-5xl md:text-7xl">Knowledge. Freedom. Trade. Legacy.</h1>
                <p className="mt-4 max-w-2xl text-zinc-300">We don't follow systems. We build legacies. This dashboard is the Estate command layer — store, cards, education and membership — without shipping the full game yet.</p>
              </div>
            </section>

            <section className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                ['Vaults', '10', '/store'],
                ['Listed pieces', String(PRODUCTS.length), '/store'],
                ['Trackable collection', String(collection), '/dashboard#collection'],
                ['Flip Three decks', '3', '/cards#flip-three']
              ].map(([l, n, href]) => (
                <Link key={l} href={href} className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{l}</p>
                  <p className="mt-2 font-display text-4xl text-gold">{n}</p>
                </Link>
              ))}
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-black uppercase">Cannabinoid education centre</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {CANNABINOIDS.map(([n, t]) => (
                  <Link key={n} href="/education" className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="font-black text-green-300">{n}</p>
                    <p className="mt-2 text-xs text-zinc-400">{t}</p>
                    <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-gold">Learn more</p>
                  </Link>
                ))}
              </div>
            </section>

            <section id="membership" className="mt-8 grid gap-4 rounded-[1.4rem] border border-gold/30 bg-black/60 p-6 md:grid-cols-2">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.28em] text-gold">Inner Circle</p>
                <h2 className="mt-2 text-4xl font-black uppercase">Membership</h2>
                <p className="mt-3 text-zinc-300">Founder entry and monthly Inner Circle access. Members help steer flavours, artwork, drops and Flip Three direction.</p>
                <a href={STRIPE_MEMBERSHIP} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-black uppercase text-black">Join with Stripe</a>
              </div>
              <ul className="grid gap-2 text-sm text-zinc-300">
                <li className="rounded-xl border border-white/10 p-3">Rev Points with every flip</li>
                <li className="rounded-xl border border-white/10 p-3">XP on big orders for later discounts</li>
                <li className="rounded-xl border border-white/10 p-3">Luxury card vault language at lifetime spend thresholds</li>
                <li className="rounded-xl border border-white/10 p-3">Forum/community hook ready for Estate Born boards</li>
              </ul>
            </section>

            <section id="collection" className="mt-8">
              <h2 className="text-2xl font-black uppercase">Collection tracking</h2>
              <p className="mt-2 text-zinc-400">Every listed product already carries associated-card, rarity, XP, booster and collection fields so Flip Three, trading and future packs can connect later.</p>
              <div className="mt-4 grid gap-3 md:grid-cols-5">
                {VAULT_RULES.map((rule) => (
                  <div key={rule.title} className="rounded-2xl border border-white/10 p-4">
                    <p className="text-sm font-black uppercase">{rule.title}</p>
                    <p className="mt-2 text-xs text-zinc-400">{rule.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-black uppercase">Continue the journey</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {JOURNEY.map((step) => (
                  <Link key={step.label} href={step.href} className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-widest">{step.label}</Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
