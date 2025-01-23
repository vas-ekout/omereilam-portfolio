import { ReactNode } from "react";
import { styled } from "@mui/material/styles";

const StyledNavItem = styled("li")(() => ({
  cursor: "pointer",
  "&:hover": {
    transition: "all 300ms",
    textDecoration: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "10px",
  },
}));

interface NavItemProps {
  children: ReactNode;
}

export const NavItem = ({ children }: NavItemProps) => {
  return <StyledNavItem>{children}</StyledNavItem>;
};
