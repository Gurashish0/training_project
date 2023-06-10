module.exports = {
  theme: {
    // Some useful comment
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"Pacifico"', "Pacifico"],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"Pacifico"', "Pacifico"],
    },
    extend: {},
  },
  plugins: [],
};
