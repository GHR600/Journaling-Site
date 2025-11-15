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
        primary: {
          DEFAULT: '#ca8a04',
          dark: '#a16207',
        },
        accent: '#ca8a04', // yellow-600
        background: '#0A0A0F',
        card: '#1A1A24',
        text: {
          primary: '#e2e8f0',
          secondary: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Yellowtail', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
