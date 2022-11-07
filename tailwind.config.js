/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        adelia: ['ADELIA', 'cursive'],
      },
      colors: {
        'custom-black': '#222831',
        'custom-gray': '#393E46',
        'custom-blue': '#00ADB5',
        'custom-white': '#EEEEEE',
      },
    },
  },
  plugins: [],
};
