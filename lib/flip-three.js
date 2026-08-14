export const FLIP_RARITY = [
  { id: 'common', label: 'Common', text: 'Smooth & solid.', color: '#e5e7eb' },
  { id: 'rare', label: 'Rare', text: 'Elevated vibes.', color: '#22c55e' },
  { id: 'epic', label: 'Epic', text: 'Potent & powerful.', color: '#38bdf8' },
  { id: 'legendary', label: 'Legendary', text: 'The chosen few.', color: '#c026d3' },
  { id: 'mythic', label: 'Mythic', text: 'Untouchable.', color: '#ef4444' },
  { id: 'cursed', label: 'Cursed', text: 'Cure to find out.', color: '#f59e0b' },
  { id: 'wonder', label: 'Wonder', text: 'Cosmic upgrade pull.', color: '#e9d5ff' }
];

export const FLIP_ATTRIBUTES = [
  { id: 'attack', label: 'ATTACK', text: 'Feel the rush. Hit hard.', icon: '⚔' },
  { id: 'defend', label: 'DEFEND', text: 'Chill, recover, balance.', icon: '🛡' },
  { id: 'ability', label: 'ABILITY', text: 'Unique effects. Unlocked.', icon: '⬡' },
  { id: 'cure', label: 'CURE TO FIND OUT', text: 'Some secrets are earned.', icon: '✚' }
];

export const FLIP_DECKS = [
  {
    id: 'vault-cali',
    name: 'Vault Cali Exotics',
    theme: 'Street royalty. Coast fire. Estate frames.'
  },
  {
    id: 'manchester',
    name: 'Manchester Collection',
    theme: 'Northern Quarter rain. Bee stamps. Home endz.'
  },
  {
    id: 'gangsta-ancient',
    name: 'Gangsta Ancient People',
    theme: 'Ancient history with street authority.'
  },
  {
    id: 'plutos-babies',
    name: "Pluto's Babies",
    theme: 'Underworld wealth, vault rats, billionaire babies.'
  },
  {
    id: 'empire-2026',
    name: 'Empire Gangsters 2026',
    theme: 'Rome crossed with modern luxury.'
  }
];

export const FLIP_CARDS = [
  {
    id: 'gelato-cake',
    name: 'Gelato Cake',
    rarity: 'legendary',
    attr: 'attack',
    atk: 91,
    def: 64,
    ability: 'Needs Curing',
    run: 'Heavy Hitter',
    series: 'Vault Cali Exotics',
    art: '/art/flip-gelato.jpg',
    lore: 'Diamonds don\'t lie. A legendary attack card from the Cali vault wall.'
  },
  {
    id: 'purple-punch',
    name: 'Purple Punch',
    rarity: 'legendary',
    attr: 'defend',
    atk: 77,
    def: 88,
    ability: 'Needs Curing',
    run: 'Slow Burn',
    series: 'Vault Cali Exotics',
    art: '/art/flip-punch.jpg',
    lore: 'Night-shade defence. The card you pull when the Estate needs balance.'
  },
  {
    id: 'mcr-legend',
    name: 'MCR Legend',
    rarity: 'legendary',
    attr: 'ability',
    atk: 84,
    def: 80,
    ability: 'Estate Pulse',
    run: 'Home Endz',
    series: 'Manchester Collection',
    art: '/art/flip-mcr.jpg',
    lore: 'Manc made. Rain on brick. The home-endz ability card.'
  },
  {
    id: 'napoleon',
    name: 'Napoleon',
    rarity: 'epic',
    attr: 'cure',
    atk: 70,
    def: 92,
    ability: 'Cure to find out',
    run: 'Temple Ball',
    series: 'DCBB Worldwide',
    art: '/art/flip-napoleon.jpg',
    lore: 'Old money. New flavour. A cursed-adjacent epic with temple-ball energy.'
  },
  {
    id: 'cali-gold',
    name: 'Cali Gold',
    rarity: 'epic',
    attr: 'attack',
    atk: 86,
    def: 61,
    ability: 'Needs Curing',
    run: 'Coast Flex',
    series: 'Estate Cali',
    art: '/art/cali-jar.jpg',
    lore: 'Extracted. Refined. Perfected. Terps. Flavour. Potency.'
  },
  {
    id: 'peach-paradise',
    name: 'Peach Paradise',
    rarity: 'common',
    attr: 'defend',
    atk: 42,
    def: 70,
    ability: 'Soft Collect',
    run: 'Daylight',
    series: 'Tea Vaults',
    art: '/art/tea-jar.jpg',
    lore: 'A fruit-led house blend with a soft collectible identity.'
  },
  {
    id: 'minty-zen',
    name: 'Minty Zen',
    rarity: 'common',
    attr: 'defend',
    atk: 38,
    def: 74,
    ability: 'Clean Label',
    run: 'Fresh Cut',
    series: 'Tea Vaults',
    art: '/art/tea-jar.jpg',
    lore: 'Clean mint profile. Education-first. 18+ only.'
  },
  {
    id: 'berry-bliss',
    name: 'Berry Bliss',
    rarity: 'rare',
    attr: 'ability',
    atk: 55,
    def: 60,
    ability: 'Sweet Pull',
    run: 'Colour Hit',
    series: 'Tea Vaults',
    art: '/art/tea-jar.jpg',
    lore: 'Sweet berry menu card with Estate-born artwork energy.'
  },
  {
    id: 'chill-chai',
    name: 'Chill Chai',
    rarity: 'rare',
    attr: 'defend',
    atk: 48,
    def: 79,
    ability: 'Night Watch',
    run: 'Warm Spice',
    series: 'Tea Vaults',
    art: '/art/hash-block.jpg',
    lore: 'The night-card of the herbal wall. Darker lounge energy.'
  },
  {
    id: 'grape-ape',
    name: 'Grape Ape',
    rarity: 'epic',
    attr: 'ability',
    atk: 72,
    def: 68,
    ability: 'Vapour Crown',
    run: 'Purple Wave',
    series: 'Estate E-Liquids',
    art: '/art/eliquid-bottle.jpg',
    lore: 'Neon liquid wall. Each flavour is its own micro-card.'
  },
  {
    id: 'amnesia-haze',
    name: 'Amnesia Haze Hash',
    rarity: 'rare',
    attr: 'attack',
    atk: 81,
    def: 52,
    ability: 'Needs Curing',
    run: 'Haze Strike',
    series: 'Estate Hashes',
    art: '/art/hash-block.jpg',
    lore: 'Green-frame hash card. Pressed, not stirred.'
  },
  {
    id: 'wonder-bee',
    name: 'Wonder Bee',
    rarity: 'wonder',
    attr: 'cure',
    atk: 99,
    def: 99,
    ability: 'Manchester Made',
    run: 'Quality You Can Smell',
    series: 'Manchester Collection',
    art: '/art/manc-bee.jpg',
    lore: 'Upgrade pull. The bee that stamps every Manc-made drop.'
  }
];

export function rarityMeta(id) {
  return FLIP_RARITY.find((r) => r.id === id) || FLIP_RARITY[0];
}

export function attrMeta(id) {
  return FLIP_ATTRIBUTES.find((a) => a.id === id) || FLIP_ATTRIBUTES[0];
}

export function pickHouseHand(count = 3) {
  const pool = [...FLIP_CARDS];
  const hand = [];
  while (hand.length < count && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    hand.push(pool.splice(i, 1)[0]);
  }
  return hand;
}

export function handPower(cards) {
  return cards.reduce((sum, card) => sum + card.atk + Math.round(card.def * 0.45), 0);
}
