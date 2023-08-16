/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      575: "575px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        fff: "#fff",
      },
    },
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
