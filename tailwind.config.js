/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
