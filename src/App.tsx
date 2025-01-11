import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import { Header } from "./components/header/Header";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect } from "react";
import { useMemo } from "react";

const App = () => {
  const getSystemPreference = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(getSystemPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Define a handler to update state when system preference changes
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    // Add the listener for system preference changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup the listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="page-wrapper">
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
