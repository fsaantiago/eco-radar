module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./views/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0E4024",
          primarylight: "#246240",
          secondary: "#D7E4CB",
          background: "#F3F7E9",
          alert: "#ED8D43",
        },
        fontFamily: {
          lato: ['Lato', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  