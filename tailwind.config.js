/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      maxWidth: {
        mobile: "70px",
        xs: "250px",
        xxs: "200px",
        box: "300px",
      },
      borderWidth: {
        1: "1px",
      },
      padding: {
        full: "250px",
        mobile: "70px",
      },
      height: {
        fs: "70vh",
      },
      maxHeight: {
        fs: "85vh",
        modalfs: "95vh",
        ms: "70vh",
        md: "720px",
      },
      minWidth: {
        sm: "135px",
      },
      zIndex: {
        full: "100",
      },
    },
  },
  plugins: [],
};
