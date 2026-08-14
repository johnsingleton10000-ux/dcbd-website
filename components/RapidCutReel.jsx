'use client';

import { useEffect, useState } from 'react';
import { RAPID_CUTS } from '../lib/catalog';

const INTERVAL = 900;

export default function RapidCutReel() {
  const [i, setI] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setFlash(true);
      window.setTimeout(() => {
        setI((n) => (n + 1) % RAPID_CUTS.length);
        setFlash(false);
      }, 70);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const cut = RAPID_CUTS[i];
  const prev = RAPID_CUTS[(i + RAPID_CUTS.length - 1) % RAPID_CUTS.length];
  const next = RAPID_CUTS[(i + 1) % RAPID_CUTS.length];

  return (
    <section className="relative overflow-hidden border-y border-gold/30 bg-black">
      <div className="absolute inset-0 circuit opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-3 px-4 py-6 md:grid-cols-12 md:items-center">
        <div className="md:col-span-3">
          <p className="font-marker text-lg text-lime">rapid cuts</p>
          <h2 className="font-display text-5xl uppercase leading-[0.85]">Product → Art → Card → Street</h2>
          <p className="mt-3 text-sm uppercase tracking-widest text-zinc-400">No long static shots. The Estate moves like a bassline.</p>
        </div>
        <div className="relative md:col-span-6">
          <div className={`cut-frame gold-frame relative h-64 overflow-hidden rounded-2xl md:h-80 ${flash ? 'opacity-0' : 'opacity-100'} transition-opacity duration-75`}>
            <img src={cut.src} alt={cut.caption} className="h-full w-full object-cover" />
            <div className="absolute left-3 top-3 rounded-sm bg-neon px-2 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-white">
              {cut.label}
            </div>
            <p className="absolute bottom-3 left-3 font-display text-3xl uppercase">{cut.caption}</p>
          </div>
          {flash && <div className="absolute inset-0 rounded-2xl bg-white/80 mix-blend-overlay" />}
        </div>
        <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-1">
          <Mini src={prev.src} label="LAST" kind={prev.label} />
          <Mini src={next.src} label="NEXT" kind={next.label} />
        </div>
      </div>
      <div className="overflow-hidden border-t border-white/10 bg-neon/20 py-2">
        <div className="marquee-track gap-8 px-4 font-ops text-sm uppercase tracking-[0.35em] text-white">
          {Array.from({ length: 8 }).map((_, n) => (
            <span key={n} className="flex gap-8 whitespace-nowrap">
              <span>product</span>
              <span className="text-gold">artwork</span>
              <span>card</span>
              <span className="text-lime">street</span>
              <span>interface</span>
              <span className="text-gold">game mechanic</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mini({ src, label, kind }) {
  return (
    <div className="cut-frame relative h-28 overflow-hidden rounded-xl border border-white/15">
      <img src={src} alt="" className="h-full w-full object-cover opacity-80" />
      <span className="absolute left-2 top-2 text-[10px] font-black uppercase tracking-widest text-gold">{label}</span>
      <span className="absolute bottom-2 left-2 text-xs font-black uppercase">{kind}</span>
    </div>
  );
}
