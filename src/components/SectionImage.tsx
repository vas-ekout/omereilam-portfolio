import { useMediaQuery, useTheme } from "@mui/material";

interface SectionImageProps {
  imageUrl: string;
}

export const SectionImage = ({ imageUrl }: SectionImageProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        flexBasis: isSmallScreen ? "auto" : "60%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: isSmallScreen ? "400px" : "380px",
      }}
    />
  );
};
