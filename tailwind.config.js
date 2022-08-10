/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: '500px'}
    },
    extend: {
      spacing: {
        '400': '400px',
        '100': '100px',
        '500': '500px',
        '125': '125px',
        '150': '150px',
        '190': '190px'
      }
    },
  },
  plugins: [],
}
