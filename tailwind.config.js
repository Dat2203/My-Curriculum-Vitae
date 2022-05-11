module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sora: ["Sora"],
    },
    extend: {
      colors: {
        black: "#161616",
        "gray-icon": "#858585",
        "primary-text": "#6f6f6f",
        "white-somke": "#eeeeee",
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "purple-50e": "#6B49CD",
        "purple-700": "#5D8096",
        "purple-900": "#210035",
        "pink-500": "#AD26FF",
      },
      animation: {
        "toast-up": "float-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "float-in": {
          "0%, ": { transform: "translateY(0) ", opacity: "1" },
          "50%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
