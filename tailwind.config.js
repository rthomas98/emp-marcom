/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F1946",
          light: "#2a2361",
        },
        secondary: {
          DEFAULT: "#231B53",
          light: "#2e246e",
        },
        accent: {
          pink: "#BD1550",
          yellow: "#FFC259",
        },
        gray: {
          light: "#F8F9FA",
        },
      },
      fontFamily: {
        header: ["ASAP", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
