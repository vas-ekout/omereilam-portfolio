import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { SanitizedParagraph } from "./typography/SanitizedParagraph";
import { PageImage } from "./PageImage";

interface ArticleProps {
  article: string;
  mainImg?: string;
  imgs?: string[];
  soundcloudSrc?: string;
  youtubeSrc?: string;
}
export const Article = ({
  article,
  mainImg,
  imgs,
  soundcloudSrc,
  youtubeSrc,
}: ArticleProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const SectionArticle = styled("div")(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: isSmallScreen ? "column-reverse" : "row",
    gap: isSmallScreen ? "24px" : "45px",
    marginBottom: "90px",
  }));

  return (
    <SectionArticle>
      <Box>
        <SanitizedParagraph article={article} sx={{ mb: 8 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {soundcloudSrc && (
            <iframe
              src={soundcloudSrc}
              width="100%"
              height="180"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
            />
          )}
          {youtubeSrc && (
            <iframe
              width="100%"
              height="380"
              src={youtubeSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </Box>
      </Box>
      {mainImg && (
        <Box
          component="img"
          src={mainImg}
          sx={{
            height: "auto",
            width: isSmallScreen ? "100%" : "25%",
            maxWidth: "50vw",
          }}
        />
      )}
    </SectionArticle>
  );
};
