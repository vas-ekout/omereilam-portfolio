import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface BurgerBarsProps {
  active: boolean;
}

export const BurgerBars = ({ active }: BurgerBarsProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  console.log(active);

  return (
    <motion.div
      style={{
        position: "relative",
        backgroundColor: "tomato",
        display: isSmallScreen ? "block" : "none",
        padding: "10px",
        width: "32px",
        height: "16px",
        boxSizing: "content-box",
      }}
      animate={active ? "closed" : "open"}
    >
      <motion.div
        style={{
          position: "absolute",
          backgroundColor: "currentColor",
          borderRadius: "8px",
          width: "32px",
          height: "3px",
          top: "19%",
        }}
        variants={{
          open: {
            // rotate: ["0deg", "0deg", "45deg"],
            top: ["19%", "50%"],
          },
          closed: {
            // rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "19%"],
          },
        }}
      />
    </motion.div>
  );
};
