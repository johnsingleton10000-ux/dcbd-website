import Link from 'next/link';
import { VAULT_RULES } from '../lib/constants';
import { stockLabel } from '../lib/catalog';
import DropImage from './DropImage';
import ProductCard from './ProductCard';
import VaultSidebar, { VaultStrip } from './VaultSidebar';
import FlipStats from './FlipStats';
import ProductArt from './ProductArt';

const GLOSSARY = [
  ['THC-A', 'Raw acidic form used on Estate labels.'],
  ['LIVE', 'Extracted from fresh-frozen material.'],
  ['ROSIN', 'Solventless pressure extract.'],
  ['BHO', 'Hydrocarbon extract family.'],
  ['CURED', 'Finished after a controlled cure.'],
  ['WATER HASH', 'Ice-water separation.']
];

const STRAINS = ['Indica', 'Sativa', 'Hybrid', 'Exotic', 'Limited Drop', 'Staff Picks'];

export default function VaultShell({ vault, products }) {
  const featured = products.filter((p) => p.poster || p.stock === 'limited-drop' || p.rarity === 'mythic' || p.rarity === 'legendary').slice(0, 3);
  const limited = products.filter((p) => p.stock === 'limited-drop');
  const grid = products.filter((p) => !limited.includes(p));

  return (
    <div className="grit-bg min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10">
        <DropImage src={vault.heroArt} alt={vault.name} className="absolute inset-0 h-full w-full object-cover opacity-35">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(138,43,226,0.28),transparent_32%)]" />
        </DropImage>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.4fr_0.7fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-gold">DCB Revolution</p>
            <p className="mt-2 text-sm text-zinc-400">Flip the Game. Join the Revolution.</p>
          </div>
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-200">{vault.kicker}</p>
            <h1 className="font-display mt-3 text-5xl text-gold md:text-7xl">{vault.headline}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300 md:text-base">{vault.lede}</p>
          </div>
          <blockquote className="rounded-2xl border border-gold/30 bg-black/60 p-4 text-sm font-black uppercase leading-relaxed text-gold">
            {vault.quote}
          </blockquote>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">
          <VaultSidebar active={vault.slug} />
          {(vault.slug === 'concentrates' || vault.slug === 'extracts') && (
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-zinc-500">Strain index</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {STRAINS.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-zinc-500">Glossary</p>
                <div className="mt-2 space-y-2">
                  {GLOSSARY.map(([k, v]) => (
                    <p key={k} className="text-[11px] text-zinc-400"><span className="font-black text-purple-200">{k}</span> — {v}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="mb-6 lg:hidden"><VaultStrip active={vault.slug} /></div>
          {vault.layout === 'exclusive' && <ExclusivePath />}
          {vault.layout === 'cali' && <CaliIntro vault={vault} />}
          {vault.layout === 'catalog' && <HashProcess />}
          {vault.layout === 'flower' && <FlowerReady />}
          {vault.layout === 'tea' && <TeaIntro />}
          {vault.layout === 'premium' && <PremiumIntro featured={featured} />}

          {!products.length && (
            <div className="rounded-[1.4rem] border border-white/10 bg-black/50 p-10 text-center">
              <p className="font-display text-4xl">This vault is framed</p>
              <p className="mt-3 text-zinc-400">The architecture is ready. Original product photography drops into these frames — nothing generic is invented to fill the space.</p>
            </div>
          )}

          {vault.layout === 'catalog' ? (
            <div className="grid gap-6">
              {products.map((product) => (
                <HashRow key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {grid.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          {limited.length > 0 && (
            <section className="mt-12">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Limited drop — rare finds. Higher power.</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {limited.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          )}

          {vault.slug === 'vault' && (
            <section className="mt-12 grid gap-3 md:grid-cols-5">
              {VAULT_RULES.map((rule) => (
                <div key={rule.title} className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                  <p className="text-sm font-black uppercase">{rule.title}</p>
                  <p className="mt-2 text-xs text-zinc-300">{rule.text}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function ExclusivePath() {
  return (
    <div className="exclusive-steps mb-8 flex flex-wrap gap-2">
      {['Access', 'Scarcity', 'Collection', 'Exclusivity'].map((step, i) => (
        <span key={step}>{i + 1}. {step}</span>
      ))}
    </div>
  );
}

function CaliIntro({ vault }) {
  return (
    <div className="mb-8 overflow-hidden rounded-[1.4rem] border border-yellow-500/30 gold-frame">
      <DropImage src={vault.supportArt} alt="Cali Collection wall" className="h-56 w-full object-cover md:h-72">
        <div className="product-stage theme-cali-gold h-56 md:h-72">
          <div className="relative z-10 flex h-full flex-col items-start justify-end p-6">
            <p className="text-xs font-black uppercase tracking-[0.3em]">Manc Made</p>
            <p className="font-display text-5xl">Estate Cali</p>
          </div>
        </div>
      </DropImage>
    </div>
  );
}

function HashProcess() {
  const steps = [
    ['Dry Sift', 'Kief collected from premium organic hemp trichomes.'],
    ['Cold Cured', 'Sift is cured at low temp for flavour and preservation.'],
    ['Pressed', 'Carefully pressed for texture, purity and potency.'],
    ['Hand Finished', 'Hand shaped or selected for the best quality.']
  ];
  return (
    <div className="mb-8 grid gap-3 sm:grid-cols-4">
      {steps.map(([t, d]) => (
        <div key={t} className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
          <p className="text-sm font-black uppercase text-green-300">{t}</p>
          <p className="mt-2 text-xs text-zinc-400">{d}</p>
        </div>
      ))}
    </div>
  );
}

function FlowerReady() {
  return (
    <div className="mb-8 rounded-[1.4rem] border border-green-400/20 bg-green-500/5 p-6">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-green-300">Flower Shop connected</p>
      <h2 className="mt-2 text-3xl font-black uppercase">Original bud photography only</h2>
      <p className="mt-3 max-w-3xl text-zinc-300">This hall lists Estate hemp flower with weight categories from the receipt poster. Generic cannabis stock is never used. Drop original flower images into <code className="text-gold">/public/artwork/drops</code> and they occupy these frames.</p>
      <Link href="/flower-shop" className="mt-4 inline-flex rounded-full bg-green-400 px-5 py-2 text-xs font-black uppercase text-black">Enter Flower Shop</Link>
    </div>
  );
}

function TeaIntro() {
  return (
    <div className="mb-8 rounded-[1.4rem] border border-lime-400/20 bg-black/40 p-6">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-lime-300">Herbal identity</p>
      <p className="mt-2 text-zinc-300">Tea keeps its own lounge language inside DCBD: menu tins from the 18GATE herbal wall, isolate hash tea, and Estate piatella tea. Cartoon filters stay with Flip Three, not the jars.</p>
    </div>
  );
}

function PremiumIntro({ featured }) {
  if (!featured.length) return null;
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      {featured.map((product) => (
        <Link key={product.slug} href={`/product/${product.slug}`} className="gold-frame overflow-hidden rounded-[1.3rem] bg-black">
          <ProductArt product={product} className="h-40" />
          <div className="p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-gold">{stockLabel(product.stock)}</p>
            <p className="mt-1 font-black uppercase">{product.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function HashRow({ product }) {
  return (
    <article className="grid overflow-hidden rounded-[1.3rem] border border-white/10 bg-black/40 md:grid-cols-[220px_1fr]">
      <ProductArt product={product} className="h-52 md:h-full" />
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-green-300">{product.family}</p>
            <h3 className="text-2xl font-black uppercase">{product.name}</h3>
            <p className="mt-2 text-sm text-zinc-300">{product.description}</p>
          </div>
          <Link href={`/product/${product.slug}`} className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-black uppercase">Open</Link>
        </div>
        {product.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-green-500/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-green-200">{tag}</span>
            ))}
          </div>
        )}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {product.variants.map((v) => (
            <div key={v.id} className="rounded-xl border border-white/10 p-2 text-center">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">{v.label}</p>
              <p className="font-black text-gold">{v.price != null ? `£${v.price}` : '—'}</p>
            </div>
          ))}
        </div>
        <div className="mt-4"><FlipStats product={product} /></div>
      </div>
    </article>
  );
}
