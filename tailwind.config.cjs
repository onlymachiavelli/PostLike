/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F52248",
        grn: "#D6FF7D",
        red: "#EE2D21",
        green: "#0CA363",
        ddark: "#2D2C2C",
        dddark: "#363636",
        dark: "#202020",
        brown: "#EE8321",
      },
      fontFamily: {},
      backgroundImage: {},
    },
  },
  plugins: [],
}
