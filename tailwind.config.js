/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
      "screen-1/4": "25vh",
      "screen-1/2": "50vh",
      "screen-3/4": "75vh",
    },
    colors: {
      gritty: "#0c0c0c",
      mango: "#FEB51A",
      ash: "#FCFCFC",
      black: "#000000",
      white: "#FFFFFF",
      marble: "#EFEFEF",
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "views/**/*.vue"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
