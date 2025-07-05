import { Box, useTheme } from "@mui/material";

interface SectionGridImageProps {
  src: string;
  alt: string;
}

export const SectionGridImage = ({ src, alt }: SectionGridImageProps) => {
  const theme = useTheme();

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        maxWidth: "100%",
        width: "100%",
        height: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
        cursor: "pointer",
        transition: theme.transitions.create(["transform"], {
          duration: 800,
          easing: theme.transitions.easing.easeOut,
        }),
        "&:hover": {
          transform: "scale(1.05)",
          zIndex: 1,
        },
      }}
    />
  );
};
