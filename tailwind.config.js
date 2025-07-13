/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      screens: {
        'xs': '425px', // custom breakpoint for mobile
      },
    },
  },
  plugins: [],
}
