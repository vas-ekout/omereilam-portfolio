import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface SectionGridWrapperProps {
  children: ReactNode;
}

export const SectionGridWrapper = ({ children }: SectionGridWrapperProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: isSmallScreen ? "32px" : "45px",
      }}
    >
      {children}
    </Box>
  );
};
