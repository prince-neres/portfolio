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
          bghover: "#e0e0e0",
        },
        dark: {
          text: "#d8d4d4",
          bg: "#09090b",
          bghover: "#1a1919",
        },
        contacts: {
          whatsapp: "#16a34a",
          gmail: "#ea4335",
          linkedin: "#0077b5",
          github: "#24292e",
          instagram: "#cd486b",
        },
        blue_: "#334155",
        purple_: "#661ae6",
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
