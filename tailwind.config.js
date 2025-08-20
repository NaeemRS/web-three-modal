/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      screens: {
        sm: "450px",
        md1: "900px",
        md2: "902x",
      },
      boxShadow: {
        whiteD: "0px 0px 3px #0000001f",
        darkF: "-7px 4px 13px #6c6c6c",
        hearderS: "9px 0px 3px #6c6c6c",
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
};
