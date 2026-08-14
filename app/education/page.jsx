import Link from 'next/link';

const cannabinoids = [
  { name: 'CBD', full: 'Cannabidiol', tag: 'Non-intoxicating', text: 'One of the best-known hemp cannabinoids. Often chosen by people interested in non-intoxicating hemp-derived products. No medical claims are made.' },
  { name: 'CBG', full: 'Cannabigerol', tag: 'Mother cannabinoid', text: 'Often called the mother cannabinoid because many cannabinoids begin from CBG during the plant’s development.' },
  { name: 'CBN', full: 'Cannabinol', tag: 'Aged cannabinoid', text: 'A naturally occurring cannabinoid that develops as other cannabinoids age and change over time.' },
  { name: 'THCA', full: 'Tetrahydrocannabinolic Acid', tag: 'Raw plant compound', text: 'A naturally occurring compound found in raw hemp and cannabis plants. It is chemically different from THC in raw form.' },
  { name: 'THCP', full: 'Tetrahydrocannabiphorol', tag: 'Newer cannabinoid', text: 'A rare cannabinoid discussed in recent research. Scientific understanding is still developing, so responsible information matters.' },
  { name: 'H4 CBD', full: 'Hydrogenated CBD', tag: 'Emerging cannabinoid', text: 'A modified cannabinoid category that has generated interest. Research and regulation should always be checked carefully.' }
];

export default function EducationPage() {
  return (
    <main className="grit-bg px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-300">Knowledge over hype</p>
        <h1 className="font-display mt-3 text-6xl md:text-8xl">The Individual Cannabinoid Revolution</h1>
        <p className="mt-5 max-w-3xl text-lg text-zinc-300">Most people hear one word and stop there: THC. Hemp contains a wider family of cannabinoids. This page stays responsible: no medical promises, no fake guarantees.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cannabinoids.map((c) => (
            <article key={c.name} className="rounded-[1.4rem] border border-white/10 bg-black/50 p-6">
              <p className="font-display text-5xl text-lime-400">{c.name}</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">{c.full}</p>
              <p className="mt-4 text-sm font-black uppercase text-gold">{c.tag}</p>
              <p className="mt-3 text-zinc-300">{c.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex gap-3">
          <Link href="/dashboard" className="rounded-full border border-white/20 px-5 py-3 text-xs font-black uppercase">Dashboard</Link>
          <Link href="/store" className="rounded-full bg-gold px-5 py-3 text-xs font-black uppercase text-black">Physical store</Link>
        </div>
      </div>
    </main>
  );
}
