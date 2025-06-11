/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#219150", // Green primary
        secondary: "#6EE7B7", // Light green secondary
        accent: "#34D399", // Accent green
        light: "#F0FFF4", // Very light green background
        dark: "#065F46", // Dark green
      },
    },
  },
  plugins: [],
}
