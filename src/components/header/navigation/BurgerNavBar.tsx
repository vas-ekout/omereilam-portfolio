import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { AnimatedBurgerButton } from "./AnimatedBurgerButton";

export const BurgerNavBar = () => {
  const [active, setActive] = useState(false);
  const closeBurgerNavbar = () => setActive((prev) => !prev);

  const overlaySx = {
    opacity: active ? "1" : "0",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "background.overlay",
    backdropFilter: "blur(4px)",
    overflowY: "scroll",
    zIndex: 9,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
  };

  return (
    <>
      <AnimatedBurgerButton active={active} onClick={closeBurgerNavbar} />
      {active && (
        <Box aria-hidden={!active} sx={overlaySx}>
          <NavBar onClickNavItem={closeBurgerNavbar} />
        </Box>
      )}
    </>
  );
};
