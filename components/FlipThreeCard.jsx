import { attrMeta, rarityMeta } from '../lib/flip-three';

export default function FlipThreeCard({ card, compact = false, className = '', delay = 0 }) {
  const rarity = rarityMeta(card.rarity);
  const attr = attrMeta(card.attr);

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.15rem] bg-black gold-frame ${compact ? 'p-2' : 'p-3'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -right-6 -top-4 z-10 rotate-12">
        <span className="sticker lime text-[10px]" style={{ '--r': '12deg' }}>FLIP THREE</span>
      </div>
      <div className={`relative overflow-hidden rounded-[0.85rem] ${compact ? 'h-40' : 'h-56'} cut-frame`}>
        <img src={card.art} alt={`${card.name} original DCBD card art`} className="h-full w-full object-cover animate-card-flash" />
        <div className="absolute left-2 top-2 rounded-sm bg-black/80 px-2 py-1 text-[10px] font-black uppercase tracking-widest" style={{ color: rarity.color }}>
          {rarity.label}
        </div>
        <div className="absolute bottom-2 right-2 rounded-sm bg-black/75 px-2 py-1 text-[10px] font-black uppercase text-gold">
          ATK {card.atk} · DEF {card.def}
        </div>
      </div>
      <div className={compact ? 'mt-2' : 'mt-3'}>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neon">{card.series}</p>
        <h3 className="font-display mt-1 text-2xl leading-none uppercase">{card.name}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-widest text-zinc-400">{card.run} · {card.ability}</p>
        <div className="mt-2 flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
          <span className="text-xs font-black uppercase text-lime">{attr.icon} {attr.label}</span>
          <span className="text-[10px] font-bold uppercase text-zinc-400">{attr.text}</span>
        </div>
        {!compact && <p className="mt-2 text-sm text-zinc-400">{card.lore}</p>}
      </div>
    </article>
  );
}
