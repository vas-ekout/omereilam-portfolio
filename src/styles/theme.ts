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
    fontFamily: '"Geist Mono", monospace, sans-serif',
    fontWeightRegular: 400,
    fontSize: 16,
    h1: {
      fontSize: "3em",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.125em",
      paddingLeft: "2.25rem",
      lineHeight: "1em",
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
