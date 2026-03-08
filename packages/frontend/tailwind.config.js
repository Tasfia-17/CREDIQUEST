/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        creditcoin: {
          orange: '#FF6B00',
          dark: '#1A1A1A',
          gray: '#2D2D2D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        game: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};
