import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SectionGridProps {
  children: ReactNode;
}

export const SectionGrid = ({ children }: SectionGridProps) => (
  <Box
    sx={{
      display: "grid",
      gap: 4,
      gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
    }}
  >
    {children}
  </Box>
);
