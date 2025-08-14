import { Box } from "@mui/material";
import { imageHoverEffect } from "../../utils/imageHoverEffect";

interface GalleryItemProps {
  imgSrc: string;
  alt: string;
  onClick?: () => void;
}

export const GalleryItem = ({ imgSrc, alt, onClick }: GalleryItemProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        WebkitTransition: "all 350ms ease",
        transition: "all 350ms ease",
        cursor: "pointer",
        "&:hover": { ...imageHoverEffect },
      }}
    >
      <Box
        component="img"
        src={`/images/${imgSrc}`}
        alt={alt}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};
