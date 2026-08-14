/**
 * Artwork registry for the physical marketplace.
 *
 * Raster posters uploaded in chat are mapped to drop-in paths under
 * /public/artwork/drops. When the original file is present, UI frames
 * render it. When it is not yet on disk, the matching section stays
 * structurally ready and uses DCBD presentation chrome — never a
 * generic placeholder photo.
 *
 * Original DCBD SVG assets already in the universe live under /artwork
 * and /images and are used immediately.
 */

export const ORIGINAL_ASSETS = {
  hero: '/artwork/hero.svg',
  founder: '/artwork/hero-founder.svg',
  caliGrid: '/artwork/cali-extracts-grid.svg',
  teaWall: '/artwork/thca-herbal-teas-menu.svg',
  hashProcess: '/artwork/hash-organic-extraction.svg',
  damClassics: '/artwork/dam-classics-cards.svg',
  eliquidWall: '/artwork/eliquid-flavours.svg',
  thcpCali: '/artwork/thcp-eliquid-cali.svg',
  afghanSticky: '/artwork/afghan-sticky-bundle.svg',
  hoodie: '/artwork/hoodie-black-dcbd.svg',
  membership: '/artwork/membership-card.svg',
  blueberrySlush: '/images/blueberry-slush-card.svg',
  weddingCake: '/images/wedding-cake-card.svg',
  templeBall: '/images/temple-ball-card.svg',
  danishCrumble: '/images/danish-crumble-card.svg'
};

export const DROP_ARTWORK = {
  concentrateVaultHero: {
    key: 'concentrate-vault-hero',
    src: '/artwork/drops/concentrate-vault-hero.jpg',
    section: 'concentrates',
    role: 'hero',
    note: 'Concentrate Vault UI — gold title, hooded caller, category sidebar.'
  },
  concentrateVaultGrid: {
    key: 'concentrate-vault-grid',
    src: '/artwork/drops/concentrate-vault-grid.jpg',
    section: 'concentrates',
    role: 'grid-reference',
    note: 'Fifteen-card Concentrate Vault with Flip Three stats and Limited Drop row.'
  },
  patelaBlueCheese: {
    key: 'patela-blue-cheese-fyreberry',
    src: '/artwork/drops/patela-blue-cheese-fyreberry.jpg',
    section: 'premium',
    role: 'product-poster',
    productSlug: 'blue-cheese-x-fyreberry-patela',
    note: 'Blue Cheese x Fyreberry Patela cold-brew concentrate poster.'
  },
  vaultCaliExotics: {
    key: 'vault-cali-exotics',
    src: '/artwork/drops/vault-cali-exotics.jpg',
    section: 'vault',
    role: 'collection-poster',
    note: 'Six Vault Cali Exotics character cards and DCBD Vault Rules banner.'
  },
  dcbbHashCatalog: {
    key: 'dcbb-worldwide-hash',
    src: '/artwork/drops/dcbb-worldwide-hash.jpg',
    section: 'hash',
    role: 'catalog-poster',
    note: 'DCBB Worldwide premium hash catalog with six products and process.'
  },
  applesBananasPiatella: {
    key: 'apples-bananas-piatella',
    src: '/artwork/drops/apples-bananas-piatella.jpg',
    section: 'tea',
    role: 'product-poster',
    productSlug: 'apples-bananas-thca-piatella',
    note: 'Apples & Bananas THCA Piatella Hash Tea product sheet.'
  },
  estateReceipt: {
    key: 'dcbd-estate-receipt',
    src: '/artwork/drops/dcbd-estate-receipt.jpg',
    section: 'backstory',
    role: 'brand-poster',
    note: 'Estate Revolution gorilla poster and weight-category receipt.'
  },
  tradeVaultManchester: {
    key: 'trade-vault-manchester',
    src: '/artwork/drops/trade-vault-manchester.jpg',
    section: 'dashboard',
    role: 'dashboard-hero',
    note: 'Trade Vault Manchester dashboard and hemp-derived product row.'
  },
  flipThreeDecks: {
    key: 'flip-three-decks',
    src: '/artwork/drops/flip-three-decks.jpg',
    section: 'cards',
    role: 'deck-master',
    note: 'Flip Three three-deck master sheet — 90 cards.'
  },
  flipThreeDecksAlt: {
    key: 'flip-three-decks-alt',
    src: '/artwork/drops/flip-three-decks-alt.jpg',
    section: 'cards',
    role: 'deck-master',
    note: 'Flip Three decks detail sheet with luxury portraits.'
  },
  bb1Trapstar: {
    key: 'bb1-trapstar-manchester',
    src: '/artwork/drops/bb1-trapstar-manchester.jpg',
    section: 'premium-vault',
    role: 'product-poster',
    productSlug: 'bb1-trapstar-manchester-takeover',
    note: 'BB1 Trapstar Manchester Takeover collectible card set.'
  },
  estateCaliConcentrate: {
    key: 'estate-cali-concentrate',
    src: '/artwork/drops/estate-cali-concentrate.jpg',
    section: 'calibolt',
    role: 'hero',
    productSlug: 'estate-cali-concentrate',
    note: 'Estate Cali Concentrate — Manc Made 90u live resin hero.'
  },
  gate18: {
    key: '18gate-entry',
    src: '/artwork/drops/18gate-entry.jpg',
    section: 'gate',
    role: 'hero',
    note: '18GATE Disability Estate entry portal.'
  },
  estateMenu: {
    key: 'estate-menu',
    src: '/artwork/drops/estate-menu.jpg',
    section: 'store',
    role: 'menu-board',
    note: 'Estate Concentrates / Hashes / E-Liquids collectible menu.'
  },
  estateMenuRarity: {
    key: 'estate-menu-rarity',
    src: '/artwork/drops/estate-menu-rarity.jpg',
    section: 'store',
    role: 'menu-board',
    note: 'Estate menu with rarity legend, mix offer and attribute key.'
  }
};

export function dropSrc(key) {
  return DROP_ARTWORK[key]?.src || null;
}
