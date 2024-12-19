import React from "react";
import { NavBar } from "./navigation/NavBar";
import { HeaderContent } from "./HeaderContent";

export const Header = () => {
  return (
    <header>
      <NavBar />
      <HeaderContent />
    </header>
  );
};
