/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          dark: "#0f1d34",
          light: "#ffffff",
          white: "#ffffff",
          main: "#0ea5e9",
          mainDark: "#0284c7",
          root: "#6366f1",
          red: "#f43f5e",
          gray: "#334155",
          gray500: "#64748b",
          blackOne: "#1e293b",
          blackTwo: "#0f172a",
          "gray-300": "#d1d5db",
        },
      },
    },
  },
  plugins: [],
};
