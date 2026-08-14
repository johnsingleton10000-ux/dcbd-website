import Link from 'next/link';
import DropImage from '../../components/DropImage';
import { dropSrc } from '../../lib/artwork';

export default function GatePage() {
  return (
    <main className="gate-bg px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-black uppercase tracking-[0.35em] text-lime-400">18GATE</p>
        <h1 className="font-display mt-3 text-6xl md:text-8xl">The entry to the Estate</h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">You already passed age verification. This hall keeps 18GATE as a living door — membership, dashboard and store all sit on the other side.</p>
        <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-purple-500/30">
          <DropImage src={dropSrc('gate18')} alt="18GATE Disability Estate portal" className="h-80 w-full object-cover">
            <div className="product-stage theme-pluto h-80">
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <p className="font-premium text-2xl text-lime-300">Welcome home.</p>
                <p className="font-display text-5xl">Pull up a chair. Grab a brew.</p>
              </div>
            </div>
          </DropImage>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link href="/dashboard#membership" className="rounded-2xl border border-white/10 p-5 font-black uppercase">Membership</Link>
          <Link href="/dashboard" className="rounded-2xl border border-white/10 p-5 font-black uppercase">Dashboard</Link>
          <Link href="/store" className="rounded-2xl border border-gold/40 bg-gold p-5 font-black uppercase text-black">Store</Link>
        </div>
      </div>
    </main>
  );
}
