/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          text: "#1f2937",
          bg: "#f2f2f2",
          bghover: "#ffffff",
        },
        dark: {
          text: "#a6adbb",
          bg: "#191d24",
          bghover: "#2a303c	",
        },
        contacts: {
          whatsapp: "#16a34a",
          gmail: "#ea4335",
          linkedin: "#0077b5",
          github: "#24292e",
          instagram: "#cd486b",
        },
        blue_: "#334155",
        pink_: "#f000b8",
        red_: "#d85251",
        green_: "#1fd65f",
        purple_: "#661ae6",
        yellow_: "#cbfd03",
        sun_: "#FDB813",
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
