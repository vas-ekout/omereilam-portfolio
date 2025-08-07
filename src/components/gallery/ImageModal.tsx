import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ImageModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  imgCredit?: string;
  imgSrc?: string;
}

export const ImageModal = ({
  isOpen,
  setIsOpen,
  imgCredit,
  imgSrc,
}: ImageModalProps) => {
  const theme = useTheme();

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      maxWidth={false}
      slotProps={{
        backdrop: { sx: { background: theme.palette.background.overlay } },
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
      {imgCredit && (
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
            {imgCredit}
          </Typography>
        </Box>
      )}
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxHeight: "100%",
        }}
      >
        <Box
          component="img"
          src={imgSrc}
          alt="Fullscreen"
          sx={{
            width: "auto",
            height: "auto",
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "96vh",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
