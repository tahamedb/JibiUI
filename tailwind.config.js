/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class', // or 'class'
  content: [
    "./src/**/*.{html,ts}",
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
