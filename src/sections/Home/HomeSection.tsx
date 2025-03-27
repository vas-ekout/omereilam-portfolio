import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { Headline } from "../../components/typography/Headline";

import { TextHead } from "../../components/typography/TextHead";
import { ReadMoreSubline } from "../../components/typography/ReadMoreSubline";
import { SanitizedParagraph } from "../../components/typography/SanitizedParagraph";
import { SectionImage } from "../../components/SectionImage";
import { slugify } from "utils/Slugify";

export interface HomeSectionProps {
  section: {
    label: string;
    imageFirst?: boolean;
    articles: {
      headline: string;
      article: string[];
      img?: string;
      readMoreUrl?: string;
    }[];
  };
}

export const HomeSection = ({ section }: HomeSectionProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const StyledHomeSection = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const StyledSectionArticle = styled("div")(() => ({
    display: "flex",
    flexDirection: isSmallScreen
      ? "column-reverse"
      : section.imageFirst
        ? "row-reverse"
        : "row",
    gap: isSmallScreen ? "24px" : "45px",
    marginBottom: "90px",
  }));

  const TextBox = styled("div")(() => ({
    flexBasis: isSmallScreen ? "auto" : "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "45px",
  }));

  return (
    <StyledHomeSection>
      <Headline label={section.label} />
      {section.articles.map((article, index) => (
        <StyledSectionArticle key={index}>
          <TextBox>
            <Box>
              {article.headline && <TextHead label={article.headline} />}
              {article.article.map((paragraph) => (
                <SanitizedParagraph article={paragraph} />
              ))}
            </Box>
            <ReadMoreSubline
              to={article.readMoreUrl ? article.readMoreUrl : undefined}
              moreComingSoon={article.readMoreUrl ? false : true}
            />
          </TextBox>
          {article.img && <SectionImage imageUrl={`/images/${article.img}`} />}
        </StyledSectionArticle>
      ))}
    </StyledHomeSection>
  );
};
