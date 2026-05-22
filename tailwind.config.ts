import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#99292D',
          gold:   '#FAA21B',
          pink:   '#EE3869',
          teal:   '#17998F',
          blue:   '#2D5D8A',
          cream:  '#F6F1E7',
          dark:   '#1A1A2E',
        },
      },
      fontFamily: {
        hero:    ['var(--font-hero)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Nunito', 'sans-serif'],
        body:    ['var(--font-body)', 'Poppins', 'sans-serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'pulse-soft':   'pulse-soft 3s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'bounce-soft':  'bounce-soft 2s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'gradient':     'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-24px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.7' },
          '50%':      { opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'brand':       '0 20px 60px rgba(153, 41, 45, 0.2)',
        'brand-gold':  '0 20px 60px rgba(250, 162, 27, 0.3)',
        'brand-pink':  '0 20px 60px rgba(238, 56, 105, 0.25)',
        'card':        '0 8px 32px rgba(0,0,0,0.08)',
        'card-hover':  '0 24px 64px rgba(0,0,0,0.14)',
        'glow-gold':   '0 0 40px rgba(250, 162, 27, 0.4)',
        'glow-red':    '0 0 40px rgba(153, 41, 45, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}

export default config
