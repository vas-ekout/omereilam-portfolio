import { NavItem } from "./NavItem";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="nav"
      sx={{
        height: isSmallScreen ? "100%" : "90px",
        paddingInline: isSmallScreen ? 0 : "90px",
        listStyle: "none",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: isSmallScreen ? "space-between" : "flex-end",
        gap: "2.75rem",
        py: isSmallScreen ? "80px" : "0",
        textAlign: "center",
      }}
    >
      <NavItem to="/about">About</NavItem>
      <NavItem to="/music">Music</NavItem>
      <NavItem to="/education">Education</NavItem>
      <NavItem to="/writings">Writings</NavItem>
      <NavItem to="/calendar">Calendar</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Box>
  );
};
