import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export const BurgerNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isOpen) {
      setVisibility("visible");
    } else {
      setTimeout(() => setVisibility("hidden"), 300);
    }
  }, [isOpen]);

  const BurgerMenu = styled("div")(() => ({
    position: "fixed",
    left: 0,
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "10px",
    zIndex: 10,
  }));

  const BurgerBarsContainer = styled(Box)(() => ({
    position: "relative",
    display: isSmallScreen ? "flex" : "none",
    padding: "10px",
    width: "fit-content",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  }));

  const BurgerBar = styled("div")(() => ({
    backgroundColor: "currentColor",
    width: "32px",
    height: "3px",
    borderRadius: "8px",
  }));

  const overlaySx = {
    opacity: isOpen ? "1" : "0",
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
      <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        <BurgerBarsContainer>
          <BurgerBar />
          <BurgerBar />
          <BurgerBar />
        </BurgerBarsContainer>
      </BurgerMenu>
      <Box aria-hidden={!isOpen} sx={overlaySx}>
        <NavBar />
      </Box>
    </>
  );
};
