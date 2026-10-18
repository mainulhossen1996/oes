/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1456d6", dark: "#0a2a6b", deep: "#061a45", light: "#e4edfd", soft: "#f5f8fd" },
        accent: "#f5b301",
      },
      fontFamily: {
        head: ["var(--font-head)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
