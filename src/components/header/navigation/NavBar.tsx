import { NavItem } from "./NavItem";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface NavBarProps {
  onClickNavItem: () => void;
}

export const NavBar = ({ onClickNavItem }: NavBarProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="nav"
      sx={{
        height: isSmallScreen ? "100%" : "90px",
        paddingInline: isSmallScreen ? "20px" : "90px",
        listStyle: "none",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "flex-start" : "center",
        justifyContent: isSmallScreen ? "space-start" : "flex-end",
        gap: "2.75rem",
        py: isSmallScreen ? "80px" : "0",
        textAlign: "center",
      }}
    >
      <NavItem onClick={onClickNavItem} route="/about">
        About
      </NavItem>
      <NavItem onClick={onClickNavItem} route="/music">
        Music
      </NavItem>
      <NavItem onClick={onClickNavItem} route="/education">
        Education
      </NavItem>
      <NavItem onClick={onClickNavItem} route="/writings">
        Writings
      </NavItem>
      <NavItem onClick={onClickNavItem} route="/calendar">
        Calendar
      </NavItem>
      <NavItem onClick={onClickNavItem} route="/contact">
        Contact
      </NavItem>
    </Box>
  );
};
