/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        scp: ["Source Code Pro", "monospace"],
        mont: ["Montserrat", "sans-serif"],
        quick: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
