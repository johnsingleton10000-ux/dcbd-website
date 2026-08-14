import { ORIGINAL_ASSETS, dropSrc } from './artwork';

export const VAULTS = [
  {
    slug: 'concentrates',
    name: 'Concentrate Vault',
    nav: 'Concentrate Vault',
    icon: 'jar',
    theme: 'purple',
    layout: 'tcg-grid',
    kicker: 'Powerful extracts. Higher stakes.',
    headline: 'Concentrate Vault',
    lede: 'Premium concentrates crafted for champions. Level up your flip game with elite potency.',
    quote: "We don't just flip. We control the outcome.",
    heroArt: dropSrc('concentrateVaultHero'),
    accent: '#8a2be2'
  },
  {
    slug: 'calibolt',
    name: 'CaliBolt',
    nav: 'CaliBolt',
    icon: 'bolt',
    theme: 'cali',
    layout: 'cali',
    kicker: 'Manchester made. California refined.',
    headline: 'CaliBolt',
    lede: 'Estate Cali Concentrate. Extracted. Refined. Perfected. 90u live resin with Manc Made authority.',
    quote: 'Quality you can smell.',
    heroArt: dropSrc('estateCaliConcentrate'),
    supportArt: ORIGINAL_ASSETS.caliGrid,
    accent: '#f5b942'
  },
  {
    slug: 'premium',
    name: 'Premium',
    nav: 'Premium',
    icon: 'diamond',
    theme: 'gold',
    layout: 'premium',
    kicker: 'No heat. All benefits.',
    headline: 'Premium Vault',
    lede: 'Scarce, hand-worked, small-batch Estate pieces. Patela, piatella and certified drops.',
    quote: 'Real terpenes. Real flavour. Real effect. Real reward.',
    heroArt: dropSrc('patelaBlueCheese'),
    accent: '#d4af37'
  },
  {
    slug: 'hash',
    name: 'Hash',
    nav: 'Hash',
    icon: 'press',
    theme: 'green',
    layout: 'catalog',
    kicker: 'Our Revolution — premium hash, UK legal hemp.',
    headline: 'Hash Estate',
    lede: 'Dry sift. Cold cured. Pressed. Hand finished. From the Estate to yours.',
    quote: 'One plant. One people. One planet.',
    heroArt: dropSrc('dcbbHashCatalog'),
    supportArt: ORIGINAL_ASSETS.hashProcess,
    accent: '#22c55e'
  },
  {
    slug: 'extracts',
    name: 'Extracts',
    nav: 'Extracts',
    icon: 'drop',
    theme: 'amber',
    layout: 'clean',
    kicker: 'Clean presentation. Estate potency.',
    headline: 'Extracts',
    lede: 'Sauces, badders, diamonds, live resin and e-liquids from the Estate menu — kept photographic and premium.',
    quote: 'Collect. Trade. Laugh. Flex. Be legendary every day.',
    heroArt: dropSrc('estateMenu'),
    supportArt: ORIGINAL_ASSETS.eliquidWall,
    accent: '#f97316'
  },
  {
    slug: 'tea',
    name: 'Herbal Tea',
    nav: 'Tea Vault',
    icon: 'cup',
    theme: 'tea',
    layout: 'tea',
    kicker: '18GATE herbal tea wall',
    headline: 'Tea Vault',
    lede: 'Herbal tea culture with collectible menu cards, THCA piatella tea and Estate exclusive brews.',
    quote: 'Pull up a chair. Grab a brew. Step into the Disability Estate.',
    heroArt: ORIGINAL_ASSETS.teaWall,
    supportArt: dropSrc('applesBananasPiatella'),
    accent: '#84cc16'
  },
  {
    slug: 'vault',
    name: 'The Vault',
    nav: 'The Vault',
    icon: 'vault',
    theme: 'red',
    layout: 'vault',
    kicker: 'The Vault Cali Exotics',
    headline: 'The Vault',
    lede: 'Limited releases, character-card concentrates and the rules of the DCBD collector economy.',
    quote: 'Real world purchases. Real rewards. Digital flex.',
    heroArt: dropSrc('vaultCaliExotics'),
    accent: '#ef4444'
  },
  {
    slug: 'premium-vault',
    name: 'Premium Vault',
    nav: 'Premium Vault',
    icon: 'crown',
    theme: 'exclusive',
    layout: 'exclusive',
    kicker: 'Access → Scarcity → Collection → Exclusivity',
    headline: 'Premium Vault',
    lede: 'Higher-tier access for limited sets, luxury cards and Estate-certified drops.',
    quote: 'The Estate is the family. The revolution is forever.',
    heroArt: dropSrc('bb1Trapstar'),
    accent: '#d4af37'
  },
  {
    slug: 'flower',
    name: 'Flower',
    nav: 'Flower Vault',
    icon: 'flower',
    theme: 'leaf',
    layout: 'flower',
    kicker: 'Hemp-derived. Vault approved.',
    headline: 'Flower',
    lede: 'A dedicated flower hall. Original bud photography drops into the frames — nothing generic is invented here.',
    quote: 'All products tested. All products verified. All products vault approved.',
    heroArt: dropSrc('tradeVaultManchester'),
    accent: '#4ade80'
  },
  {
    slug: 'accessories',
    name: 'Hemp Accessories',
    nav: 'Accessory Vault',
    icon: 'merch',
    theme: 'steel',
    layout: 'merch',
    kicker: 'Estate supply. Physical flex.',
    headline: 'Hemp Accessories',
    lede: 'Merch and physical accessories from the DCBD universe — hoodie, hat, membership card and Estate tools.',
    quote: 'Elite products. Elite players.',
    heroArt: ORIGINAL_ASSETS.hoodie,
    supportArt: ORIGINAL_ASSETS.membership,
    accent: '#e5e7eb'
  }
];

export function getVault(slug) {
  return VAULTS.find((v) => v.slug === slug) || null;
}

export const SIDEBAR_VAULTS = [
  'flower',
  'concentrates',
  'tea',
  'calibolt',
  'hash',
  'extracts',
  'premium',
  'vault',
  'premium-vault',
  'accessories'
];
