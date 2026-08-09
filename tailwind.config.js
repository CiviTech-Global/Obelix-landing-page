/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obelix: {
          burgundy: "#722f37",
          "burgundy-dark": "#5a252c",
          gold: "#c9a227",
          "gold-light": "#e3c76a",
          cream: "#f7f3e8",
          ivory: "#faf8f3",
          charcoal: "#1a1714",
          espresso: "#2c1810",
          warm: "#a67c52",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
