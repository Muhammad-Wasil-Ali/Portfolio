/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables dark mode using a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f", // main black background
        secondary: "#1a1a1a", // dark gray sections
        accent: "#2a2a2a", // slightly lighter gray
        text: "#e5e5e5", // soft gray text
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
