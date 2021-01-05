const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        roboto: '"Roboto", Helvetica, Arial, sans-serif',
      },
      colors: {
        blue: colors.lightBlue,
        gray: colors.blueGray,
        green: colors.emerald,
        red: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
