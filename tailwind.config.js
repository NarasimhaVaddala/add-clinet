/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#90e49d",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },

      container: {
        padding: "3rem",
      },

      fontFamily: {
        News: ["Newsreader", "serif"],
      },
    },
  },
  plugins: [],
};
