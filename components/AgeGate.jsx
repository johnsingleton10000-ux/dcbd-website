'use client';

import { useEffect, useState } from 'react';

export default function AgeGate({ children }) {
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setOk(window.sessionStorage.getItem('dcbd-18') === '1');
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="min-h-screen bg-black" />;
  }

  if (ok) return children;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <img src="/art/estate-gate.jpg" alt="Enter the Estate original artwork" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-5 py-16 text-center">
        <span className="sticker green text-lg" style={{ '--r': '-4deg' }}>18 GATE</span>
        <h1 className="font-display mt-6 text-6xl uppercase leading-none md:text-8xl">
          <span className="glitch spray" data-text="ENTER THE ESTATE">ENTER THE ESTATE</span>
        </h1>
        <p className="mt-5 font-body text-lg uppercase tracking-[0.2em] text-zinc-300">No corporate. Just community. No chains. Just change.</p>
        <p className="mt-4 max-w-md text-zinc-400">This universe is 18+ only. Confirm you are old enough to enter the Disability Estate / DCBD movement.</p>
        <button
          type="button"
          className="mt-8 rounded-full bg-lime px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-black"
          onClick={() => {
            window.sessionStorage.setItem('dcbd-18', '1');
            setOk(true);
          }}
        >
          I am 18+ · Join our endz
        </button>
        <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">UK hemp-derived culture · no medical claims</p>
      </div>
    </div>
  );
}
