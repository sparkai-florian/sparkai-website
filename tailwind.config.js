/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryCTA: '#2B00FF',
        spark: '#d4ff00',
      },
    },
  },
  plugins: [],
};
