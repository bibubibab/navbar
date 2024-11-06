/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00609B', // warna kustom dengan nama 'custom-blue'
      },
    },
  },
  plugins: [],
}

