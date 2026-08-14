export const FLIP_RARITY = [
  { id: 'common', label: 'Common', text: 'Smooth & solid.', color: '#f8fafc' },
  { id: 'rare', label: 'Rare', text: 'Elevated vibes.', color: '#22c55e' },
  { id: 'epic', label: 'Epic', text: 'Potent & powerful.', color: '#3b82f6' },
  { id: 'legendary', label: 'Legendary', text: 'The chosen few.', color: '#a855f7' },
  { id: 'mythic', label: 'Mythic', text: 'Untouchable.', color: '#ef4444' },
  { id: 'cursed', label: 'Cursed', text: 'Cure to find out.', color: '#f59e0b' },
  { id: 'wonder', label: 'Wonder', text: 'Cosmic upgrade pull.', color: '#c084fc' }
];

export const FLIP_ATTRIBUTES = [
  { id: 'attack', label: 'Attack', text: 'Feel the rush. Hit hard.' },
  { id: 'defend', label: 'Defend', text: 'Chill, recover, balance.' },
  { id: 'ability', label: 'Ability', text: 'Unique effects. Unlocked.' },
  { id: 'cure', label: 'Cure to find out', text: 'Some secrets are earned.' }
];

export const FLIP_THREE_DECKS = [
  {
    id: 'gangsta-ancient-people',
    slug: 'gangsta-ancient-people',
    name: 'Gangsta Ancient People',
    theme: 'Ancient history with street authority.',
    commons: 20,
    luxury: 10,
    commonNames: [
      'Spartan Roadman',
      'Pharaoh Flex',
      'Viking Barber',
      'Gladiator Gaz',
      'Babylon Boss',
      'Gold Tooth Scribe',
      'Stone Tablet Steve'
    ],
    luxuryNames: [
      'Gangsta King Leonidas',
      'Emperor Augustus "The Don"',
      'Ramses Gold Mask',
      'Alexander "World Tour"',
      'Medusa Queenpin',
      'Hercules Heavyweight',
      'Athena Boss Lady',
      'Odin Executive',
      'Caesar Supreme',
      'Pharaoh of Fortune'
    ]
  },
  {
    id: 'plutos-babies',
    slug: 'plutos-babies',
    name: "Pluto's Babies",
    theme: 'Underworld wealth, vault rats and billionaire babies.',
    commons: 20,
    luxury: 10,
    commonNames: [
      'Coin Snatcher',
      'Gold Goblin',
      'Underworld Runner',
      'Shadow Kid',
      'Vault Rat',
      'Rich Rookie',
      'Ghost Banker'
    ],
    luxuryNames: [
      'Baby Plutus',
      'Golden Cornucopia King',
      "Hades' Accountant",
      'Vault Emperor',
      'Diamond Dealer',
      'Ghost Billionaire',
      'Fortune Overlord',
      'Crown of Riches',
      'Underworld Prince',
      'Billionaire Baby'
    ]
  },
  {
    id: 'empire-gangsters-2026',
    slug: 'empire-gangsters-2026',
    name: 'Empire Gangsters 2026 Edition',
    theme: 'Rome crossed with modern luxury.',
    commons: 20,
    luxury: 10,
    commonNames: [
      'Legion Roadman',
      'Roman Taxi Boss',
      'Senate Hustler',
      'Palace Guard',
      'Olive Oil King',
      'Wine Runner',
      'Colosseum Kid',
      'Chariot Racer',
      'Laurel Flex'
    ],
    luxuryNames: [
      'Cleopatra VII Philopator',
      'Mark Antony',
      'Julius Caesar',
      'Cleopatra Gold Edition',
      'Caesar Black Card',
      'Antony Platinum Chain',
      'Roman Empire Vault',
      'Crown of Alexandria',
      'Imperial Fortune',
      'Eternal Empire Legend'
    ]
  }
];

export const BB1_SET = {
  name: 'BB1 Trapstar: The Manchester Takeover',
  total: 33,
  breakdown: [
    { rarity: 'Commons', count: 18, text: 'Everyday trapstar moments, drip, hustle & grind.' },
    { rarity: 'Rarer', count: 8, text: 'Levelled up characters & moments.' },
    { rarity: 'Ultra Rare', count: 5, text: 'The hardest flex. Rare cards with serious value.' },
    { rarity: 'Luxury Product Discount Card', count: 1, text: 'Exclusive discounts on real BB1 Trapstar products.' },
    { rarity: 'Exaggerated Manchester Card', count: 1, text: 'Oversized card of rainy Manchester trapstar energy.' }
  ]
};

export const WEIGHT_CATEGORIES = ['1G', '3.5G', '7G', '14G', '28G', '1/2LB', '1LB', 'Q POUND', 'HP POUND'];
