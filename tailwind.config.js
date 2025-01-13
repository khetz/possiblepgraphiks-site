/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['Segoe UI'],
        baskerville: ['Baskerville Old Face']
      },
      keyframes: {
        zoom: {
          '0%': { backgroundSize: '100%' },
          '100%': { backgroundSize: '180%'},
        }
      },
      animation: {
        zoom: 'zoom 5s ease-in-out'
      }
    },
  },
  plugins: [],
}

