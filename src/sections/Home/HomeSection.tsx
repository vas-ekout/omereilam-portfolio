import { styled, useMediaQuery, useTheme } from "@mui/material";
import { Headline } from "../../components/typography/Headline";

import { TextHead } from "../../components/typography/TextHead";
import { ReadMoreSubline } from "../../components/typography/ReadMoreSubline";
import { SanitizedParagraph } from "../../components/typography/SanitizedParagraph";
import { SectionImage } from "../../components/SectionImage";

export interface HomeSectionProps {
  section: {
    label: string;
    imageFirst?: boolean;
    articles: {
      headline?: string;
      article: string;
      img?: string;
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

  return (
    <StyledHomeSection>
      <Headline label={section.label} />
      {section.articles.map((article, index) => (
        <StyledSectionArticle key={index}>
          <div style={{ flexBasis: isSmallScreen ? "auto" : "40%" }}>
            {article.headline && <TextHead label={article.headline} />}
            <SanitizedParagraph article={article.article} />
            <ReadMoreSubline />
          </div>
          {article.img && <SectionImage imageUrl={article.img} />}
        </StyledSectionArticle>
      ))}
    </StyledHomeSection>
  );
};
