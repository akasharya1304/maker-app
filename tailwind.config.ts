import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        'drawerStart': '#BD7C31',
        'drawerEnd': '#6B461C',
        'orangeHighted': '#F28911',
        'orangeHoverHighted': '#734B1E',
        'whiteColor': '#FFF',
        'darkColor': '#242424',
        'darkModeColor': '#1E293B'
      },
    },
  },
  plugins: [],
} satisfies Config

