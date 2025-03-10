import { Box, SxProps, useMediaQuery, useTheme } from "@mui/material";

interface PageImageProps {
  imageUrl: string;
  backgroundPosition?: string;
  sx?: SxProps;
}

export const PageImage = ({
  imageUrl,
  backgroundPosition,
  sx,
}: PageImageProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
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
        ...sx,
      }}
    />
  );
};
