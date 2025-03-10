import { SanitizedParagraph } from "../components/typography/SanitizedParagraph";
import { Headline } from "../components/typography/Headline";
import contentAbout from "../data/contentAbout";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import { PageImage } from "../components/PageImage";

export const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const AboutContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const SectionArticle = styled("div")(() => ({
    display: "flex",
    flexDirection: isSmallScreen
      ? "column-reverse"
      : contentAbout.imageFirst
        ? "row-reverse"
        : "row",
    gap: isSmallScreen ? "24px" : "45px",
    marginBottom: "90px",
  }));

  return (
    <AboutContainer>
      <Headline label={contentAbout.label} />
      <SectionArticle>
        <SanitizedParagraph article={contentAbout.article} />
        {contentAbout.img && (
          <PageImage
            imageUrl={contentAbout.img}
            backgroundPosition={
              isSmallScreen ? undefined : "center left -200px"
            }
          />
        )}
      </SectionArticle>
    </AboutContainer>
  );
};
