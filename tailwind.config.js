module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Raleway",
      secondary: "Montserrat",
      tertiary: "Archivo",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        future: "url('./assets/future.png')",
        futureMobile: "url('./assets/futureMobile.png')",
        present: "url('./assets/present.png')",
      },
    },
  },
  plugins: [],
};
