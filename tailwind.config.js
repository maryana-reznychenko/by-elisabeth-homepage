/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      'font-main': '#1F3433',
      'font-light': '#F9F0E8',
      'font-inactive': '#9D9995',
      'accent': '#1B3231',
      'main': 'FDF3E8',
      'background': '#FDF3E8'
    },
    extend: {
      fontFamily: {
        'arimo': ['Arimo', 'sans-serif'],
        'noto': ['Noto+Sans+Symbols', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02rem',
        normal: '0.05rem',
        wide: '0.1rem',
        wider: '0.2rem',
        widest: '0.3rem'
      },


    },
  },
  plugins: [],
}