/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Kumbh Sans': ['Kumbh Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

