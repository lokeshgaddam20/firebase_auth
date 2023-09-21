/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content:[
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#2D3748", // Primary dark background color
        secondary: "#1A202C", // Secondary dark background color
        accent: "#F6E05E", // Accent color
        text: "#E2E8F0", // Text color
      },
    },
  },
  variants: {},
  plugins: [],
};
