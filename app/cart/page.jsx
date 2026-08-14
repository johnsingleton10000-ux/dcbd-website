'use client';

import Link from 'next/link';
import { useCart } from '../../lib/cart-context';
import { formatPrice } from '../../lib/catalog';

export default function CartPage() {
  const cart = useCart();

  return (
    <main className="grit-bg min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gold">Rev Cart</p>
        <h1 className="font-display mt-2 text-6xl">My Stash</h1>
        <p className="mt-3 text-zinc-400">WhatsApp checkout keeps the Rev Desk in the loop while Stripe membership stays on its own rail. Flip Three rewards calculate from the live stash total.</p>
        <div className="mt-8 space-y-3">
          {!cart.items.length && <p className="rounded-2xl border border-white/10 p-6 text-zinc-400">Empty stash. Open a vault and add an Estate piece.</p>}
          {cart.items.map((item) => (
            <div key={item.lineId} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div>
                <p className="font-black uppercase">{item.name}</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500">{item.variantLabel} × {item.qty}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-gold">{formatPrice(item.price != null ? item.price * item.qty : null)}</p>
                <button onClick={() => cart.remove(item.lineId)} className="text-[11px] uppercase tracking-widest text-zinc-500">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[1.4rem] border border-gold/30 p-6">
          <p className="flex justify-between text-2xl font-black uppercase"><span>Total</span><span>{formatPrice(cart.total || null)}</span></p>
          <p className="mt-2 text-sm text-zinc-400">{cart.total >= 100 ? 'Vault rule unlocked: 22 cards + one Legendary/Wonder upgrade pull.' : 'Add more to reach the £100 vault pull.'}</p>
          <button className="rev-btn mt-5" onClick={cart.checkoutWhatsApp} disabled={!cart.items.length}>Checkout on WhatsApp</button>
          <div className="mt-4 flex gap-3 text-xs font-black uppercase tracking-widest">
            <Link href="/store">Continue in store</Link>
            <button onClick={cart.clear}>Clear stash</button>
          </div>
        </div>
      </div>
    </main>
  );
}
