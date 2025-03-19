import { ReactNode } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, SxProps, useMediaQuery, useTheme } from "@mui/material";

interface NavItemProps {
  children: ReactNode;
  route: string;
  onClick?: () => void;
}

export const NavItem = ({ children, route, onClick }: NavItemProps) => {
  const location = useLocation();
  const isActive =
    location.pathname === route || location.pathname.startsWith(`${route}/`);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navItemSx: SxProps = {
    position: "relative",
    fontWeight: isActive ? 600 : isSmallScreen ? 400 : 300,
    fontSize: isSmallScreen ? 24 : 18,
    cursor: "pointer",
    textDecoration: isActive ? "underline" : "none",
    textDecorationThickness: "1px",
    textUnderlineOffset: "10px",
    transition: "all 300ms",
    "&::before": {
      display: "block",
      content: `"${children}"`,
      height: 0,
      fontWeight: 600,
      overflow: "hidden",
      visibility: "hidden",
    },
    "&:hover": {
      fontWeight: 600,
    },
  };

  return (
    <Link
      onClick={onClick}
      component={RouterLink}
      to={route}
      underline="none"
      color="inherit"
      sx={navItemSx}
    >
      {children}
    </Link>
  );
};
