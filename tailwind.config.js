module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      footerGradient:{
        background: "linear-gradient(180deg,white 25%,#131249 25%)"
      }
    }
  },
  plugins: []
};
