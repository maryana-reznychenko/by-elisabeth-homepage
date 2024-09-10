/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {


    colors: {
      'font-main': 'rgba(31, 52, 51, 1)',
      'font-light': 'rgba(249, 240, 232, 1)',
      'font-inactive': 'rgba(157, 153, 149, 1)',
      'accent': 'rgba(27, 50, 49, 1)',
      'main': 'rgba(253, 243, 232, 1)',
      'on-scroll-btn': 'rgba(253, 243, 232, 0.50)'
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