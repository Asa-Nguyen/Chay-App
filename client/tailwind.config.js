/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "rgb(132, 200, 245)",
        secondary : "#058187"
      }
    },
  },
  plugins: [],
}

