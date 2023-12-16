/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "50rem",
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
        info: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
