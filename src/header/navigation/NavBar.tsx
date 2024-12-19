import React from "react";
import { NavItem } from "./NavItem";
import "../header.css";

export const NavBar = () => {
  return (
    <nav>
      <NavItem>About</NavItem>
      <NavItem>Music</NavItem>
      <NavItem>Education</NavItem>
      <NavItem>Writings</NavItem>
      <NavItem>Calendar</NavItem>
      <NavItem>Contact</NavItem>
    </nav>
  );
};
