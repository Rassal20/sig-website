/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'bright-gold': '#FFD700',
        'dark-grey': '#333333',
        'light-grey': '#AAAAAA',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      height: {
        'screen': '100vh',
      }
    },
  },
  plugins: [],
}