import {
  Box,
  Divider,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTypewriter } from "../../hooks/useTypewriter";
import WestIcon from "@mui/icons-material/West";
interface HeadlineProps {
  label?: string;
  subLabel?: string;
  onClick?: () => void;
}

export const Headline = ({ label, subLabel, onClick }: HeadlineProps) => {
  const typedSublabel = useTypewriter(subLabel);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const BackButton = styled(Box)(() => ({
    position: "relative",
    display: "inline-flex",
    marginRight: 16,
    cursor: "pointer",
    "&::before": {
      position: "absolute",
      content: "' '",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.00)",
      transform: "scale(1.375)",
      borderRadius: "50%",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    "&:hover": {
      "&::before": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      },
    },
  }));

  return (
    <div style={{ gridColumn: "1 / 3" }}>
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: isSmallScreen ? "column" : "row",
          width: "100%",
        }}
      >
        {label}
        {subLabel && (
          <Box
            component={"span"}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              ml: isSmallScreen ? 0 : 2,
              width: "100%",
            }}
          >
            {!isSmallScreen && "| "}
            <Box sx={{ fontWeight: 300, ml: isSmallScreen ? 0 : 2 }}>
              {subLabel.slice(0, typedSublabel)}
            </Box>
            <BackButton onClick={onClick} sx={{ mb: 0.5, ml: "auto" }}>
              <WestIcon />
            </BackButton>
          </Box>
        )}
      </Typography>
      <Divider sx={{ borderBottomWidth: "2px", py: "8px" }} />
    </div>
  );
};
