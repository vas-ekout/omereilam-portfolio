import React from "react";
import { NavBar } from "./navigation/NavBar";
import { HeaderContent } from "./HeaderContent";
import { BurgerNavBar } from "./navigation/BurgerNavBar";

export const Header = () => {
  return (
    <header>
      <NavBar />
      <BurgerNavBar />
      <HeaderContent />
    </header>
  );
};
