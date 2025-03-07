import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "@mui/material";

interface NavItemProps {
  children: ReactNode;
  to: string;
}

export const NavItem = ({ children, to }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      component={RouterLink}
      to={to}
      underline="none"
      color="inherit"
      sx={{
        position: "relative",
        fontWeight: isActive ? 600 : 300,
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
      }}
    >
      {children}
    </Link>
  );
};
