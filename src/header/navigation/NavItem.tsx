import React from "react";
import { ReactNode } from "react";
import "../header.css";
interface NavItemProps {
  children: ReactNode;
}

export const NavItem = ({ children }: NavItemProps) => {
  return <li className="nav-item">{children}</li>;
};
