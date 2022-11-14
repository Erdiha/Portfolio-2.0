/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-wrapper':
          "linear-gradient(to right bottom, rgba('#000',0.8),[rgb(173,221,208,0.5)]))",
      },
      colors: {
        'custom-black': '#222831',
        'custom-gray': '#393E46',
        'custom-blue': '#00ADB5',
        'custom-white': '#EEEEEE',
      },
    },
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  plugins: [],
};
