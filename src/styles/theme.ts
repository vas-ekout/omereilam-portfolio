import { createTheme } from "@mui/material/styles";
import { TypeBackground } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    overlay?: string;
  }
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "hsl(0, 0%, 100%)",
      paper: "hsl(0, 0%, 100%)",
      overlay: "hsl(0, 0%, 100%)",
    },
    text: {
      primary: "hsl(0, 0%, 18%)",
      secondary: "hsl(0, 0%, 30%)",
    },
  },
  typography: {
    fontFamily: '"Figtree", monospace, sans-serif',
    fontWeightRegular: 300,
    fontSize: 16,
    h1: {
      fontFamily: '"Geist Mono", monospace, sans-serif',
      position: "relative",
      top: "-27px",
      gridColumn: "1 / -1",
      fontSize: "3.375rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.425rem",
      lineHeight: "3.35rem",
      zIndex: 1,
    },
    h2: {
      fontFamily: '"Geist Mono", monospace, sans-serif',
      fontSize: "1.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.125rem",
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08rem",
      lineHeight: "1.55rem",
      marginBottom: "12px",
    },
    h6: {
      fontStyle: "italic",
      fontSize: "1rem",
      cursor: "pointer",
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: "2.25rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 560,
      md: 860,
      lg: 1200,
      xl: 1536,
    },
  },
});

const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: "dark",
    background: {
      default: "hsl(0, 0%, 18%)",
      paper: "hsl(0, 0%, 18%)",
      overlay: "hsl(0, 0%, 18%, 90%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
    },
  },
});

export { lightTheme, darkTheme };
