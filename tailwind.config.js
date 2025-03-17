/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: '#7639C3',
        pinkCustom: '#AD1ACB',
        lavender: "#F0F0FD",
      },
    },
  },
  plugins: [],
}

