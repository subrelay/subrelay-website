/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
