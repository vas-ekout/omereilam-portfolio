import { MotionConfig, motion } from "framer-motion";

interface AnimatedBurgerButtonProps {
  active: boolean;
  onClick: () => void;
}

export const AnimatedBurgerButton = ({
  active,
  onClick,
}: AnimatedBurgerButtonProps) => {
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
          height: "60px",
          width: "60px",
          borderStyle: "none",
          borderRadius: "50%",
          background: "none",
          cursor: "pointer",
        }}
      >
        <motion.span
          variants={VARIANTS.top}
          style={{
            position: "absolute",
            height: "3px",
            width: "32px",
            backgroundColor: "white",
            borderRadius: "9999px",
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={VARIANTS.middle}
          style={{
            position: "absolute",
            height: "3px",
            width: "32px",
            backgroundColor: "white",
            borderRadius: "9999px",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          style={{
            position: "absolute",
            height: "3px",
            width: "32px",
            backgroundColor: "white",
            borderRadius: "9999px",
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
