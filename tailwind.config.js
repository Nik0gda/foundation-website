module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      white: "#F4F4F4",
      black: "#222226",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar-hide"),
  ],
};
