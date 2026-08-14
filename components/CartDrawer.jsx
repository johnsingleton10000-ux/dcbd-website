'use client';

import Link from 'next/link';
import { useCart } from '../lib/cart-context';
import { formatPrice } from '../lib/catalog';

export default function CartDrawer() {
  const cart = useCart();
  if (!cart.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70">
      <button className="h-full flex-1" onClick={() => cart.setOpen(false)} aria-label="Close cart" />
      <aside className="flex h-full w-full max-w-md flex-col border-l border-gold/30 bg-[#0b0b0b]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Rev Cart</p>
            <h2 className="text-2xl font-black uppercase">My Stash</h2>
          </div>
          <button onClick={() => cart.setOpen(false)} className="text-sm font-black uppercase">Close</button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {!cart.items.length && <p className="text-zinc-400">The stash is empty. Open a vault and add a real Estate piece.</p>}
          {cart.items.map((item) => (
            <div key={item.lineId} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-black uppercase">{item.name}</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-400">{item.variantLabel} × {item.qty}</p>
                </div>
                <p className="font-black text-gold">{formatPrice(item.price != null ? item.price * item.qty : null)}</p>
              </div>
              <button onClick={() => cart.remove(item.lineId)} className="mt-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500">Remove</button>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 p-5">
          <p className="flex justify-between font-black uppercase"><span>Total</span><span>{formatPrice(cart.total || null)}</span></p>
          <p className="mt-2 text-xs text-zinc-400">{cart.total >= 100 ? '£100+ vault rule: 22 cards and one upgrade pull.' : 'Spend £100+ to trigger the 22-card vault pull.'}</p>
          <button className="rev-btn mt-4" onClick={cart.checkoutWhatsApp} disabled={!cart.items.length}>Checkout on WhatsApp</button>
          <Link href="/cart" onClick={() => cart.setOpen(false)} className="mt-3 block text-center text-xs font-black uppercase tracking-widest text-gold">Open full stash</Link>
        </div>
      </aside>
    </div>
  );
}
