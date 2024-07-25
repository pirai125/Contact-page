

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        purple:"#4036A9",
        lightgrey:"#CDD5E0",
        lightwhit:"#F8FAFC",
        white:"#FFFFFF"
      },
      fontFamily : {
        be_vietnam_pro : "Be Vietnam Pro",
      },
    },
  },
  plugins: [],
}