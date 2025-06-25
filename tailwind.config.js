module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5',   // indigo-600
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}; 