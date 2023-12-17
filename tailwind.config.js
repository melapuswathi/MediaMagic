module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_99": "#00000099",
          "900_19": "#00000019",
          "900_3f": "#0000003f",
        },
        blue_gray: { 100: "#d8d8d8", "100_7f": "#d8d8d87f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
      backgroundImage: { gradient: "linear-gradient(180deg ,#ffffff,#000000)" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
