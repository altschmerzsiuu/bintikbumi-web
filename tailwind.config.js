/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bb-navy':   '#142133',
        'bb-orange': '#E05C3A',
        'bb-cream':  '#EDE8E1',
        'bb-light':  '#F7F4F0',
        'bb-dark':   '#1A1A1A',
      },
      fontFamily: {
        display:  ['Anton', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        body:     ['Raleway', 'sans-serif'],
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
