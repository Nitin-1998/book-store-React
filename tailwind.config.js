/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-bg": "url('./src/assets/hero-bg.png')",
      //   "app-bg": "url('./src/assets/banner-bg.png')",
      // },
      colors: {
        primaryColor: "#1385c7",
        secondaryColor: "#29a5de",
        dark: "#1385d7",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
