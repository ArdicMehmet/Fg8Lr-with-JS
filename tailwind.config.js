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
        gray: {
          50: "#f4f4ff",
          900: "#090937",
          "900_05": "#09093705",
          "900_66": "#09093766",
          "900_99": "#09093799",
          "900_19": "#09093719",
        },
        deep_orange:"#EF6B4A",
        deep_purple:"#6251DD",
        white:"#FFFFFF",
        inputBg:'#F4F4FF',
        cardBg:"#F4F4FF",
        navyBlue:"#090937",
      }
    },
  },
  plugins: [],
}

