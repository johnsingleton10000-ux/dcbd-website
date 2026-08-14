'use client';

import { useMemo, useState } from 'react';
import FlipThreeCard from './FlipThreeCard';
import { FLIP_CARDS, handPower, pickHouseHand } from '../lib/flip-three';

export default function FlipArena() {
  const [selected, setSelected] = useState([]);
  const [house, setHouse] = useState(null);
  const [result, setResult] = useState(null);

  const locked = selected.length === 3;

  function toggle(id) {
    if (house) return;
    setSelected((cur) => {
      if (cur.includes(id)) return cur.filter((x) => x !== id);
      if (cur.length >= 3) return cur;
      return [...cur, id];
    });
  }

  const playerCards = useMemo(
    () => selected.map((id) => FLIP_CARDS.find((c) => c.id === id)).filter(Boolean),
    [selected]
  );

  function battle() {
    const opp = pickHouseHand(3);
    const p = handPower(playerCards);
    const h = handPower(opp);
    setHouse(opp);
    setResult(p === h ? 'draw' : p > h ? 'win' : 'loss');
  }

  function reset() {
    setSelected([]);
    setHouse(null);
    setResult(null);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-marker text-lime">Flip Three Arena</p>
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">Pick three. Battle the Estate.</h2>
          <p className="mt-3 max-w-xl text-zinc-400">This is not a shop tile. Attack, defend, ability, cure-to-find-out — cards in play, XP in motion.</p>
        </div>
        <div className="rounded-2xl border border-gold/40 bg-black/70 px-5 py-3 text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Your deck</p>
          <p className="font-display text-4xl">{selected.length}/3</p>
          <p className="text-xs uppercase tracking-widest text-zinc-400">Power {handPower(playerCards)}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FLIP_CARDS.map((card, i) => {
          const on = selected.includes(card.id);
          return (
            <button key={card.id} type="button" onClick={() => toggle(card.id)} className="text-left">
              <div className={`transition ${on ? 'scale-[1.03] ring-4 ring-lime' : house ? 'opacity-40' : 'hover:-rotate-1'}`}>
                <FlipThreeCard card={card} compact delay={i * 40} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!locked || house}
          onClick={battle}
          className="rounded-full bg-neon px-8 py-3 text-sm font-black uppercase tracking-widest disabled:opacity-40"
        >
          Battle now
        </button>
        <button type="button" onClick={reset} className="rounded-full border border-white/20 px-8 py-3 text-sm font-black uppercase tracking-widest">
          Reset deck
        </button>
      </div>

      {house && (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime">You flipped</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {playerCards.map((c) => (
                <img key={c.id} src={c.art} alt={c.name} className="h-40 w-full rounded-xl object-cover gold-frame" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-neon">Estate hand</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {house.map((c) => (
                <img key={c.id} src={c.art} alt={c.name} className="h-40 w-full rounded-xl object-cover purple-frame" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 jagged bg-gradient-to-r from-purple-900 to-black px-6 py-8 text-center">
            <p className="font-display text-6xl uppercase">
              {result === 'win' && 'Estate Champion'}
              {result === 'loss' && 'House Took It'}
              {result === 'draw' && 'Dead Heat'}
            </p>
            <p className="mt-2 uppercase tracking-[0.3em] text-gold">
              You {handPower(playerCards)} · Estate {handPower(house)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
