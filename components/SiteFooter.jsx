import { EMAIL, PHONE, WHATSAPP, BRAND } from '../lib/constants';

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/30 bg-black px-4 py-16">
      <img src="/art/manchester-night.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="relative mx-auto max-w-7xl">
        <p className="font-marker text-3xl text-lime md:text-5xl">{BRAND.tagline}</p>
        <p className="mt-4 max-w-2xl text-zinc-300">{BRAND.manifesto}</p>
        <p className="mt-6 font-display text-6xl uppercase leading-none text-white md:text-8xl">Pull up a chair. Grab a brew. Welcome home.</p>
        <div className="mt-8 flex flex-col gap-3 text-sm uppercase tracking-widest text-zinc-400 sm:flex-row sm:justify-between">
          <p>18+ only · hemp-derived culture · no medical claims</p>
          <p>WhatsApp {PHONE} · {EMAIL}</p>
        </div>
        <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi ElCastroPlugged, I'm at the Estate.")}`} className="mt-6 inline-flex rounded-full border border-lime px-6 py-3 text-xs font-black uppercase tracking-widest text-lime">
          Talk to ElCastroPlugged
        </a>
      </div>
    </footer>
  );
}
