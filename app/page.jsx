const products = [
  { name: 'Peach Paradise', type: 'Herbal Tea', price: '£20 delivered', note: 'Fruit-led house blend with a soft collectible card identity.' },
  { name: 'Minty Zen', type: 'Herbal Tea', price: '£20 delivered', note: 'Clean mint profile, education-first and 18+ only.' },
  { name: 'Berry Bliss', type: 'Herbal Tea', price: '£20 delivered', note: 'Sweet berry menu card with Estate-born artwork energy.' },
  { name: 'Chill Chai', type: 'Herbal Tea', price: '£20 delivered', note: 'Warm spice profile built for the darker lounge menu.' },
  { name: 'Wax', type: 'Extract Tea', price: '£21 delivered', note: 'Entry extract menu item. Lab information should be checked before order.' },
  { name: 'Crumble', type: 'Extract Tea', price: '£25 delivered', note: 'Collectible extract card with premium visual placement.' },
  { name: 'Clear THCA', type: 'Extract Tea', price: '£25 delivered', note: 'Education-first product card. No medical claims.' },
  { name: 'THCP Temple Ball', type: 'Hash Collection', price: '£25 delivered', note: 'Premium hash collection card for 18+ customers only.' }
];

const steps = [
  ['Story', 'The journey comes first: real life, pain, learning, curiosity, and a shop born with a voice.'],
  ['Education', 'The Individual Cannabinoid Revolution explains the wider plant family without hype or medical claims.'],
  ['Card', 'Every product becomes artwork, built like a collectible poster instead of a plain shop tile.'],
  ['Product', 'Clear names, clear pricing, direct contact, and nothing below £18 delivered.'],
  ['Membership', 'The Inner Circle gives early supporters a voice in flavours, artwork, drops, and game direction.'],
  ['Checkout', 'WhatsApp, email, card payments, and bank transfer depending on what feels most comfortable.']
];

const phone = '447763383729';
const email = 'johnsingleton10000@gmail.com';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <section className="min-h-screen relative flex items-center justify-center px-5 py-20 bg-black grit-bg">
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-5xl text-center border border-white/10 bg-black/75 rounded-[2rem] p-8 md:p-14 card-glow backdrop-blur-xl">
          <p className="text-lime-400 tracking-[0.4em] uppercase font-black text-sm">18+ Entry • Estate Born</p>
          <h1 className="mt-5 text-5xl md:text-8xl font-black uppercase leading-none">DaCoffeezDank</h1>
          <p className="mt-6 text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto">
            Story-led herbal tea culture, cannabinoid education, collectible product cards, direct service, and a future game universe built from the ground up.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#story" className="rounded-full bg-lime-400 px-8 py-4 text-black font-black uppercase tracking-wide">I Am 18+ Enter</a>
            <a href={`https://wa.me/${phone}?text=Hi%20ElCastroPlugged,%20I'd%20like%20to%20talk.`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-purple-400 bg-purple-500/10 px-8 py-4 font-black uppercase tracking-wide">Talk To ElCastroPlugged</a>
          </div>
        </div>
      </section>

      <section id="story" className="px-5 py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] font-bold">The Original Route</p>
            <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-tight">From Story To Card To Product</h2>
            <p className="mt-6 text-zinc-300 text-lg">
              DCBD was born from real life: long nights, rehabilitation, curiosity, and a need for education over hype. Every product starts with a story. Every story becomes artwork. Every artwork becomes a card. Every card becomes part of the wider DCBD universe.
            </p>
          </div>
          <div className="rounded-[2rem] border border-purple-500/30 bg-purple-500/10 p-6 md:p-8 card-glow">
            <h3 className="text-3xl font-black uppercase">CastroPlugger / ElCastroPlugged</h3>
            <p className="mt-4 text-zinc-300">
              Built for customers who want personal service, clear communication, education-first product culture, and a community that helps shape future flavours, artwork, and the direction of the shop.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-lime-400 uppercase tracking-[0.3em] font-bold">The Six-Part Website</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase">The Journey</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map(([title, text], index) => (
              <div key={title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-lime-400 font-black text-sm tracking-widest">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-3 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-24 bg-[#070707] grit-bg">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-purple-300 uppercase tracking-[0.3em] font-bold">Knowledge Over Hype</p>
            <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-tight">Individual Cannabinoid Revolution</h2>
            <p className="mt-6 text-zinc-300 text-lg">
              Most people hear one word and stop there: THC. The wider hemp plant contains a family of cannabinoids including CBD, CBG, CBN, THCA, THCP and emerging compounds. This page keeps the language responsible: no medical promises, no fake guarantees, just education, transparency, and lab-focused product culture.
            </p>
            <a href="/education" className="mt-8 inline-flex rounded-full bg-lime-400 px-8 py-4 text-black font-black uppercase">Learn The Revolution</a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Lab-focused', 'Clear labels', '18+ only', 'No medical claims'].map((item) => (
              <div key={item} className="rounded-2xl border border-lime-400/30 bg-lime-400/10 p-5">
                <p className="text-lime-300 font-black uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-5 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.3em] font-bold">Collectible Product Cards</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase">The Menu Wall</h2>
          <p className="mt-5 text-zinc-400 max-w-3xl">Nothing below £18 delivered. Product pages are built like collectible cards with direct WhatsApp ordering while the full checkout grows.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <div key={p.name} className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-zinc-950 to-black p-5 card-glow">
                <div className="h-56 rounded-2xl border border-white/10 bg-[radial-gradient(circle,#7c3aed66,transparent_60%)] flex items-center justify-center">
                  <span className="text-6xl">☕</span>
                </div>
                <p className="mt-5 text-sm text-lime-400 uppercase tracking-widest font-bold">{p.type}</p>
                <h3 className="mt-2 text-2xl font-black">{p.name}</h3>
                <p className="mt-2 text-yellow-300 font-black">{p.price}</p>
                <p className="mt-3 text-sm text-zinc-400">{p.note}</p>
                <a href={`https://wa.me/${phone}?text=Hi%20ElCastroPlugged,%20I'd%20like%20to%20order%20${encodeURIComponent(p.name)}.`} target="_blank" rel="noopener noreferrer" className="mt-5 block text-center rounded-full bg-purple-600 py-3 font-black uppercase">Order</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="px-5 py-24 bg-[#080808]">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-lime-400/30 bg-black/80 p-8 md:p-12 card-glow">
          <p className="text-lime-400 uppercase tracking-[0.3em] font-bold">Private Member Access</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase">DCBD Inner Circle</h2>
          <p className="mt-5 text-zinc-300 max-w-3xl">Built for the start of the community. Members help influence flavours, artwork, product direction, and the game design coming to market as the shop grows from an infant idea into a long-term movement.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/5 p-6">
              <h3 className="text-2xl font-black">First Month Founder Entry</h3>
              <p className="mt-3 text-6xl font-black">£25</p>
              <p className="mt-4 text-zinc-300">Includes a £15 discount voucher on any order over £40 and Inner Circle access.</p>
            </div>
            <div className="rounded-3xl border border-purple-400/30 bg-purple-500/5 p-6">
              <h3 className="text-2xl font-black">Then Monthly</h3>
              <p className="mt-3 text-6xl font-black">£9.99</p>
              <p className="mt-4 text-zinc-300">Stay inside the private group and help shape flavours, drops, artwork, the future game universe, and the direction of the coffee shop.</p>
            </div>
          </div>
          <a href={`https://wa.me/${phone}?text=Hi%20ElCastroPlugged,%20I'd%20like%20to%20join%20the%20DCBD%20Inner%20Circle.`} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-lime-400 via-yellow-400 to-purple-500 px-8 py-4 text-black font-black uppercase">Join Inner Circle</a>
        </div>
      </section>

      <section id="checkout" className="relative px-5 py-24 bg-[#050505] text-white overflow-hidden grit-bg">
        <div className="relative max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-black/80 p-8 md:p-12 card-glow">
          <p className="text-lime-400 uppercase tracking-[0.35em] font-black">Checkout & Direct Service</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-tight">Talk To ElCastroPlugged</h2>
          <p className="mt-6 text-zinc-300 text-lg max-w-3xl">As the community begins, we are opening up proper dialogue between customers and the team. This is not a faceless checkout. It is direct support, clear communication, and personal service from order to door.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-lime-400/30 bg-lime-400/10 p-5"><h3 className="text-xl font-black text-lime-300">Direct Dialogue</h3><p className="mt-2 text-zinc-300">Ask questions, request flavours, and speak with the team before ordering.</p></div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5"><h3 className="text-xl font-black text-yellow-300">Payment Choice</h3><p className="mt-2 text-zinc-300">Choose card payment or bank transfer — whichever feels most comfortable.</p></div>
            <div className="rounded-2xl border border-purple-400/30 bg-purple-500/10 p-5"><h3 className="text-xl font-black text-purple-300">Clever Science</h3><p className="mt-2 text-zinc-300">Education-first, lab-focused, responsible product culture. No medical promises.</p></div>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-zinc-400 uppercase tracking-widest text-sm font-bold">Current Checkout Method</p>
            <p className="mt-3 text-2xl font-black">Nothing under £18 delivered.</p>
            <p className="mt-3 text-zinc-300">Orders are currently handled through WhatsApp and email while the full online checkout system is being built.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/${phone}?text=Hi%20ElCastroPlugged,%20I'd%20like%20to%20place%20an%20order%20and%20choose%20card%20payment%20or%20bank%20transfer.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-400 via-yellow-400 to-purple-500 px-8 py-4 text-black font-black uppercase tracking-wide">☕ Talk To ElCastroPlugged</a>
              <a href={`mailto:${email}?subject=DCBD%20Order%20Enquiry`} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white font-black uppercase tracking-wide">Email The Team</a>
            </div>
            <p className="mt-5 text-sm text-zinc-500">18+ only. Product information is general information only and is not medical advice. We do not make medical claims. Availability is subject to UK law and product-specific lab testing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
