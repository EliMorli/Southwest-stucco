import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary accent — terracotta/adobe (replaces "red")
        red: {
          DEFAULT: '#C2562B',
          bright: '#E07B4A',
          dark: '#8C3A1E',
        },
        // Deep warm earth tones (replaces "ink" black)
        ink: {
          DEFAULT: '#291D14',
          50: '#362819',
          100: '#402E20',
          200: '#533C28',
        },
        // Warm backgrounds
        warm: '#FAF3E7',
        warmgray: '#C4A88A',
        // Sun/sand gold (replaces "gold")
        gold: '#D4A574',
        // Body text on light surfaces
        text: '#3B2A1F',
        // New desert tokens
        sand: '#F1E4CF',
        bone: '#FAF3E7',
        sage: '#889078',
        adobe: '#8C3A1E',
        terracotta: '#C2562B',
        clay: '#E07B4A',
        sun: '#D4A574',
        mesa: '#291D14',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
        condensed: ['var(--font-barlow)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'desert-dusk':
          'linear-gradient(180deg, #291D14 0%, #402E20 38%, #6B3923 72%, #C2562B 100%)',
        'desert-sun':
          'radial-gradient(circle at 78% 30%, rgba(212,165,116,0.35) 0%, rgba(194,86,43,0.18) 28%, transparent 60%)',
        'mesa-fade':
          'linear-gradient(180deg, #291D14 0%, #362819 100%)',
        'sand-fade':
          'linear-gradient(180deg, #FAF3E7 0%, #F1E4CF 100%)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 20s linear infinite reverse',
        'halo-pulse': 'halop 3.5s ease-in-out infinite',
        'tick': 'tick 22s linear infinite',
        'blink': 'blink 2s ease-in-out infinite',
        'sun-pulse': 'sunpulse 6s ease-in-out infinite',
        'rise-in': 'risein 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadein 1.4s ease-out both',
        'kenburns': 'kenburns 18s ease-in-out infinite alternate',
      },
      keyframes: {
        halop: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        tick: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        sunpulse: {
          '0%,100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        risein: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1.15) translate(-1.5%, -1.5%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
