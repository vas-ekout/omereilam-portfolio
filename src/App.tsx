import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { CssBaseline, styled, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect } from "react";
import { useMemo } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const App = () => {
  const PageWrapper = styled("div")(() => ({
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
  }));

  const MainContainer = styled("div")(() => ({
    gridColumn: "2 / 3",
    display: "flex",
    flexDirection: "column",
    gap: "90px",
  }));

  const MainContentWrapper = styled("main")(() => ({
    display: "grid",
    paddingBottom: "270px",
    gridTemplateColumns: isSmallScreen ? "16px 1fr 16px" : "90px 1fr 90px",
  }));

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

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageWrapper>
          <Header />
          <MainContentWrapper>
            <MainContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
              </Routes>
            </MainContainer>
          </MainContentWrapper>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
