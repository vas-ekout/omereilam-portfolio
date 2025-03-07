import { useMediaQuery, useTheme } from "@mui/material";

interface PageImageProps {
  imageUrl: string;
  backgroundPosition?: string;
}

export const PageImage = ({ imageUrl, backgroundPosition }: PageImageProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        gridArea: "sidebar",
        flexBasis: isSmallScreen ? "auto" : "100%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition
          ? backgroundPosition
          : "center center",
        height: isSmallScreen ? "330px" : "600px",
        minHeight: "400px",
        minWidth: isSmallScreen ? "100%" : "360px",
      }}
    />
  );
};
