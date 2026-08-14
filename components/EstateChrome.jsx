import Link from 'next/link';
import { MEMBERSHIP } from '../lib/constants';

const LINKS = [
  ['/', 'Estate'],
  ['/#vault', 'Vault'],
  ['/cards', 'Cards'],
  ['/arena', 'Flip Three'],
  ['/education', 'Education'],
  ['/#membership', '£5.99 Access']
];

export default function EstateChrome({ children }) {
  return (
    <>
      <div className="overflow-hidden border-b border-gold/40 bg-black py-2">
        <div className="marquee-track gap-10 px-4 font-ops text-[11px] uppercase tracking-[0.45em] text-gold">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex gap-10 whitespace-nowrap">
              <span>DCBD Built Different</span>
              <span className="text-lime">Manchester</span>
              <span>Flip Three</span>
              <span className="text-white">{MEMBERSHIP.price} Estate Access</span>
              <span>18 Gate</span>
              <span className="text-neon">Not a shop · a universe</span>
            </span>
          ))}
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/art/estate-crest.jpg" alt="DCBD crest" className="h-11 w-11 rounded-full object-cover gold-frame" />
            <span className="font-ops text-2xl uppercase leading-none">
              DCBD
              <span className="block text-[10px] tracking-[0.3em] text-gold">MCR · Built Different</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-5 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-300 md:flex">
            {LINKS.map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-gold">{label}</Link>
            ))}
          </nav>
          <Link href="/#membership" className="rounded-full bg-gold px-4 py-2 text-[11px] font-black uppercase tracking-widest text-black">
            {MEMBERSHIP.price} access
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}
