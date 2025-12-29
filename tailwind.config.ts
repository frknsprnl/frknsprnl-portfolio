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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        accent: {
          DEFAULT: '#64ffda',
          dark: '#0a192f',
        },
        text: {
          primary: '#ccd6f6',
          secondary: '#8892b0',
          tertiary: '#a8b2d1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config

