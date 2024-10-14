/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar,
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: 'none',
        },
        '.no-scrollbar': {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      }
      addUtilities(newUtilities)
    }
  ],
}