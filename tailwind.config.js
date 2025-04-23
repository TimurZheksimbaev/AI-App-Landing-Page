/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          maxWidth: "77.5rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          "@media (min-width: 768px)": {
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "3.75rem",
            paddingRight: "3.75rem",
          },
          "@media (min-width: 1280px)": {
            maxWidth: "87.5rem",
          },
        },
        ".h1": {
          fontWeight: "600",
          fontSize: "2.5rem",
          lineHeight: "3.25rem",
          "@media (min-width: 768px)": {
            fontSize: "2.75rem",
            lineHeight: "3.75rem",
          },
          "@media (min-width: 1024px)": {
            fontSize: "3.25rem",
            lineHeight: "4.0625rem",
          },
          "@media (min-width: 1280px)": {
            fontSize: "3.75rem",
            lineHeight: "4.5rem",
          },
        },
        ".h2": {
          fontSize: "1.75rem",
          lineHeight: "2.5rem",
          "@media (min-width: 768px)": {
            fontSize: "2rem",
            lineHeight: "2.5rem",
          },
          "@media (min-width: 1024px)": {
            fontSize: "2.5rem",
            lineHeight: "3.5rem",
          },
          "@media (min-width: 1280px)": {
            fontSize: "3rem",
            lineHeight: "1.25",
          },
        },
        ".h3": {
          fontSize: "2rem",
          lineHeight: "normal",
          "@media (min-width: 768px)": {
            fontSize: "2.5rem",
          },
        },
        ".h4": {
          fontSize: "2rem",
          lineHeight: "normal",
        },
        ".h5": {
          fontSize: "1.5rem",
          lineHeight: "normal",
        },
        ".h6": {
          fontWeight: "600",
          fontSize: "1.125rem",
          lineHeight: "2rem",
        },
        ".body-1": {
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          "@media (min-width: 768px)": {
            fontSize: "1rem",
            lineHeight: "1.75rem",
          },
          "@media (min-width: 1024px)": {
            fontSize: "1.25rem",
            lineHeight: "2rem",
          },
        },
        ".body-2": {
          fontWeight: "300",
          fontSize: "0.875rem",
          lineHeight: "1.5rem",
          "@media (min-width: 768px)": {
            fontSize: "1rem",
          },
        },
        ".caption": {
          fontSize: "0.875rem",
        },
        ".tagline": {
          fontFamily: "var(--font-grotesk)",
          fontWeight: "300",
          fontSize: "0.75rem",
          letterSpacing: ".15em",
          textTransform: "uppercase",
        },
        ".quote": {
          fontFamily: "var(--font-code)",
          fontSize: "1.125rem",
          lineHeight: "normal",
        },
        ".button": {
          fontFamily: "var(--font-code)",
          fontSize: "0.75rem",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
