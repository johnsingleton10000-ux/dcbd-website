import { ORIGINAL_ASSETS, dropSrc } from './artwork';
import { MIX_OFFER } from './constants';

const GRAM = [
  { id: '1g', label: '1 gram', price: 45 },
  { id: '2g', label: '2 gram', price: 50 }
];

const HASH_SIZES = ['3 gram', '7 gram', '14 gram', '28 gram', '50 gram', '100 gram'];

function hashVariants(prices) {
  return HASH_SIZES.map((label, i) => ({
    id: label.replace(' ', '').toLowerCase(),
    label,
    price: prices[i]
  }));
}

function product(entry) {
  const primary = entry.variants?.find((v) => v.price != null) || entry.variants?.[0];
  return {
    stock: 'in-stock',
    membership: {
      revPoints: primary?.price || 0,
      xp: primary?.price || 0,
      benefit: 'Earn Rev Points with every flip.'
    },
    collection: {
      trackable: true,
      boosterEligible: entry.vaults?.includes('vault') || entry.vaults?.includes('premium-vault') || false
    },
    ...entry,
    price: primary?.price ?? null,
    enquiry: primary?.price == null
  };
}

function estateConcentrate(name, extra = {}) {
  return product({
    id: extra.id,
    slug: extra.slug,
    name,
    family: extra.family || 'Estate Concentrate',
    vaults: extra.vaults || ['concentrates', 'extracts'],
    category: 'concentrates',
    tagline: extra.tagline,
    description: extra.description || 'Estate concentrate from the DCBD collectible menu. £45 a gram. 2 gram for £50.',
    variants: extra.variants || GRAM,
    flipThree: extra.flipThree || { role: extra.role || 'ATTACK' },
    rarity: extra.rarity,
    artTheme: extra.artTheme || 'orange-resin',
    image: extra.image || null,
    artworkKey: extra.artworkKey,
    poster: extra.poster
  });
}

function estateHash(name, extra = {}) {
  return product({
    id: extra.id,
    slug: extra.slug,
    name,
    family: extra.family || 'Estate Hash',
    vaults: extra.vaults || ['hash'],
    category: 'hash',
    tagline: extra.tagline,
    description: extra.description || 'Estate hash from the DCBD collectible menu. £45 a gram. 2 gram for £50.',
    variants: extra.variants || GRAM,
    flipThree: extra.flipThree || { role: extra.role || 'DEFEND' },
    rarity: extra.rarity,
    artTheme: extra.artTheme || 'green-hash',
    image: extra.image || null,
    artworkKey: extra.artworkKey
  });
}

function estateLiquid(name, extra = {}) {
  return product({
    id: extra.id,
    slug: extra.slug,
    name,
    family: 'Estate E-Liquid',
    vaults: extra.vaults || ['extracts'],
    category: 'eliquid',
    tagline: extra.tagline,
    description: extra.description || 'Estate e-liquid from the DCBD flavour wall. Menu pricing: £45 a gram • 2 gram for £50.',
    variants: extra.variants || GRAM,
    flipThree: extra.flipThree || { role: extra.role || 'ABILITY' },
    artTheme: extra.artTheme || 'purple-liquid',
    image: extra.image || null,
    artworkKey: extra.artworkKey
  });
}

export const PRODUCTS = [
  product({
    id: 'isolate-hash-thca',
    slug: 'isolate-hash-thca',
    name: 'Isolate Hash THC-A',
    family: 'Herbal Tea',
    vaults: ['concentrates', 'tea'],
    category: 'tea',
    tagline: 'SMOOTH. CLEAN. CALM.',
    description: 'Balanced relaxation in every sip. Herbal tea isolate hash presented as a Concentrate Vault collectible.',
    sizeLabel: '2GRAM',
    variants: [{ id: '2g', label: '2 gram', price: 40 }],
    flipThree: {
      role: 'DEFEND',
      ability: { name: 'Calm Brew', text: "Negates opponent's next flip attack." },
      attack: { name: 'Herbal Strike', text: '+15 to flip strength', value: 15 },
      defense: { name: 'Inner Peace', text: '+10 to flip defense', value: 10 }
    },
    artTheme: 'purple-tea',
    artworkKey: 'isolate-hash-thca'
  }),
  product({
    id: 'bubble-hash-59',
    slug: 'bubble-hash-59',
    name: 'Bubble Hash 59%',
    family: 'Water Hash',
    vaults: ['concentrates', 'hash'],
    category: 'hash',
    tagline: 'STICKY. STRONG. SERIOUS.',
    description: 'High potency. Heavy flips. 59% bubble hash from the Concentrate Vault.',
    sizeLabel: '3.5GRAM',
    variants: [{ id: '3.5g', label: '3.5 gram', price: 75 }],
    flipThree: {
      role: 'ATTACK',
      ability: { name: 'Bubble Shield', text: "Blocks opponent's next power." },
      attack: { name: 'Hash Blast', text: '+25 to flip strength', value: 25 },
      defense: { name: 'Dense Wall', text: '+20 to flip defense', value: 20 }
    },
    artTheme: 'amber-resin',
    artworkKey: 'bubble-hash-59'
  }),
  product({
    id: 'live-rosin-gmo',
    slug: 'live-rosin-gmo',
    name: 'Live Rosin — GMO',
    family: 'Live Rosin',
    vaults: ['concentrates', 'extracts', 'vault'],
    category: 'concentrates',
    tagline: 'STINKY. GAS. GOATED.',
    description: 'Terpy, loud, and legendary. GMO live rosin from the Concentrate Vault grid.',
    sizeLabel: '1 GRAM',
    variants: [{ id: '1g', label: '1 gram', price: 75 }],
    flipThree: {
      role: 'ATTACK',
      ability: { name: 'Double Shield', text: "Disables opponent's next card." },
      attack: { name: 'Head Blast', text: '+25 to flip strength', value: 25 },
      defense: { name: 'Stone Wall', text: '-20 to flip defense', value: -20 }
    },
    rarity: 'legendary',
    artTheme: 'gold-garlic',
    artworkKey: 'live-rosin-gmo'
  }),
  product({
    id: 'live-rosin-biscotti',
    slug: 'live-rosin-biscotti',
    name: 'Live Rosin — Biscotti',
    family: 'Live Rosin',
    vaults: ['concentrates', 'vault', 'premium-vault'],
    category: 'concentrates',
    tagline: 'RARE FINDS. HIGHER POWER.',
    description: 'Limited Drop live rosin. Timed Estate release from the Concentrate Vault.',
    sizeLabel: '1 GRAM',
    variants: [{ id: '1g', label: '1 gram', price: 75 }],
    stock: 'limited-drop',
    flipThree: {
      role: 'ATTACK',
      attack: { name: 'Biscotti Press', value: 93 },
      defense: { name: 'Dense Crust', value: 77 }
    },
    rarity: 'mythic',
    artTheme: 'amber-cookie',
    artworkKey: 'live-rosin-biscotti'
  }),
  product({
    id: 'moon-rock',
    slug: 'moon-rock',
    name: 'Moon Rock',
    family: 'Limited Drop',
    vaults: ['concentrates', 'premium-vault', 'vault'],
    category: 'concentrates',
    tagline: 'LIMITED DROP',
    description: 'Rare find from the Concentrate Vault limited row. Original drop photography sits in this frame when supplied.',
    variants: [{ id: '1g', label: '1 gram', price: null }],
    stock: 'limited-drop',
    flipThree: { role: 'ABILITY' },
    rarity: 'cursed',
    artTheme: 'cosmic',
    artworkKey: 'moon-rock'
  }),
  product({
    id: 'pennywise-og',
    slug: 'pennywise-og',
    name: 'Pennywise OG',
    family: 'Exotic Concentrate',
    vaults: ['vault', 'concentrates', 'premium'],
    category: 'concentrates',
    tagline: 'Old Money. New Flavour. Vault Only.',
    description: 'The Vault Cali Exotics card. Runs: Slow Burn. Ability: Needs Curing.',
    variants: GRAM,
    flipThree: {
      role: 'ABILITY',
      attack: { name: 'Attack', value: 88 },
      defense: { name: 'Defence', value: 74 },
      runs: 'Slow Burn',
      ability: { name: 'Needs Curing', text: 'Street smart. Vault only.' }
    },
    rarity: 'legendary',
    artTheme: 'vault-gold',
    poster: dropSrc('vaultCaliExotics'),
    artworkKey: 'pennywise-og'
  }),
  product({
    id: 'zkittlez-vaultz',
    slug: 'zkittlez-vaultz',
    name: 'Zkittlez Vaultz',
    family: 'Live Rosin',
    vaults: ['vault', 'concentrates', 'extracts'],
    category: 'concentrates',
    tagline: 'Sweet. Zesty. Top Shelf.',
    description: 'The Vault Cali Exotics live rosin. Runs: Creamy Smooth. Ability: Needs Curing.',
    variants: GRAM,
    flipThree: {
      role: 'ATTACK',
      attack: { name: 'Attack', value: 91 },
      defense: { name: 'Defence', value: 69 },
      runs: 'Creamy Smooth',
      ability: { name: 'Needs Curing' }
    },
    rarity: 'epic',
    artTheme: 'candy',
    artworkKey: 'zkittlez-vaultz'
  }),
  product({
    id: 'gelato-41',
    slug: 'gelato-41',
    name: 'Gelato 41',
    family: 'Diamond Sauce',
    vaults: ['vault', 'concentrates', 'extracts', 'premium'],
    category: 'concentrates',
    tagline: "Diamonds Don't Lie.",
    description: 'The Vault Cali Exotics diamond sauce. Runs: Heavy Hitter. Ability: Needs Curing.',
    variants: GRAM,
    flipThree: {
      role: 'ATTACK',
      attack: { name: 'Attack', value: 95 },
      defense: { name: 'Defence', value: 71 },
      runs: 'Heavy Hitter',
      ability: { name: 'Needs Curing' }
    },
    rarity: 'legendary',
    artTheme: 'diamond',
    artworkKey: 'gelato-41'
  }),
  product({
    id: 'gmo-cookies',
    slug: 'gmo-cookies',
    name: 'GMO Cookies',
    family: 'HTFSE Sauce',
    vaults: ['vault', 'concentrates', 'extracts'],
    category: 'concentrates',
    tagline: 'Loud Flavour. Vault Power.',
    description: 'The Vault Cali Exotics HTFSE sauce. Runs: Loud & Proud. Ability: Needs Curing.',
    variants: GRAM,
    flipThree: {
      role: 'ATTACK',
      attack: { name: 'Attack', value: 89 },
      defense: { name: 'Defence', value: 78 },
      runs: 'Loud & Proud',
      ability: { name: 'Needs Curing' }
    },
    rarity: 'epic',
    artTheme: 'gold-garlic',
    artworkKey: 'gmo-cookies'
  }),
  product({
    id: 'pineapple-express-sauce',
    slug: 'pineapple-express-sauce',
    name: 'Pineapple Express',
    family: 'Sauce',
    vaults: ['vault', 'concentrates', 'extracts'],
    category: 'concentrates',
    tagline: 'Tropical Heat. Vault Treat.',
    description: 'The Vault Cali Exotics sauce. Runs: Tropical Escape. Ability: Needs Curing.',
    variants: GRAM,
    flipThree: {
      role: 'ATTACK',
      attack: { name: 'Attack', value: 87 },
      defense: { name: 'Defence', value: 72 },
      runs: 'Tropical Escape',
      ability: { name: 'Needs Curing' }
    },
    rarity: 'rare',
    artTheme: 'tropic',
    artworkKey: 'pineapple-express-sauce'
  }),
  product({
    id: 'biscotti-cured-badder',
    slug: 'biscotti-cured-badder',
    name: 'Biscotti',
    family: 'Cured Badder',
    vaults: ['vault', 'concentrates', 'extracts'],
    category: 'concentrates',
    tagline: 'Nutty. Dank. Top Class.',
    description: 'The Vault Cali Exotics cured badder. Runs: Rich & Dense. Ability: Needs Curing.',
    variants: GRAM,
    flipThree: {
      role: 'DEFEND',
      attack: { name: 'Attack', value: 93 },
      defense: { name: 'Defence', value: 77 },
      runs: 'Rich & Dense',
      ability: { name: 'Needs Curing' }
    },
    rarity: 'legendary',
    artTheme: 'amber-cookie',
    artworkKey: 'biscotti-cured-badder'
  }),
  product({
    id: 'blue-cheese-x-fyreberry-patela',
    slug: 'blue-cheese-x-fyreberry-patela',
    name: 'Blue Cheese x Fyreberry',
    family: 'Patela Concentrate',
    vaults: ['premium', 'premium-vault', 'concentrates', 'hash'],
    category: 'premium',
    tagline: 'REAL TERPENES. REAL FLAVOUR. REAL EFFECT. REAL REWARD.',
    description:
      'Patela is a rare, hand-worked concentrate crafted using the DCBD cold brew process — no heat, no solvents, all terpenes, all flavour, all effect. It’s slow. It’s exclusive. It’s earned. Made for the hardworking do-afters who think they deserve a flavourful treat.',
    facts: ['No heat. All benefits.', 'Cold brew extraction.', 'Hand worked. Small batch. Exclusive.'],
    flavours: ['White Rooms', 'Tigerblood', 'Blue', 'Blueraz', 'Space Kush', 'OG'],
    variants: [
      { id: '1g', label: '1 gram', price: 45 },
      { id: '2g', label: '2 gram', price: 75 },
      { id: '4g', label: '4 gram', price: 100 }
    ],
    flipThree: { role: 'ABILITY', ability: { name: 'Cold Brew', text: 'Preserves terpenes and flavour.' } },
    rarity: 'mythic',
    stock: 'limited',
    artTheme: 'patela-gold',
    image: dropSrc('patelaBlueCheese'),
    poster: dropSrc('patelaBlueCheese'),
    artworkKey: 'patela-blue-cheese-fyreberry'
  }),
  product({
    id: 'estate-cali-concentrate',
    slug: 'estate-cali-concentrate',
    name: 'Estate Cali Concentrate',
    family: '90u Live Resin',
    vaults: ['calibolt', 'concentrates', 'extracts', 'premium'],
    category: 'calibolt',
    tagline: 'EXTRACTED. REFINED. PERFECTED.',
    description: 'Premium California cannabis concentrate. 90u live resin. Terps. Flavour. Potency. Manchester made — quality you can smell.',
    facts: ['90u — Live Resin', 'Manc Made', 'Estate Cali'],
    variants: GRAM,
    flipThree: { role: 'ATTACK', ability: { name: 'Cali Bolt', text: 'Live resin potency for the flip.' } },
    rarity: 'legendary',
    artTheme: 'cali-gold',
    image: dropSrc('estateCaliConcentrate'),
    poster: dropSrc('estateCaliConcentrate'),
    artworkKey: 'estate-cali-concentrate'
  }),
  product({
    id: 'manali-cream',
    slug: 'manali-cream',
    name: 'Manali Cream',
    family: 'Premium Cream Hash',
    vaults: ['hash', 'premium'],
    category: 'hash',
    tagline: 'Sweet floral aroma with a rich, creamy melt.',
    description: 'Perfect for relaxation and uplift. Dry sift, cold cured, pressed, hand finished.',
    tags: ['Dry Sift', 'Cold Cured', 'Pressed', 'Hand Finished'],
    variants: hashVariants([55, 110, 200, 360, 640, 1200]),
    flipThree: { role: 'DEFEND' },
    artTheme: 'hash-cream',
    artworkKey: 'manali-cream'
  }),
  product({
    id: 'og-kush-afghanistan-sticky',
    slug: 'og-kush-afghanistan-sticky',
    name: 'OG Kush',
    family: 'Afghanistan Sticky',
    vaults: ['hash'],
    category: 'hash',
    tagline: 'Earthy, piney, classic.',
    description: 'Sticky, strong and gassy. Old school OG with a powerful Afghan touch.',
    tags: ['Dry Sift', 'Cold Cured', 'Pressed', 'Hand Finished'],
    variants: hashVariants([50, 100, 180, 320, 580, 1100]),
    flipThree: { role: 'ATTACK' },
    artTheme: 'hash-og',
    image: ORIGINAL_ASSETS.afghanSticky,
    artworkKey: 'og-kush-afghanistan-sticky'
  }),
  product({
    id: 'organic-hash',
    slug: 'organic-hash',
    name: 'Organic',
    family: 'Pure Natural Clean',
    vaults: ['hash'],
    category: 'hash',
    tagline: '100% Organic Hash.',
    description: 'Clean, pure and untainted. Made from organic hemp grown with love.',
    tags: ['Dry Sift', 'Cold Cured', 'Pressed', 'Hand Finished'],
    variants: hashVariants([50, 95, 170, 310, 550, 1000]),
    flipThree: { role: 'DEFEND' },
    artTheme: 'hash-organic',
    image: ORIGINAL_ASSETS.hashProcess,
    artworkKey: 'organic-hash'
  }),
  product({
    id: 'iso-hash-lemoneeze',
    slug: 'iso-hash-lemoneeze',
    name: 'ISO Hash',
    family: 'Lemoneeze Cross Bubbakush',
    vaults: ['hash', 'extracts'],
    category: 'extracts',
    tagline: 'Lemon, sweet, gas.',
    description: 'Lemony, sweet and gassy. Smooth high with a heavy body melt.',
    tags: ['Dry Sift', 'Ice Water', 'Pressed', 'Hand Finished'],
    variants: hashVariants([50, 95, 170, 310, 550, 1000]),
    flipThree: { role: 'ATTACK' },
    artTheme: 'hash-lemon',
    artworkKey: 'iso-hash-lemoneeze'
  }),
  product({
    id: 'pressed-crystal-honeycomb',
    slug: 'pressed-crystal-honeycomb',
    name: 'Pressed Crystal Honeycomb',
    family: 'Crystal Hash',
    vaults: ['hash', 'premium'],
    category: 'hash',
    tagline: 'Golden, crystal, pure.',
    description: 'Golden honeycomb texture. Crisp, clean and full of natural cannabinoids.',
    tags: ['Dry Sift', 'Heat Pressed', 'Cured', 'Hand Finished'],
    variants: hashVariants([45, 85, 150, 270, 480, 900]),
    flipThree: { role: 'ABILITY' },
    artTheme: 'hash-honey',
    artworkKey: 'pressed-crystal-honeycomb'
  }),
  product({
    id: 'napoleon-temple-ball',
    slug: 'napoleon-temple-ball',
    name: 'Napoleon',
    family: 'Temple Ball 40',
    vaults: ['hash', 'premium'],
    category: 'hash',
    tagline: 'Old school, strong, tradition.',
    description: 'Traditional temple ball. Hard pressed for long lasting aroma and strength.',
    tags: ['Sifted', 'Rolled', 'Cured', 'Hand Finished'],
    variants: hashVariants([40, 75, 130, 230, 400, 750]),
    flipThree: { role: 'DEFEND' },
    artTheme: 'hash-temple',
    image: ORIGINAL_ASSETS.templeBall,
    artworkKey: 'napoleon-temple-ball'
  }),
  product({
    id: 'apples-bananas-thca-piatella',
    slug: 'apples-bananas-thca-piatella',
    name: 'Apples & Bananas',
    family: 'THCA Piatella Hash Tea',
    vaults: ['tea', 'hash', 'premium', 'premium-vault'],
    category: 'tea',
    tagline: 'REAL GAS NO REGGIE.',
    description:
      'DCBD Estate Exclusive. Four-way Cali cross — Compound Genetics x Cookies Fam. Parents: Platinum Cookies, Granddaddy Purple, Blue Power, Gelatti. Smells like a bag in July.',
    facts: [
      'THCA 87.69%',
      'Δ9 THC <0.3% (legal limit)',
      'Full spectrum',
      'Piatella pressed',
      'Net wt 3.5 grams'
    ],
    sizeLabel: '3.5 GRAMS',
    variants: [{ id: '3.5g', label: '3.5 gram', price: null }],
    stock: 'limited',
    flipThree: { role: 'ATTACK', ability: { name: 'Piatella Press', text: 'Handpressed piatella perfection.' } },
    rarity: 'mythic',
    artTheme: 'piatella',
    image: dropSrc('applesBananasPiatella'),
    poster: dropSrc('applesBananasPiatella'),
    artworkKey: 'apples-bananas-piatella'
  }),
  estateConcentrate('Strawberry Cheesecake Crumble', {
    id: 'strawberry-cheesecake-crumble',
    slug: 'strawberry-cheesecake-crumble',
    family: 'Crumble',
    role: 'ATTACK',
    artTheme: 'berry',
    image: ORIGINAL_ASSETS.danishCrumble
  }),
  estateConcentrate('Lemon Cherry Batter', {
    id: 'lemon-cherry-batter',
    slug: 'lemon-cherry-batter',
    family: 'Batter',
    role: 'ATTACK',
    artTheme: 'citrus'
  }),
  estateConcentrate('Tropical Turbo Sauce', {
    id: 'tropical-turbo-sauce',
    slug: 'tropical-turbo-sauce',
    family: 'Sauce',
    role: 'ATTACK',
    artTheme: 'tropic'
  }),
  estateConcentrate('Zkittlez Live Resin', {
    id: 'zkittlez-live-resin',
    slug: 'zkittlez-live-resin',
    family: 'Live Resin',
    role: 'ATTACK',
    artTheme: 'candy'
  }),
  estateConcentrate('Gelato 33 THC Diamonds', {
    id: 'gelato-33-thc-diamonds',
    slug: 'gelato-33-thc-diamonds',
    family: 'Diamonds',
    vaults: ['concentrates', 'extracts', 'premium'],
    role: 'ATTACK',
    artTheme: 'diamond'
  }),
  estateConcentrate('Papaya Punch Badder', {
    id: 'papaya-punch-badder',
    slug: 'papaya-punch-badder',
    family: 'Badder',
    role: 'ATTACK',
    artTheme: 'tropic'
  }),
  estateConcentrate('Banana OG Crumble', {
    id: 'banana-og-crumble',
    slug: 'banana-og-crumble',
    family: 'Crumble',
    role: 'ATTACK',
    artTheme: 'banana'
  }),
  estateConcentrate('Wedding Cake Live Sauce', {
    id: 'wedding-cake-live-sauce',
    slug: 'wedding-cake-live-sauce',
    family: 'Live Sauce',
    role: 'ATTACK',
    artTheme: 'cake',
    image: ORIGINAL_ASSETS.weddingCake
  }),
  estateConcentrate('Purple Rainz Batter', {
    id: 'purple-rainz-batter',
    slug: 'purple-rainz-batter',
    family: 'Batter',
    role: 'DEFEND',
    artTheme: 'purple-resin'
  }),
  estateConcentrate('Mimosa Diamonds', {
    id: 'mimosa-diamonds',
    slug: 'mimosa-diamonds',
    family: 'Diamonds',
    vaults: ['concentrates', 'extracts', 'premium'],
    role: 'ABILITY',
    artTheme: 'diamond'
  }),
  estateConcentrate('Garlic Cookies Live Resin', {
    id: 'garlic-cookies-live-resin',
    slug: 'garlic-cookies-live-resin',
    family: 'Live Resin',
    role: 'ATTACK',
    artTheme: 'gold-garlic'
  }),
  estateHash('Bubblegum Hash', { id: 'bubblegum-hash', slug: 'bubblegum-hash', role: 'DEFEND', artTheme: 'candy' }),
  estateHash('Black Cherry Hash', { id: 'black-cherry-hash', slug: 'black-cherry-hash', role: 'DEFEND', artTheme: 'berry' }),
  estateHash('Mango Hash', { id: 'mango-hash', slug: 'mango-hash', role: 'ATTACK', artTheme: 'tropic' }),
  estateHash('London Pound Cake Hash', { id: 'london-pound-cake-hash', slug: 'london-pound-cake-hash', role: 'DEFEND', artTheme: 'cake' }),
  estateHash('Strawberry Cough Hash', { id: 'strawberry-cough-hash', slug: 'strawberry-cough-hash', role: 'ATTACK', artTheme: 'berry' }),
  estateHash('Dry Sift Ice-O-Lator', {
    id: 'dry-sift-ice-o-lator',
    slug: 'dry-sift-ice-o-lator',
    family: 'Ice-O-Lator',
    role: 'ABILITY',
    artTheme: 'ice'
  }),
  estateHash('Amnesia Haze Hash', { id: 'amnesia-haze-hash', slug: 'amnesia-haze-hash', role: 'ATTACK', artTheme: 'haze' }),
  estateHash('Watermelon Zkittlez Hash', { id: 'watermelon-zkittlez-hash', slug: 'watermelon-zkittlez-hash', role: 'ATTACK', artTheme: 'candy' }),
  estateHash('Kush Mints Hash', { id: 'kush-mints-hash', slug: 'kush-mints-hash', role: 'DEFEND', artTheme: 'mint' }),
  estateHash('Red Velvet Hash', { id: 'red-velvet-hash', slug: 'red-velvet-hash', role: 'DEFEND', artTheme: 'cake' }),
  estateHash('OG Kush Hash', { id: 'og-kush-hash', slug: 'og-kush-hash', role: 'ATTACK', artTheme: 'hash-og' }),
  estateLiquid('Blueberry Gelato', { id: 'blueberry-gelato', slug: 'blueberry-gelato', image: ORIGINAL_ASSETS.blueberrySlush }),
  estateLiquid('Pink Lemonade', { id: 'pink-lemonade', slug: 'pink-lemonade' }),
  estateLiquid('Rainbow Zkittlez', { id: 'rainbow-zkittlez', slug: 'rainbow-zkittlez' }),
  estateLiquid('Mango Ice', { id: 'mango-ice', slug: 'mango-ice' }),
  estateLiquid('Strawberry Dream', { id: 'strawberry-dream', slug: 'strawberry-dream' }),
  estateLiquid('Watermelon Bubblegum', { id: 'watermelon-bubblegum', slug: 'watermelon-bubblegum' }),
  estateLiquid('Grape Ape', { id: 'grape-ape', slug: 'grape-ape' }),
  estateLiquid('Cherry Cola', { id: 'cherry-cola', slug: 'cherry-cola' }),
  estateLiquid('Menthol Mint', { id: 'menthol-mint', slug: 'menthol-mint' }),
  estateLiquid('Pineapple Express', { id: 'pineapple-express-eliquid', slug: 'pineapple-express-eliquid' }),
  estateLiquid('Skittlez', { id: 'skittlez-eliquid', slug: 'skittlez-eliquid' }),
  product({
    id: 'sunset-sherbet',
    slug: 'sunset-sherbet',
    name: 'Sunset Sherbet',
    family: 'Cali Collection',
    vaults: ['calibolt', 'extracts', 'concentrates'],
    category: 'calibolt',
    description: 'Cali Collection sunset card from original DCBD extract wall artwork.',
    variants: [{ id: '1g', label: '1 gram', price: 30 }],
    flipThree: { role: 'ATTACK' },
    artTheme: 'sunset',
    image: ORIGINAL_ASSETS.caliGrid,
    artworkKey: 'sunset-sherbet'
  }),
  product({
    id: 'cali-gold',
    slug: 'cali-gold',
    name: 'Cali Gold',
    family: 'Cali Collection',
    vaults: ['calibolt', 'extracts', 'concentrates'],
    category: 'calibolt',
    description: 'Cali Collection gold card from original DCBD extract wall artwork.',
    variants: [{ id: '1g', label: '1 gram', price: 40 }],
    flipThree: { role: 'ATTACK' },
    artTheme: 'cali-gold',
    image: ORIGINAL_ASSETS.caliGrid,
    artworkKey: 'cali-gold'
  }),
  product({
    id: 'pacific-og',
    slug: 'pacific-og',
    name: 'Pacific OG',
    family: 'Cali Collection',
    vaults: ['calibolt', 'extracts'],
    category: 'calibolt',
    description: 'Cali Collection Pacific OG card from original DCBD extract wall artwork.',
    variants: [{ id: '1g', label: '1 gram', price: 40 }],
    flipThree: { role: 'DEFEND' },
    artTheme: 'coast',
    image: ORIGINAL_ASSETS.caliGrid,
    artworkKey: 'pacific-og'
  }),
  product({
    id: 'golden-state',
    slug: 'golden-state',
    name: 'Golden State',
    family: 'Cali Collection',
    vaults: ['calibolt', 'extracts'],
    category: 'calibolt',
    description: 'Cali Collection Golden State card from original DCBD extract wall artwork.',
    variants: [{ id: '1g', label: '1 gram', price: 35 }],
    flipThree: { role: 'ABILITY' },
    artTheme: 'cali-gold',
    image: ORIGINAL_ASSETS.caliGrid,
    artworkKey: 'golden-state'
  }),
  product({
    id: 'lost-coast',
    slug: 'lost-coast',
    name: 'Lost Coast',
    family: 'Cali Collection',
    vaults: ['calibolt', 'extracts', 'premium'],
    category: 'calibolt',
    description: 'Cali Collection Lost Coast card from original DCBD extract wall artwork.',
    variants: [{ id: '1g', label: '1 gram', price: 45 }],
    flipThree: { role: 'ABILITY' },
    artTheme: 'coast',
    image: ORIGINAL_ASSETS.caliGrid,
    artworkKey: 'lost-coast'
  }),
  product({
    id: 'mojave-og',
    slug: 'mojave-og',
    name: 'Mojave OG',
    family: 'Cali Collection',
    vaults: ['calibolt', 'extracts'],
    category: 'calibolt',
    description: 'Cali Collection Mojave OG card from original DCBD extract wall artwork.',
    variants: [{ id: '1g', label: '1 gram', price: 25 }],
    flipThree: { role: 'ATTACK' },
    artTheme: 'desert',
    image: ORIGINAL_ASSETS.caliGrid,
    artworkKey: 'mojave-og'
  }),
  product({
    id: 'peach-paradise',
    slug: 'peach-paradise',
    name: 'Peach Paradise',
    family: 'Herbal Tea',
    vaults: ['tea'],
    category: 'tea',
    description: 'Fruit-led house blend from the 18GATE herbal tea wall.',
    variants: [{ id: 'tin', label: 'Menu tin', price: 20 }],
    flipThree: { role: 'DEFEND', ability: { name: 'Soft Bloom' } },
    artTheme: 'peach',
    image: ORIGINAL_ASSETS.teaWall,
    artworkKey: 'peach-paradise'
  }),
  product({
    id: 'minty-zen',
    slug: 'minty-zen',
    name: 'Minty Zen',
    family: 'Herbal Tea',
    vaults: ['tea'],
    category: 'tea',
    description: 'Clean mint profile from the 18GATE herbal tea wall.',
    variants: [{ id: 'tin', label: 'Menu tin', price: 20 }],
    flipThree: { role: 'DEFEND' },
    artTheme: 'mint',
    image: ORIGINAL_ASSETS.teaWall,
    artworkKey: 'minty-zen'
  }),
  product({
    id: 'berry-bliss',
    slug: 'berry-bliss',
    name: 'Berry Bliss',
    family: 'Herbal Tea',
    vaults: ['tea'],
    category: 'tea',
    description: 'Sweet berry menu card from the 18GATE herbal tea wall.',
    variants: [{ id: 'tin', label: 'Menu tin', price: 20 }],
    flipThree: { role: 'ABILITY' },
    artTheme: 'berry',
    image: ORIGINAL_ASSETS.teaWall,
    artworkKey: 'berry-bliss'
  }),
  product({
    id: 'chill-chai',
    slug: 'chill-chai',
    name: 'Chill Chai',
    family: 'Herbal Tea',
    vaults: ['tea'],
    category: 'tea',
    description: 'Warm spice profile from the 18GATE herbal tea wall.',
    variants: [{ id: 'tin', label: 'Menu tin', price: 20 }],
    flipThree: { role: 'DEFEND' },
    artTheme: 'spice',
    image: ORIGINAL_ASSETS.teaWall,
    artworkKey: 'chill-chai'
  }),
  product({
    id: 'sleepytime',
    slug: 'sleepytime',
    name: 'Sleepytime',
    family: 'Herbal Tea',
    vaults: ['tea'],
    category: 'tea',
    description: 'Night card from the 18GATE herbal tea wall.',
    variants: [{ id: 'tin', label: 'Menu tin', price: 20 }],
    flipThree: { role: 'DEFEND' },
    artTheme: 'moon',
    image: ORIGINAL_ASSETS.teaWall,
    artworkKey: 'sleepytime'
  }),
  product({
    id: 'tropical-sunset-tea',
    slug: 'tropical-sunset-tea',
    name: 'Tropical Sunset',
    family: 'Herbal Tea',
    vaults: ['tea'],
    category: 'tea',
    description: 'Bright tropical card from the 18GATE herbal tea wall.',
    variants: [{ id: 'tin', label: 'Menu tin', price: 20 }],
    flipThree: { role: 'ATTACK' },
    artTheme: 'tropic',
    image: ORIGINAL_ASSETS.teaWall,
    artworkKey: 'tropical-sunset-tea'
  }),
  product({
    id: 'hemp-flower-premium',
    slug: 'hemp-flower-premium',
    name: 'Hemp Flower',
    family: 'Premium Grade',
    vaults: ['flower'],
    category: 'flower',
    tagline: 'Hemp derived certified.',
    description: 'Premium grade hemp flower from the Trade Vault Manchester product row. Original bud photography drops into this frame — no generic cannabis stock is used.',
    variants: [
      { id: '1g', label: '1G', price: null },
      { id: '3.5g', label: '3.5G', price: null },
      { id: '7g', label: '7G', price: null },
      { id: '14g', label: '14G', price: null },
      { id: '28g', label: '28G', price: null }
    ],
    stock: 'ready',
    flipThree: { role: 'ABILITY' },
    artTheme: 'flower',
    artworkKey: 'hemp-flower-premium'
  }),
  product({
    id: 'hemp-hat',
    slug: 'hemp-hat',
    name: 'Hemp Hat',
    family: 'Limited Edition',
    vaults: ['accessories'],
    category: 'accessories',
    description: 'Limited edition El Castro hemp hat from the Trade Vault Manchester product row.',
    variants: [{ id: 'os', label: 'Limited edition', price: null }],
    stock: 'ready',
    flipThree: { role: 'ABILITY' },
    artTheme: 'steel',
    artworkKey: 'hemp-hat'
  }),
  product({
    id: 'black-dcbd-hoodie',
    slug: 'black-dcbd-hoodie',
    name: 'Black DCBD Hoodie',
    family: 'Estate Merch',
    vaults: ['accessories'],
    category: 'accessories',
    description: 'Black hoodie with original DCBD artwork placement.',
    variants: [{ id: 'os', label: 'Estate hoodie', price: null }],
    stock: 'ready',
    flipThree: { role: 'ABILITY' },
    artTheme: 'steel',
    image: ORIGINAL_ASSETS.hoodie,
    artworkKey: 'hoodie-black-dcbd'
  }),
  product({
    id: 'bb1-trapstar-manchester-takeover',
    slug: 'bb1-trapstar-manchester-takeover',
    name: 'BB1 Trapstar Manchester Takeover',
    family: 'Collectible Card Set',
    vaults: ['premium-vault', 'vault', 'accessories'],
    category: 'collectible',
    tagline: 'Rainy city. Luxury everything. Real trapstar energy.',
    description:
      'Physical collectible card set. 18 Commons, 8 Rarer, 5 Ultra Rare, 1 Luxury Product Discount Card, 1 Exaggerated Manchester Card. Gold foil. Magnetic close. Limited edition. Built for collectors.',
    facts: ['33 cards', 'Gold foil finish', 'Magnetic close deck box', 'Luxury product discount card included'],
    variants: [{ id: 'set', label: 'Full set', price: null }],
    stock: 'limited',
    flipThree: {
      role: 'ABILITY',
      ability: { name: 'Manchester Takeover', text: 'Bridges physical merch discounts and the collector vault.' }
    },
    rarity: 'legendary',
    artTheme: 'manchester',
    image: dropSrc('bb1Trapstar'),
    poster: dropSrc('bb1Trapstar'),
    artworkKey: 'bb1-trapstar-manchester'
  }),
  product({
    id: 'flip-three-gangsta-ancient',
    slug: 'flip-three-gangsta-ancient',
    name: 'Flip Three — Gangsta Ancient People',
    family: 'Flip Three Deck',
    vaults: ['vault', 'premium-vault'],
    category: 'collectible',
    description: '20 common + 10 luxury. Ancient history with street authority. DCBD original art, gold foil, unique numbers, holographic finish.',
    variants: [{ id: 'deck', label: 'Deck', price: null }],
    stock: 'ready',
    flipThree: { role: 'ATTACK', deck: 'gangsta-ancient-people' },
    artTheme: 'ancient-gold',
    image: dropSrc('flipThreeDecks'),
    artworkKey: 'flip-three-decks'
  }),
  product({
    id: 'flip-three-plutos-babies',
    slug: 'flip-three-plutos-babies',
    name: "Flip Three — Pluto's Babies",
    family: 'Flip Three Deck',
    vaults: ['vault', 'premium-vault'],
    category: 'collectible',
    description: '20 common + 10 luxury. Underworld wealth deck. History. Legends. Hustle.',
    variants: [{ id: 'deck', label: 'Deck', price: null }],
    stock: 'ready',
    flipThree: { role: 'ABILITY', deck: 'plutos-babies' },
    artTheme: 'pluto',
    image: dropSrc('flipThreeDecks'),
    artworkKey: 'flip-three-decks'
  }),
  product({
    id: 'flip-three-empire-gangsters',
    slug: 'flip-three-empire-gangsters',
    name: 'Flip Three — Empire Gangsters 2026',
    family: 'Flip Three Deck',
    vaults: ['vault', 'premium-vault'],
    category: 'collectible',
    description: '20 common + 10 luxury. Rome crossed with modern luxury. Play the past. Own the future.',
    variants: [{ id: 'deck', label: 'Deck', price: null }],
    stock: 'ready',
    flipThree: { role: 'ATTACK', deck: 'empire-gangsters-2026' },
    artTheme: 'empire',
    image: dropSrc('flipThreeDecks'),
    artworkKey: 'flip-three-decks'
  })
];

export const MIX = MIX_OFFER;

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function productsInVault(slug) {
  return PRODUCTS.filter((p) => p.vaults?.includes(slug));
}

export function relatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS.filter((p) => p.slug !== product.slug && p.vaults.some((v) => product.vaults.includes(v))).slice(0, limit);
}

export function formatPrice(value) {
  if (value == null) return 'Estate enquiry';
  return `£${Number(value).toFixed(value % 1 === 0 ? 0 : 2)}`;
}

export function stockLabel(stock) {
  if (stock === 'limited-drop') return 'Limited drop';
  if (stock === 'limited') return 'Limited';
  if (stock === 'ready') return 'Frame ready';
  return 'In the vault';
}
