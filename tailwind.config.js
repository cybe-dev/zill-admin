module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: "#F0F0F0",
      white: {
        100: "#FFF",
        200: "#EEE",
        300: "#DDD",
        400: "#CCC",
      },
      black: {
        100: "#232323",
        200: "#343A40",
        300: "#414141",
        400: "#565656",
      },
      primary: {
        100: "#e6eff6",
        200: "#b3d0e5",
        300: "#80b0d4",
        400: "#4d90c2",
        500: "#0061a8",
        600: "#004e86",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
