import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SectionGridItemWrapperProps {
  children: ReactNode;
  onClick?: () => void;
}

export const SectionGridItemWrapper = ({
  children,
  onClick,
}: SectionGridItemWrapperProps) => (
  <Box
    sx={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
    onClick={onClick}
  >
    {children}
  </Box>
);
