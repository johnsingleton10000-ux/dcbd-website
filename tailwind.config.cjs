module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        vault: '#050505',
        gold: '#d4af37',
        'gold-bright': '#ffd700',
        estate: '#8a2be2',
        gate: '#b7ff2a',
        cali: '#f5b942'
      },
      boxShadow: {
        vault: '0 0 70px rgba(138, 43, 226, 0.22), 0 0 40px rgba(212, 175, 55, 0.12)',
        gold: '0 0 40px rgba(212, 175, 55, 0.28)',
        purple: '0 0 50px rgba(138, 43, 226, 0.35)'
      },
      borderRadius: {
        vault: '1.15rem'
      }
    }
  },
  plugins: []
};
