/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#757575",
          200: "#323437",
        },
        light: {
          100: "#ffffff",
          200: "#d1d0c5",
        },
        moon: "#F4F1C9",
        sun: "#FDB813",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: ["rounded"],
  },
};
