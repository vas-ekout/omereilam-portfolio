import { NavBar } from "./navigation/NavBar";
import { HeaderContent } from "./HeaderContent";
import { BurgerNavBar } from "./navigation/BurgerNavBar";
import { useMediaQuery, useTheme } from "@mui/material";

export const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header style={{ marginBottom: 90 }}>
      {isSmallScreen ? <BurgerNavBar /> : <NavBar />}
      <HeaderContent />
    </header>
  );
};
