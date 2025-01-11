import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const BurgerBar = styled("div")(({ theme }) => ({
  backgroundColor: "currentColor",
  width: "32px",
  height: "3px",
  borderRadius: "8px",
}));

const BurgerMenu = styled("div")(() => ({
  position: "fixed",
  left: 0,
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingTop: "10px",
  zIndex: 10,
}));

export const BurgerNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState("hidden");
  console.log(visibility);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isOpen) {
      setVisibility("visible");
    } else {
      setTimeout(() => setVisibility("hidden"), 300);
    }
  }, [isOpen]);

  const burgerBarsContainerSx = {
    position: "relative",
    display: isSmallScreen ? "flex" : "none",
    padding: "10px",
    width: "fit-content",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
    "&:before": {
      content: '""',
      backgroundColor: "hsl(0, 0%, 24%, 0.3)",
      boxShadow: "0 0 40px 25px hsl(0, 0%, 24%, 0.3)",
      width: "32px",
      height: "19px",
      borderRadius: "5px",
      position: "absolute",
      zIndex: -1,
    },
  };
  const overlaySx = {
    opacity: isOpen ? 1 : 0,
    visibility: visibility,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "background.overlay",
    overflowY: "scroll",
    zIndex: 2,
    transitionProperty: "opacity",
    transitionDuration: "0.3s",
  };

  return (
    <>
      <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        <Box sx={burgerBarsContainerSx}>
          <BurgerBar />
          <BurgerBar />
          <BurgerBar />
        </Box>
      </BurgerMenu>
      <Box sx={overlaySx} aria-hidden={!isOpen}>
        <NavBar />
      </Box>
    </>
  );
};
