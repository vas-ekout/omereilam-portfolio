import { ThemeProvider } from "@mui/material/styles";

import { Header } from "./components/header/Header";
import { CssBaseline, styled, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect } from "react";
import { useMemo } from "react";
import { Home } from "./components/Home/Home";

const App = () => {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("md"));

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

  const PageWrapper = styled("div")(() => ({
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
  }));

  const MainContent = styled("main")(() => ({
    display: "grid",
    gridTemplateColumns: isSmallScreen ? "16px 1fr 16px" : "90px 1fr 90px",
    paddingBottom: "270px",
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <Header />
        <MainContent>
          <Home />
        </MainContent>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default App;
