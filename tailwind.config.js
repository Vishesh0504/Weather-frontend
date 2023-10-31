/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: '#070335',
        bgCard:'#2E249F',
        navbar :'#17115F'
      },
      screens:{
        "wide" : "1440px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: []
}

}