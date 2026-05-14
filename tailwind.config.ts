import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#CC1B1B',
          bright: '#e02020',
          dark: '#8B0000',
        },
        ink: {
          DEFAULT: '#0d0d0d',
          50: '#141414',
          100: '#1a1a1a',
          200: '#222',
        },
        warm: '#FDF6EE',
        warmgray: '#c8b8a8',
        gold: '#FFD700',
        text: '#2a2a2a',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
        condensed: ['var(--font-barlow)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 20s linear infinite reverse',
        'halo-pulse': 'halop 3.5s ease-in-out infinite',
        'tick': 'tick 22s linear infinite',
        'blink': 'blink 2s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
};

export default config;
