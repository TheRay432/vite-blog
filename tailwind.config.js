/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-blue': '#0dcaf0',
        'button-green': '#198754',
      },
    },
  },
  plugins: [],
};
