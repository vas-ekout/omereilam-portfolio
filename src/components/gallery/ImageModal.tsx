import {
  alpha,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

interface ImageModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  imgCredit?: string;
  imgSrc?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

const backgroundColorIcon = "rgba(0, 0, 0, 0.15)";
const backgroundColorIconHover = "rgba(0, 0, 0, 0.25)";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  backgroundColor: backgroundColorIcon,
  "&:hover": {
    backgroundColor: backgroundColorIconHover,
  },
}));

export const ImageModal = ({
  isOpen,
  setIsOpen,
  imgCredit,
  imgSrc,
  onPrevious,
  onNext,
  currentIndex = 0,
  totalImages = 0,
}: ImageModalProps) => {
  const theme = useTheme();
  const showNavigation = totalImages > 1;

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={() => setIsOpen(false)}
      maxWidth={false}
      PaperProps={{
        sx: {
          backgroundColor: alpha(
            theme.palette.background.overlay as string,
            0.9
          ),
        },
      }}
    >
      <StyledIconButton
        size="small"
        sx={{ top: 8, right: 8 }}
        onClick={() => setIsOpen(false)}
      >
        <CloseIcon fontSize="inherit" sx={{ color: "white" }} />
      </StyledIconButton>

      {/* Navigation arrows */}
      {showNavigation && (
        <>
          <StyledIconButton
            size="small"
            sx={{
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onPrevious}
          >
            <ArrowBack fontSize="inherit" sx={{ color: "white" }} />
          </StyledIconButton>
          <StyledIconButton
            size="small"
            sx={{
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onNext}
          >
            <ArrowForward fontSize="inherit" sx={{ color: "white" }} />
          </StyledIconButton>
        </>
      )}

      {/* Image counter */}
      {/* {showNavigation && (
        <Box
          sx={{
            position: "absolute",
            bottom: 72,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            backgroundColor: backgroundColorIconHover,
            borderRadius: 1,
            px: 2,
          }}
        >
          <Typography
            sx={{ fontSize: 12, fontWeight: 700, mb: 0, color: "white" }}
          >
            {currentIndex + 1} / {totalImages}
          </Typography>
        </Box>
      )} */}

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
            maxHeight: "100%",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
