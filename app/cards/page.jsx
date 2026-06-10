const phone = '447763383729';

const cardProducts = [
  {
    name: 'Peach Paradise',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Bloom',
    mascot: 'Fox Cupbearer',
    suitcase: '+1 Blue Suitcase',
    profile: 'Peach, chamomile, vanilla. Soft sweet daytime-style collectible.',
    lore: 'A soft fruit-card from the Tea Vaults. Customers pull it when they want the friendly side of the DCBD universe.',
    gradient: 'from-pink-500/30 via-orange-400/20 to-black'
  },
  {
    name: 'Minty Zen',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Chill',
    mascot: 'Gruffin Panda',
    suitcase: '+1 Blue Suitcase',
    profile: 'Peppermint, spearmint, lemon balm. Clean, fresh, simple.',
    lore: 'Gruffin Panda guards this card. He only lets blends through if the label is clear and the customer knows what they are choosing.',
    gradient: 'from-lime-400/30 via-emerald-500/20 to-black'
  },
  {
    name: 'Berry Bliss',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Sweet',
    mascot: 'Berry Deerling',
    suitcase: '+1 Blue Suitcase',
    profile: 'Mixed berries, hibiscus, rose petals. Sweet card energy.',
    lore: 'A bright collectible for customers who like the softer animated side of the menu wall.',
    gradient: 'from-fuchsia-500/30 via-purple-500/20 to-black'
  },
  {
    name: 'Chill Chai',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Spice',
    mascot: 'Owl Nightwatch',
    suitcase: '+1 Blue Suitcase',
    profile: 'Rooibos, cinnamon, ginger, cardamom. Warm spice profile.',
    lore: 'The night-card of the herbal wall. Built for the darker lounge section of the site.',
    gradient: 'from-yellow-500/30 via-orange-600/20 to-black'
  },
  {
    name: 'Sleepytime',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Moon',
    mascot: 'Trevor Penguin',
    suitcase: '+1 Blue Suitcase',
    profile: 'Lavender, passionflower, lemon balm. Slow night card.',
    lore: 'Trevor Penguin carried this card through bad weather. It became the symbol of calm delivery and loyalty.',
    gradient: 'from-blue-500/30 via-indigo-500/20 to-black'
  },
  {
    name: 'Tropical Sunset',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Tropic',
    mascot: 'Pineapple Runner',
    suitcase: '+1 Blue Suitcase',
    profile: 'Pineapple, mango, hibiscus. Bright tropical card.',
    lore: 'This card brings colour to the wall: summer graphics, neon fruit, and the first taste of the mascot universe.',
    gradient: 'from-orange-400/30 via-yellow-400/20 to-black'
  },
  {
    name: 'Detox Greens',
    family: 'THCA Herbal Tea',
    price: '£20 delivered',
    supplier: 'DCBD house menu / herbal tea supplier slot',
    rarity: 'Common Green',
    mascot: 'Leaf Sprite',
    suitcase: '+1 Blue Suitcase',
    profile: 'Green tea, dandelion, moringa, nettle. Earthy green card.',
    lore: 'A back-to-basics card for customers who like the plant story more than hype.',
    gradient: 'from-green-500/30 via-lime-500/20 to-black'
  },
  {
    name: 'Sunset Sherbet Wax',
    family: 'Cali Extract Collection',
    price: '£30/g guide',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Rare Coastline',
    mascot: 'Sunset Smuggler',
    suitcase: '+2 Blue Suitcases',
    profile: 'Sweet berry and creamy citrus card language.',
    lore: 'The first premium Cali card. Neon sunset, glass jar, orange peel, and the stronger premium wall energy.',
    gradient: 'from-pink-600/30 via-orange-500/20 to-black'
  },
  {
    name: 'Cali Gold Crumble',
    family: 'Cali Extract Collection',
    price: '£35/g guide',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Rare Gold',
    mascot: 'Gold Jar Guardian',
    suitcase: '+2 Blue Suitcases',
    profile: 'Earthy pine, lemon, golden hill artwork.',
    lore: 'A gold-card collectible designed to sit near the top of the extract wall.',
    gradient: 'from-yellow-500/30 via-amber-600/20 to-black'
  },
  {
    name: 'Pacific OG Budder',
    family: 'Cali Extract Collection',
    price: '£40/g guide',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Rare Wave',
    mascot: 'Pacific Wave Keeper',
    suitcase: '+2 Blue Suitcases',
    profile: 'Bold pine, diesel-style aroma language, ocean artwork.',
    lore: 'A storm-card from the coast. It belongs in the premium extract section with heavy black and blue styling.',
    gradient: 'from-cyan-500/30 via-blue-600/20 to-black'
  },
  {
    name: 'Golden State Sauce',
    family: 'Cali Extract Collection',
    price: 'Premium enquiry',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Epic Sauce',
    mascot: 'Mango Crown',
    suitcase: '+1 Red Suitcase',
    profile: 'Tropical mango, pineapple, city sunset card language.',
    lore: 'An epic card for the California side of DCBD. Built for high-impact product wall placement.',
    gradient: 'from-orange-500/30 via-yellow-500/20 to-black'
  },
  {
    name: 'Lost Coast Haze Live Resin',
    family: 'Cali Extract Collection',
    price: '£45/g guide',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Epic Fog',
    mascot: 'Coast Phantom',
    suitcase: '+1 Red Suitcase',
    profile: 'Lemon, earthy herb, foggy coastline artwork.',
    lore: 'A coastal legend card. It sits between extract culture and old-world herbal storytelling.',
    gradient: 'from-slate-400/30 via-teal-500/20 to-black'
  },
  {
    name: 'Mojave OG Shatter',
    family: 'Cali Extract Collection',
    price: '£25/g guide',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Rare Desert',
    mascot: 'Mojave Glass Jackal',
    suitcase: '+2 Blue Suitcases',
    profile: 'Dry desert pine and spicy earth card language.',
    lore: 'The desert-card. Amber shards, hot sky, and a clean direct product identity.',
    gradient: 'from-orange-700/30 via-amber-500/20 to-black'
  },
  {
    name: 'Coastal Dream Crumble',
    family: 'Cali Extract Collection',
    price: 'Premium enquiry',
    supplier: 'Cali-style extract supplier slot',
    rarity: 'Rare Dream',
    mascot: 'Dream Diver',
    suitcase: '+2 Blue Suitcases',
    profile: 'Lavender, sweet berry, moonlit coastline artwork.',
    lore: 'A purple-blue collector card that brings the softer fantasy side into the extract range.',
    gradient: 'from-violet-500/30 via-blue-500/20 to-black'
  },
  {
    name: 'Moroccan Blonde Static',
    family: 'Dam Classics',
    price: '£15/g guide',
    supplier: 'Amsterdam / hash supplier slot',
    rarity: 'Classic Blonde',
    mascot: 'Canal Cat',
    suitcase: '+1 Blue Suitcase',
    profile: 'Sandy texture, spice, cedar, honey notes.',
    lore: 'A classic old-school card for the Amsterdam-inspired wall.',
    gradient: 'from-yellow-300/30 via-stone-500/20 to-black'
  },
  {
    name: 'Ketama Gold',
    family: 'Dam Classics',
    price: '£14/g guide',
    supplier: 'Amsterdam / hash supplier slot',
    rarity: 'Classic Gold',
    mascot: 'Ketama Lion',
    suitcase: '+1 Blue Suitcase',
    profile: 'Caramel, earth, nut-style card language.',
    lore: 'A steady gold card with vintage coffeeshop styling.',
    gradient: 'from-amber-400/30 via-yellow-700/20 to-black'
  },
  {
    name: 'Temple Ball Reserve',
    family: 'Dam Classics',
    price: '£17/g guide',
    supplier: 'Amsterdam / hash supplier slot',
    rarity: 'Classic Reserve',
    mascot: 'Temple Owl',
    suitcase: '+1 Blue Suitcase',
    profile: 'Sandalwood, pepper, rich resin-card identity.',
    lore: 'The ritual card of the Dam Classics range. Dark, rounded, ceremonial.',
    gradient: 'from-purple-500/30 via-stone-700/20 to-black'
  },
  {
    name: 'Afghan Cream',
    family: 'Dam Classics',
    price: '£20/g guide',
    supplier: 'Amsterdam / hash supplier slot',
    rarity: 'Epic Cream',
    mascot: 'Afghan Mountain Bear',
    suitcase: '+1 Red Suitcase',
    profile: 'Dense cream, dark chocolate earth, spicy pine language.',
    lore: 'A premium classic card with mountain artwork and deep old-world warmth.',
    gradient: 'from-stone-400/30 via-orange-900/20 to-black'
  },
  {
    name: 'Afghan Sticky',
    family: 'Bundle / Street Revolution',
    price: '20g bundle concept',
    supplier: 'Regional supplier slot',
    rarity: 'Legendary Jar',
    mascot: 'Sticky Scissors',
    suitcase: '+1 Gold Suitcase',
    profile: 'Sticky jar artwork, street revolution branding.',
    lore: 'A big visual card for bundle campaigns, loyalty events, and limited drops.',
    gradient: 'from-yellow-500/30 via-red-700/20 to-black'
  },
  {
    name: 'Girl Scout Cookies Crumble',
    family: 'Trading Card Special',
    price: 'Premium enquiry',
    supplier: 'Coilor-style supplier reference slot',
    rarity: 'Legendary Pixel',
    mascot: 'Purple Gastro Chef',
    suitcase: '+1 Gold Suitcase',
    profile: 'Sweet, earthy, gassy, candy, floral card language.',
    lore: 'A full trading-card style drop with HP, flavour stats, and retro game energy.',
    gradient: 'from-purple-600/30 via-yellow-500/20 to-black'
  },
  {
    name: 'THCP E-Liquid Cali',
    family: 'THCP Liquid',
    price: '£22 each / 3 for £50 guide',
    supplier: 'THCP liquid supplier slot',
    rarity: 'Epic Neon',
    mascot: 'Cali Dropper',
    suitcase: '+1 Red Suitcase',
    profile: 'Gelato Mintz, Blue Dream, Mango Kush, Pineapple Express, Wedding Cake and more.',
    lore: 'The neon liquid wall. Each flavour can become its own micro-card inside the DCBD collector book.',
    gradient: 'from-lime-400/30 via-purple-600/20 to-black'
  },
  {
    name: 'Patella Hash 65% Wedding Z',
    family: 'Hash Collection',
    price: 'Premium enquiry',
    supplier: 'Hash supplier slot / TKO-style reference',
    rarity: 'Legendary Wedding',
    mascot: 'Patella Monk',
    suitcase: '+1 Gold Suitcase',
    profile: 'Premium hand-made hash card language. Lab info required before listing.',
    lore: 'A legendary hash-card used only when batch details and lab notes are confirmed.',
    gradient: 'from-yellow-600/30 via-purple-900/20 to-black'
  }
];

const supplierRows = [
  ['DCBD House Menu', 'Herbal tea blends, mascots, collectible cards', 'Ready for live display'],
  ['Cali-style Extract Supplier', 'Wax, crumble, budder, shatter, sauce, live resin', 'Use as enquiry cards until batch/lab data is confirmed'],
  ['Amsterdam / Hash Supplier', 'Dam Classics and hash collection', 'Use guide pricing and confirm stock before sale'],
  ['THCP Liquid Supplier', 'Flavour wall and 3 for £50 style bundle', 'Needs final flavour list before checkout'],
  ['TKO-style Reference Slot', 'Special hash / extract drops discussed before', 'Do not publish supplier claims until verified']
];

export default function CardsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <section className="relative px-5 py-20 grit-bg border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="text-lime-300 font-black uppercase tracking-widest">← Back to DCBD</a>
          <p className="mt-10 text-lime-400 uppercase tracking-[0.35em] font-black">DCBD Collectible Product Cards</p>
          <h1 className="mt-4 text-5xl md:text-8xl font-black uppercase leading-none">The Card Vault</h1>
          <p className="mt-6 max-w-4xl text-zinc-300 text-lg md:text-2xl">
            Every product becomes a collectible: biography, mascot, supplier cross-reference, rarity, suitcase reward and direct enquiry. Prices are guide cards only until live stock and lab details are confirmed.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="rounded-3xl border border-blue-400/30 bg-blue-500/10 p-5"><h2 className="text-2xl font-black">Blue Suitcase</h2><p className="mt-2 text-zinc-300">Common loyalty pull. Collect 3 for a reward-tier claim.</p></div>
            <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-5"><h2 className="text-2xl font-black">Red Suitcase</h2><p className="mt-2 text-zinc-300">Uncommon pull for premium cards and bigger discounts.</p></div>
            <div className="rounded-3xl border border-yellow-400/30 bg-yellow-500/10 p-5"><h2 className="text-2xl font-black">Gold Suitcase</h2><p className="mt-2 text-zinc-300">Rare pull for founder, legendary, or special-drop rewards.</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.3em] font-bold">Supplier Cross Reference</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase">Stock Map</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            {supplierRows.map(([supplier, products, status]) => (
              <div key={supplier} className="grid md:grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.03] p-5 last:border-b-0">
                <p className="font-black text-lime-300">{supplier}</p>
                <p className="text-zinc-300">{products}</p>
                <p className="text-zinc-400">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 bg-[#070707]">
        <div className="max-w-7xl mx-auto">
          <p className="text-purple-300 uppercase tracking-[0.3em] font-bold">Product Biography Cards</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase">Every Product Gets A Story</h2>
          <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {cardProducts.map((card) => (
              <article key={card.name} className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${card.gradient} p-5 card-glow`}>
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-black uppercase text-yellow-300">{card.rarity}</div>
                <div className="h-52 rounded-[1.5rem] border border-white/10 bg-black/50 p-5 flex flex-col justify-between">
                  <p className="text-sm text-lime-300 uppercase tracking-widest font-black">{card.family}</p>
                  <div>
                    <p className="text-5xl">🎴</p>
                    <h3 className="mt-2 text-3xl font-black uppercase leading-none">{card.name}</h3>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-black/45 p-3"><p className="text-zinc-500 uppercase font-bold">Price</p><p className="font-black text-yellow-300">{card.price}</p></div>
                  <div className="rounded-2xl border border-white/10 bg-black/45 p-3"><p className="text-zinc-500 uppercase font-bold">Reward</p><p className="font-black text-blue-300">{card.suitcase}</p></div>
                </div>
                <p className="mt-4 text-sm text-zinc-400 uppercase tracking-widest font-bold">Mascot / Biography</p>
                <p className="mt-2 text-xl font-black text-white">{card.mascot}</p>
                <p className="mt-3 text-zinc-300">{card.lore}</p>
                <p className="mt-4 text-sm text-zinc-400"><span className="font-black text-lime-300">Profile:</span> {card.profile}</p>
                <p className="mt-3 text-xs text-zinc-500"><span className="font-black text-purple-300">Supplier:</span> {card.supplier}</p>
                <a href={`https://wa.me/${phone}?text=Hi%20ElCastroPlugged,%20I%20want%20to%20ask%20about%20the%20${encodeURIComponent(card.name)}%20card.`} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-full bg-gradient-to-r from-lime-400 via-yellow-400 to-purple-500 px-5 py-3 text-center font-black uppercase text-black">Ask About This Card</a>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-zinc-500">18+ only. Product cards are catalogue and enquiry cards. No medical claims. Final availability, legal status, batch data and lab details must be confirmed before any live checkout listing.</p>
        </div>
      </section>
    </main>
  );
}
