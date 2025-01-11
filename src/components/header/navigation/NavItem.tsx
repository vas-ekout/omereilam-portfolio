import { ReactNode } from "react";
import { styled } from "@mui/material/styles";

const StyledNavItem = styled("li")(() => ({
  cursor: "pointer",
  "&:hover": {
    fontWeight: 700,
    transition: "all 300ms",
  },
}));

interface NavItemProps {
  children: ReactNode;
}

export const NavItem = ({ children }: NavItemProps) => {
  return <StyledNavItem>{children}</StyledNavItem>;
};
