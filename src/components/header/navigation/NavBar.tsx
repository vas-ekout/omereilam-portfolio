import { motion } from "framer-motion";
import { NavItem } from "./NavItem";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface NavBarProps {
  onClickNavItem?: () => void;
}

export const NavBar = ({ onClickNavItem }: NavBarProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navItemVariants = {
    hidden: { x: -8, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    }),
  };

  const navItems = [
    ...(isSmallScreen ? [{ route: "/", label: "Home" }] : []),
    { route: "/about", label: "About" },
    { route: "/music", label: "Music" },
    { route: "/education", label: "Education" },
    // { route: "/writings", label: "Writings" },
    { route: "/calendar", label: "Calendar" },
    { route: "/contact", label: "Contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        height: isSmallScreen ? "100%" : "90px",
        paddingInline: isSmallScreen ? "18px" : "90px",
        listStyle: "none",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: isSmallScreen ? "flex-start" : "center",
        justifyContent: isSmallScreen ? "space-start" : "flex-end",
        gap: "2.75rem",
        py: isSmallScreen ? "80px" : "0",
        textAlign: "center",
      }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={item.route}
          custom={index}
          initial={isSmallScreen ? "hidden" : "visible"}
          animate="visible"
          variants={isSmallScreen ? navItemVariants : {}}
        >
          <NavItem
            onClick={() => {
              if (onClickNavItem) onClickNavItem();
            }}
            route={item.route}
          >
            {item.label}
          </NavItem>
        </motion.div>
      ))}
    </Box>
  );
};
