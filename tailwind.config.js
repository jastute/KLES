/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#192f59",
        "secondary": "#dd9933",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      screens: {
        "xs": "480px",
        "2sm": "740px",
        "3sm": "840px",
      },
    },
  },
  plugins: [],
};