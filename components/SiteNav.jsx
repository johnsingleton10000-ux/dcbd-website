'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '../lib/cart-context';

const LINKS = [
  ['/store', 'Store'],
  ['/vaults/concentrates', 'Concentrates'],
  ['/vaults/calibolt', 'CaliBolt'],
  ['/vaults/hash', 'Hash'],
  ['/flower-shop', 'Flower Shop'],
  ['/backstory', 'Backstory'],
  ['/dashboard', 'Dashboard'],
  ['/cards', 'Flip Three']
];

export default function SiteNav() {
  const path = usePathname();
  const cart = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/store" className="leading-none">
          <span className="font-display text-3xl">DCB Revolution</span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Flip the Game. Join the Revolution.</span>
        </Link>
        <nav className="hidden items-center gap-5 text-[11px] font-black uppercase tracking-[0.16em] text-zinc-300 lg:flex">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className={path === href || path.startsWith(href + '/') ? 'text-gold' : 'hover:text-white'}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => cart.setOpen(true)} className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase text-black">
            Rev Cart {cart.count}
          </button>
          <button className="rounded-full border border-white/20 px-3 py-2 text-xs font-black uppercase lg:hidden" onClick={() => setOpen((v) => !v)}>
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="grid gap-2 border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-sm font-black uppercase tracking-widest">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
