/* theme.js */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      rubik: 'var(--font-rubik)',
      roboto: 'var(--font-roboto)',
      shadowsIntoLight: 'var(--font-shadows-into-light)',
    },

    colors: {
      white: "#fff",
      black: "#000",
      header: "#fef1df",
      richBlack: "#0e0e12",
      darkOrage: "#ff9d2e",
      gray: "#faf7f2",
      red: "#f42f25",
      borderGray: "#ededed",
      footerGray: "#808080",
      
    },

    breakpoints: {
      base: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    
    textStyles: {
      h1: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: '120%',
        letterSpacing: '-1px',
      },
      h2: {
        fontSize: '32px',
        fontWeight: 'semibold',
        lineHeight: '120%',
        letterSpacing: '-1px',
      },
      h3: {
        fontSize: '22px',
        fontWeight: 'semibold',
        lineHeight: '120%',
        letterSpacing: '-1px',
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: 'semibold',
        lineHeight: '120%',
        letterSpacing: '-1px',
      },
    }
});