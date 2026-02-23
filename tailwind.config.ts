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
          DEFAULT: '#021b3b',
          light: '#0a2d5c',
          dark: '#010f22',
          mid: '#0d2247',
        },
        orange: {
          DEFAULT: '#f36b21',
          light: '#f58040',
          dark: '#d45a15',
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
