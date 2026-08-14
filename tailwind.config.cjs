module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-bright': '#ffd700',
        estate: '#07040c',
        neon: '#c026d3',
        lime: '#b7ff2a'
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        marker: ['var(--font-marker)', 'cursive'],
        ops: ['var(--font-ops)', 'sans-serif'],
        body: ['var(--font-oswald)', 'Arial', 'sans-serif'],
        sans: ['var(--font-inter)', 'Arial', 'sans-serif']
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
        'marquee-rev': 'marquee-rev 22s linear infinite',
        flicker: 'flicker 3.2s infinite',
        'card-flash': 'card-flash 1.1s ease-in-out infinite',
        'sticker-pop': 'sticker-pop 4.5s ease-in-out infinite',
        'glitch-skew': 'glitch-skew 2.4s infinite linear alternate-reverse',
        spinslow: 'spin 18s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        flicker: {
          '0%, 19%, 21%, 23%, 80%, 100%': { opacity: '1' },
          '20%, 22%, 79%': { opacity: '0.45' }
        },
        'card-flash': {
          '0%, 100%': { filter: 'contrast(1) saturate(1)' },
          '50%': { filter: 'contrast(1.25) saturate(1.4)' }
        },
        'sticker-pop': {
          '0%, 100%': { transform: 'rotate(var(--r, -8deg)) scale(1)' },
          '50%': { transform: 'rotate(calc(var(--r, -8deg) + 4deg)) scale(1.06)' }
        },
        'glitch-skew': {
          '0%': { transform: 'skew(0deg)' },
          '20%': { transform: 'skew(-2deg)' },
          '40%': { transform: 'skew(1.4deg)' },
          '60%': { transform: 'skew(-0.8deg)' },
          '80%': { transform: 'skew(2deg)' },
          '100%': { transform: 'skew(0deg)' }
        }
      }
    }
  },
  plugins: []
};
