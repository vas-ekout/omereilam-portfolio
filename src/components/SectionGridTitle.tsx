import { SxProps, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface SectionGridTitleProps {
  children: ReactNode;
  sx?: SxProps;
}

export const SectionGridTitle = ({ children, sx }: SectionGridTitleProps) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: "600",
        zIndex: 2,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
