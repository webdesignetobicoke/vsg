import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2240',
          light: '#1a3a5c',
          dark: '#051119',
          mid: '#0d2247',
        },
        orange: {
          DEFAULT: '#E84A27',
          light: '#F26347',
          dark: '#C63A1A',
        },
        slate: {
          custom: '#f5f5f7',
        }
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        display: ['var(--font-barlow-condensed)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'rink-gradient': 'linear-gradient(135deg, rgba(2,27,59,0.95) 0%, rgba(13,34,71,0.9) 50%, rgba(2,27,59,0.95) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
