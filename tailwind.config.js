/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      maxWidth: {
        xs: "250px",
        xxs: "200px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
