/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        inriaSerif: ['"Inria Serif"', "serif"],
      },
      colors: {
        customDark: "#023447",
        customLight: "#dbe8ea",
      },
    },
  },
  plugins: [],
}
