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
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <section className="relative px-5 py-20 grit-bg">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center justify-between mb-14 gap-4">
            <a href="/" className="text-3xl font-black text-lime-400">DCBD</a>
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-zinc-300">
              <a href="/#story">Story</a>
              <a href="/education" className="text-lime-400">Education</a>
              <a href="/#products">Products</a>
              <a href="/#membership">Membership</a>
              <a href="/#checkout">Checkout</a>
            </div>
            <a href="https://wa.me/447763383729?text=Hi%20ElCastroPlugged,%20I'd%20like%20to%20talk." target="_blank" rel="noopener noreferrer" className="rounded-full bg-lime-400 px-5 py-3 text-black font-black text-xs uppercase">Talk</a>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-300 uppercase tracking-[0.35em] font-black">Knowledge Over Hype</p>
              <h1 className="mt-5 text-5xl md:text-7xl font-black uppercase leading-none">The Individual <span className="text-lime-400">Cannabinoid</span> Revolution</h1>
              <p className="mt-6 text-zinc-300 text-lg max-w-2xl">Most people hear one word and stop there: THC. But hemp contains a wider family of cannabinoids, each with its own story, structure, and research journey.</p>
              <p className="mt-5 text-yellow-300 font-black uppercase tracking-widest">Education. Transparency. Responsibility.</p>
            </div>
            <div className="rounded-[2rem] border border-lime-400/30 bg-black/70 p-8 card-glow">
              <h2 className="text-3xl font-black uppercase">Safe. Secure. Responsible.</h2>
              <p className="mt-4 text-zinc-300">We focus on hemp-derived product culture, clear lab testing, responsible information, and transparent customer support. No hype. No medical promises. No false guarantees.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {['Lab focused', 'Clear labels', 'Hemp-derived', '18+ only'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-lime-300 font-black">{item}</p></div>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-20">
            <h2 className="text-center text-3xl md:text-5xl font-black uppercase">The Cannabinoid Family</h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cannabinoids.map((c) => (
                <div key={c.name} className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-zinc-950 to-black p-6 card-glow">
                  <div className="h-32 rounded-2xl border border-lime-400/30 bg-lime-400/10 flex items-center justify-center">
                    <div className="text-center"><p className="text-5xl font-black">{c.name}</p><p className="text-xs text-zinc-400 uppercase tracking-widest">{c.full}</p></div>
                  </div>
                  <p className="mt-5 text-lime-400 font-black uppercase">{c.tag}</p>
                  <p className="mt-3 text-zinc-300">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 grid lg:grid-cols-2 gap-6">
            <div className="rounded-[2rem] border border-yellow-400/30 bg-yellow-400/5 p-8">
              <h2 className="text-4xl font-black uppercase text-yellow-300">CBD Concentrate</h2>
              <p className="mt-5 text-zinc-300">CBD is one of the most researched cannabinoids. CBD concentrate may be chosen by people looking for a non-intoxicating hemp-derived option as part of their personal routine.</p>
              <p className="mt-4 text-sm text-zinc-500">We do not diagnose, treat, cure, or prevent medical conditions. Individual experiences vary.</p>
            </div>
            <div className="rounded-[2rem] border border-purple-400/30 bg-purple-500/5 p-8">
              <h2 className="text-4xl font-black uppercase text-purple-300">Transparency Matters</h2>
              <p className="mt-5 text-zinc-300">Every serious cannabinoid product should be backed by clear lab information, responsible labelling, traceable sourcing, and honest communication.</p>
              <a href="https://wa.me/447763383729?text=Hi%20ElCastroPlugged,%20I'd%20like%20to%20ask%20about%20the%20cannabinoid%20range." target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-lime-400 via-yellow-400 to-purple-500 px-8 py-4 text-black font-black uppercase">Talk To ElCastroPlugged</a>
            </div>
          </section>

          <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-zinc-500 flex flex-col md:flex-row gap-4 justify-between">
            <p>18+ only. Educational purposes only. No medical claims.</p>
            <p>WhatsApp: 07763 383729 • Email: johnsingleton10000@gmail.com</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
