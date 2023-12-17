/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "50rem",
        120: "45rem",
      },
      height: {
        128: "50rem",
        120: "45rem",
        98: "28rem",
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
        info: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
