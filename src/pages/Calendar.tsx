import {
  Box,
  Divider,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Headline } from "../components/typography/Headline";
import { SanitizedParagraph } from "../components/typography/SanitizedParagraph";
import { PageImage } from "../components/PageImage";

export const Calendar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const CalendarContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const SectionArticle = styled("div")(() => ({
    display: "flex",
    flexDirection: isSmallScreen ? "column-reverse" : "row",
    gap: isSmallScreen ? "24px" : "45px",
    marginBottom: "90px",
  }));

  return (
    <CalendarContainer>
      <Headline label={"Calendar"} />
      <SectionArticle>
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 22,
              fontWeight: 400,
              mb: 0,
            }}
          >
            Improvised & Experimental
          </Typography>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ fontStyle: "italic" }}>
              <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
                19. March 2025
              </Typography>
              <Typography sx={{ lineHeight: 1.5 }}>7:00 pm</Typography>
            </Box>
            <Box sx={{ textAlign: "end", fontStyle: "italic" }}>
              <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
                Hosek Contemporary
              </Typography>
              <Typography sx={{ lineHeight: 1.5 }}>Berlin</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
              Imaginary Ecosystems live set.
            </Typography>
            <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
              Omer Eilam: Synthesizer, Liz Kosack: Synthesizer
            </Typography>
          </Box>
        </Box>

        {/* <PageImage
          imageUrl={`/images/about-01.jpg`}
          backgroundPosition={isSmallScreen ? undefined : "center center"}
        /> */}
      </SectionArticle>
    </CalendarContainer>
  );
};
