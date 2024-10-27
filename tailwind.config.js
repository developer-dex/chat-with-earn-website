/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "light-gray-100": "#FAF5F5",
        "light-gray-200": "#F6F9FF",
        "light-gray-300": "#E9E9F2",
        "gray-300": "#5B5D5D",
        "primary": "#007AFF"
      },
      boxShadow: {
        buttonShadow: "0px 16px 34px 0px #0000001A,0px 63px 63px 0px #00000017,0px 141px 85px 0px #0000000D,0px 251px 100px 0px #00000003,0px 391px 110px 0px #00000000"
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}