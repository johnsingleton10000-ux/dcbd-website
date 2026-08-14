'use client';

import Link from 'next/link';
import { useCart } from '../lib/cart-context';
import DropImage from './DropImage';
import { dropSrc } from '../lib/artwork';

export default function AgeGate({ children }) {
  const cart = useCart();
  if (!cart.ready) return <div className="min-h-screen bg-black" />;
  if (cart.entered) return children;

  return (
    <main className="gate-bg min-h-screen px-4 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <section className="relative overflow-hidden rounded-[1.6rem] border border-purple-500/30 bg-black/70 p-8 card-glow">
          <DropImage src={dropSrc('gate18')} alt="18GATE entry to the Disability Estate" className="absolute inset-0 h-full w-full object-cover opacity-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,43,226,0.35),transparent_55%)]" />
          </DropImage>
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">18GATE</p>
            <h1 className="font-display mt-4 text-6xl leading-none md:text-8xl">Enter the Estate</h1>
            <p className="mt-5 max-w-xl text-lg text-zinc-200">You're not joining a brand. You're joining the Disability Estate. Real stories. Real struggles. Real solutions. From pain to purpose.</p>
            <p className="mt-6 font-premium text-gold">No corporate. Just community. No chains. Just change.</p>
          </div>
        </section>
        <section className="rounded-[1.6rem] border border-lime-400/20 bg-black/85 p-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-purple-300">Age verification</p>
          <h2 className="mt-3 text-3xl font-black uppercase">18+ to enter DCBD</h2>
          <p className="mt-4 text-zinc-300">The physical marketplace sits behind 18GATE. Membership, dashboard, vaults, Flip Three and collection all start here.</p>
          <div className="mt-8 grid gap-3">
            <button onClick={cart.enter} className="rounded-full bg-lime-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-black">
              Join our endz · I am 18+
            </button>
            <a href="https://www.google.com" className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-black uppercase tracking-widest">
              Leave
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">UK 18+ only. Responsible information. No medical claims. Lab notes confirmed before live fulfilment.</p>
          <Link href="/backstory" className="mt-4 inline-block text-xs font-black uppercase tracking-widest text-gold">Read the Estate backstory →</Link>
        </section>
      </div>
    </main>
  );
}
