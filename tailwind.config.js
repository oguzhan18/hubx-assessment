/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0B122A',
        action: '#0381FF',
      },
    },
  },
  plugins: [],
};
