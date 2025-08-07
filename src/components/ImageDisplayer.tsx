import { Box, Dialog, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { GridContentSection } from "./Article";
import { imageHoverEffect } from "../utils/imageHoverEffect";
import { ImageModal } from "./gallery/ImageModal";

interface ImageDisplayerProps {
  section: GridContentSection;
}

export const ImageDisplayer = ({ section }: ImageDisplayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Box
        component="img"
        src={`/images/${section.img?.src}`}
        sx={{
          height: "auto",
          mt: 4,
          mb: 4,
          cursor: "pointer",
          width: { xs: "100%", sm: "65%" },
          transition: theme.transitions.create(["filter"], {
            duration: 200,
            easing: theme.transitions.easing.easeOut,
          }),
          "&:hover": { ...imageHoverEffect },
        }}
        onClick={() => setIsOpen(true)}
      />
      <ImageModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imgSrc={`/images/${section.img?.src}`}
        imgCredit={section.img?.credit}
      />
    </>
  );
};
