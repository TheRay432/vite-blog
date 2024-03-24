/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-blue': '#0dcaf0',
        'button-green': '#198754',
      },
      boxShadow: {
        card: '0 0.5rem 1rem rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
