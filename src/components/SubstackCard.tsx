import { alpha, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { SectionGridTitle } from "./SectionGridTitle";
import { SanitizedParagraph } from "./typography/SanitizedParagraph";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface SubstackCardProps {
  description: string;
  imageUrl: string;
  title: string;
  substackUrl: string;
}

const NUMBER_OF_LINES = 5;

export const SubstackCard = ({
  description,
  imageUrl,
  title,
  substackUrl,
}: SubstackCardProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        px: 2.5,
        py: 2.25,
        borderRadius: 1,
        bgcolor: alpha(theme.palette.text.primary, 0.04),
      }}
    >
      <div
        style={{
          flexBasis: isSmallScreen ? "auto" : "60%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: isSmallScreen ? "200px" : "280px",
        }}
      />
      <SectionGridTitle sx={{ textAlign: "left", mt: 1.75, mb: 1 }}>
        {title}
      </SectionGridTitle>
      <SanitizedParagraph
        sx={{
          fontSize: 16,
          lineHeight: 1.75,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: NUMBER_OF_LINES,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        article={description}
      />
      <Button
        variant="contained"
        fullWidth
        size="large"
        color="primary"
        sx={{
          mt: 1,
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: 0.75,
          height: 44,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "none",
          },
        }}
        onClick={() =>
          window.open(`${substackUrl}`, "_blank", "noopener,noreferrer")
        }
      >
        <OpenInNewIcon sx={{ mr: 0.75, fontSize: 18 }} />
        Read on Substack
      </Button>
    </Box>
  );
};
