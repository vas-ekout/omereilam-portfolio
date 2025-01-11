import { NavItem } from "./NavItem";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="nav"
      sx={{
        height: { md: "90px", sm: "fit-content" },
        paddingInline: { md: "90px", sm: 0 },
        listStyle: "none",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "2.75rem",
      }}
    >
      <NavItem>About</NavItem>
      <NavItem>Music</NavItem>
      <NavItem>Education</NavItem>
      <NavItem>Writings</NavItem>
      <NavItem>Calendar</NavItem>
      <NavItem>Contact</NavItem>
    </Box>
  );
};
