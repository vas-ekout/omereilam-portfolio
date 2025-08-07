import { Box } from "@mui/material";
import { imageHoverEffect } from "../../utils/imageHoverEffect";

interface GalleryItemProps {
  imgSrc: string;
  onClick?: () => void;
}

export const GalleryItem = ({ imgSrc, onClick }: GalleryItemProps) => {
  return (
    <Box
      key={imgSrc}
      sx={{
        WebkitTransition: "all 350ms ease",
        transition: "all 350ms ease",
        cursor: "pointer",
        "&:hover": { ...imageHoverEffect },
      }}
      onClick={onClick}
    >
      <Box component="img" src={imgSrc} sx={{ width: "100%" }} />
    </Box>
  );
};
