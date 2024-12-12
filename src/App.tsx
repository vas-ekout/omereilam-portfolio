import { ReactNode } from "react";
import "./App.css";
import React from "react";

interface NavItemProps {
  children: ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
  return <li style={{ cursor: "pointer" }}>{children}</li>;
};

function App() {
  return (
    <>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
          <NavItem>About</NavItem>
          <NavItem>Music</NavItem>
          <NavItem>Education</NavItem>
          <NavItem>Writings</NavItem>
          <NavItem>Calendar</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </nav>
    </>
  );
}

export default App;
