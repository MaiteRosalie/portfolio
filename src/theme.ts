import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      gray1: "#161618",
      gray2: "#4a4a53",
      neutral1: "#f5f6f9",
    },
    space: {
      1: "0.5rem",
      2: "0.8rem",
      3: "2rem",
    },
    fontSizes: {
      1: "0.8rem",
      2: "1rem",
      3: "2rem",
    },
    fonts: {
      default: "'Poppins', sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export const KFadeInRight = keyframes({
  "0%": { transform: "translateX(-5px)", opacity: "0" },
  "100%": { transform: "translateX(0px)", opacity: "1" },
});

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')",
  ],
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  "html, body, #root": { width: "100%", height: "100%", displpay: "flex" },
  body: {
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    fontSize: "14px",
    fontFamily: "$default",
    backgroundImage: "linear-gradient(45deg, $gray1 0%, $gray2 100%)",
    animation: `${KFadeInRight} 200ms forwards`,
    backgroundAttachment: "fixed",
  },
});
