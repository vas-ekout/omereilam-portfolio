import { Box, Dialog, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { GridContentSection } from "./Article";

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
          "&:hover": {
            filter: "grayscale(100%) brightness(0.6)",
          },
        }}
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth={false}
        slotProps={{
          backdrop: { sx: { background: theme.palette.background.overlay } },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon fontSize="inherit" sx={{ color: "white" }} />
          </IconButton>
          {section.img?.credit && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                bottom: 0,
                background: theme.palette.background.overlay,
              }}
            >
              <Typography
                sx={{
                  m: 2,
                  fontSize: 16,
                  lineHeight: 1.5,
                  textWrap: "balance",
                }}
                textAlign="center"
              >
                {section.img?.credit}
              </Typography>
            </Box>
          )}{" "}
          <img
            src={`/images/${section.img?.src}`}
            alt="Fullscreen"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </>
  );
};
