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
    primary: {
      main: "#46494D",
    },
    background: {
      default: "hsl(0, 0%, 100%)",
      paper: "hsl(0, 0%, 86%)",
      overlay: "hsl(0, 0%, 100%, 90%)",
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
      marginTop: "45px",
      marginBottom: "12px",
    },
    h4: {
      textTransform: "uppercase",
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.25,
      marginBottom: 0,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
      cursor: "pointer",
    },
    h6: {
      fontStyle: "italic",
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: "2.25rem",
      marginBottom: 16,
    },
    body2: {
      fontFamily: '"Geist Mono", monospace, sans-serif',
      fontSize: "0.8rem",
      lineHeight: 1,
      marginBottom: 45,
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
    primary: {
      main: "#C8CACC",
    },
    background: {
      default: "hsl(0, 0%, 18%)",
      paper: "hsl(0, 0%, 22%)",
      overlay: "hsl(0, 0%, 18%, 96%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
    },
  },
});

export { lightTheme, darkTheme };
