/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          background: "#ededed",
          yellow: "#FFCC4B",
          amazonBtnYellow: "#f0c14b",
          amazonLink: "#007185",
          cart: "radial-gradient(circle, rgba(255,204,75,1) 0%, rgba(255,204,75,1) 47%, rgba(255,156,42,1) 100%);"
        }
      }
    },
  },
  plugins: [],
}

