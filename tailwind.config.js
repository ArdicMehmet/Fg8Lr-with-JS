/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope:"Manrope",
      },
      colors:{
        deep_orange:"#EF6B4A",
        deep_purple:"#6251DD",
        white:"#FFFFFF",
        inputBg:'#F4F4FF'
      }
    },
  },
  plugins: [],
}

