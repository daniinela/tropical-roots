import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        olive:  { DEFAULT: '#2D3B2A', mid: '#4A5E45' },
        gold:   { DEFAULT: '#B8924A', light: '#D4A96A' },
        cream:  { DEFAULT: '#F5F0E8', warm: '#FAF7F2' },
        beige:  '#E8DFD0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config