/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary-lime': 'hsl(61, 70%, 52%)',
        'clr-primary-red': 'hsl(4, 69%, 50%)',
        'clr-white': 'hsl(0, 0%, 100%)',
        'clr-neutral-100': 'hsl(202, 86%, 94%)',
        'clr-neutral-300': 'hsl(203, 41%, 72%)',
        'clr-neutral-500': 'hsl(200, 26%, 54%)',
        'clr-neutral-700': 'hsl(200, 24%, 40%)',
        'clr-neutral-900': 'hsl(202, 55%, 16%)',
      }
    },
  },
  plugins: [],
}
