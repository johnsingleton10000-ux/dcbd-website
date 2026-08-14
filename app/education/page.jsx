import Link from 'next/link';
import { WHATSAPP } from '../../lib/constants';

const cannabinoids = [
  { name: 'CBD', full: 'Cannabidiol', tag: 'Non-intoxicating', text: 'One of the best-known hemp cannabinoids. Often chosen by people interested in non-intoxicating hemp-derived products. No medical claims are made.' },
  { name: 'CBG', full: 'Cannabigerol', tag: 'Mother cannabinoid', text: 'Often called the mother cannabinoid because many cannabinoids begin from CBG during the plant’s development.' },
  { name: 'CBN', full: 'Cannabinol', tag: 'Aged cannabinoid', text: 'A naturally occurring cannabinoid that develops as other cannabinoids age and change over time.' },
  { name: 'THCA', full: 'Tetrahydrocannabinolic Acid', tag: 'Raw plant compound', text: 'A naturally occurring compound found in raw hemp and cannabis plants. It is chemically different from THC in raw form.' },
  { name: 'THCP', full: 'Tetrahydrocannabiphorol', tag: 'Newer cannabinoid', text: 'A rare cannabinoid discussed in recent research. Scientific understanding is still developing, so responsible information matters.' },
  { name: 'H4 CBD', full: 'Hydrogenated CBD', tag: 'Emerging cannabinoid', text: 'A modified cannabinoid category that has generated interest. Research and regulation should always be checked carefully.' }
];

export const metadata = {
  title: 'Hemp Education Hub | DCBD',
  description: 'Individual Cannabinoid Revolution — education-first, no medical claims.'
};

export default function EducationPage() {
  return (
    <main className="concrete min-h-screen overflow-hidden">
      <section className="relative px-4 py-20">
        <img src="/art/manchester-night.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-marker text-xl text-lime">Knowledge over hype</p>
          <h1 className="font-display mt-3 text-6xl uppercase leading-none md:text-8xl">
            The Individual <span className="text-gold">Cannabinoid</span> Revolution
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">Most people hear one word and stop there: THC. Hemp contains a wider family. This hub keeps the language responsible.</p>
          <p className="mt-3 font-black uppercase tracking-[0.25em] text-gold">Education. Transparency. Responsibility.</p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cannabinoids.map((c) => (
              <article key={c.name} className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/70">
                <div className="relative h-36 circuit flex items-center justify-center">
                  <p className="font-display text-6xl">{c.name}</p>
                  <span className="sticker lime absolute right-3 top-3 text-[10px]" style={{ '--r': '8deg' }}>{c.tag}</span>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">{c.full}</p>
                  <p className="mt-3 text-zinc-300">{c.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-gold/30 bg-black/70 p-8">
              <h2 className="font-display text-5xl uppercase">Safe. Secure. Responsible.</h2>
              <p className="mt-4 text-zinc-300">Lab-focused product culture. Clear labels. Hemp-derived. 18+ only. We do not diagnose, treat, cure, or prevent medical conditions.</p>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] purple-frame">
              <img src="/art/tea-jar.jpg" alt="Original tea vault artwork" className="h-full min-h-[16rem] w-full object-cover" />
              <span className="sticker white absolute bottom-4 left-4" style={{ '--r': '-6deg' }}>ARTWORK CUT · NOT STOCK</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="rounded-full border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-widest">Back to Estate</Link>
            <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi ElCastroPlugged, I'd like to ask about the cannabinoid range.")}`} className="rounded-full bg-lime px-6 py-3 text-xs font-black uppercase tracking-widest text-black">Talk to ElCastroPlugged</a>
          </div>
        </div>
      </section>
    </main>
  );
}
