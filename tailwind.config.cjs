/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          text: "#1f2937",
          bg: "#f8f9fa",
          bghover: "#e9ecef",
        },
        dark: {
          text: "#d8d4d4",
          bg: "#212529",
          bghover: "#343a40",
        },
        contacts: {
          whatsapp: "#16a34a",
          gmail: "#ea4335",
          linkedin: "#0077b5",
          github: "#fafbfc",
          instagram: "#cd486b",
        },
        blue_: "#334155",
        primary_: "#ff785a",
        sun_: "#ffbc42",
        moon_: "#8b8c89",
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
