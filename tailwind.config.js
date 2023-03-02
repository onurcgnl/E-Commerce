/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "add-btn-color": '#36aacc',
        "icons-color": '#fdb300'
      }
    },
  },
  plugins: [],
}