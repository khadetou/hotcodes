const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "282px",
      xs: "372px",
      xsm: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        header: "rgba(0,0,0,0.45)",
        "light-pink": "#ECB9DD",
        "dark-pink": "#EA007D",
        primary: "#440052",
        dark: "#525251",
      },
      boxShadow: {
        btn: "4px 0 43px 0 rgba(3, 0, 155, 0.93)",
        shadow: "16px 0px 68px rgba(234, 0, 125, 0.27)",
      },
      backgroundImage: {
        "grad-back":
          "linear-gradient(120deg, #FF0000 0%, #2400FF 100%), linear-gradient(120deg, #FA00FF 0%, #208200 100%), linear-gradient(130deg, #00F0FF 0%, #000000 100%), radial-gradient(110% 140% at 15% 90%, #ffffff 0%, #1700A4 100%), radial-gradient(100% 100% at 50% 0%, #AD00FF 0%, #00FFE0 100%), radial-gradient(100% 100% at 50% 0%, #00FFE0 0%, #7300A9 80%), linear-gradient(30deg, #7ca304 0%, #2200AA 100%)",
        "grad-text-1":
          " linear-gradient(90deg, rgba(57,0,77,1) 0%, rgba(3,0,155,1) 100%)",
        "grad-text-2":
          "linear-gradient(160deg, rgba(255,0,128,1) 0%, rgba(121,40,202,1) 100%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
