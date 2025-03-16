import { useTheme } from "@mui/material";
import { MotionConfig, MotionStyle, motion } from "framer-motion";

interface AnimatedBurgerButtonProps {
  active: boolean;
  onClick: () => void;
}

export const AnimatedBurgerButton = ({
  active,
  onClick,
}: AnimatedBurgerButtonProps) => {
  const theme = useTheme();

  const burgerBarStyling: MotionStyle = {
    position: "absolute",
    height: "3px",
    width: "32px",
    backgroundColor: theme.palette.text.primary,
    borderRadius: "9999px",
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.325,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onClick}
        style={{
          zIndex: 10,
          position: "fixed",
          height: "64px",
          width: "64px",
          borderStyle: "none",
          borderRadius: "50%",
          background: "none",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <motion.span
          variants={VARIANTS.top}
          style={{
            ...burgerBarStyling,
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={VARIANTS.middle}
          style={{
            ...burgerBarStyling,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          style={{
            ...burgerBarStyling,
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "50%",
    },
  },
};
