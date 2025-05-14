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
      animation: {
        "loop-vertically": "loop-vertically 60s linear infinite",
        "loop-vertically-reverse": "loop-vertically-reverse 60s linear infinite",
        "loop-horizontally": "loop-horizontally 25s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
      },
      keyframes: {
        "loop-vertically": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "loop-vertically-reverse": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "loop-horizontally": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee2": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
