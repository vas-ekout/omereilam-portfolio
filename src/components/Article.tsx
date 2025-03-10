import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { SanitizedParagraph } from "./typography/SanitizedParagraph";
import { PageImage } from "./PageImage";

interface ArticleProps {
  article: string;
  mainImg?: string;
  imgs?: string[];
}
export const Article = ({ article, mainImg }: ArticleProps) => {
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
      <SanitizedParagraph article={article} sx={{}} />
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
