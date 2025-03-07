import { SanitizedParagraph } from "../components/typography/SanitizedParagraph";
import { Headline } from "../components/typography/Headline";
import contentAbout from "../data/contentAbout";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import { PageImage } from "../components/PageImage";

export const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const StyledHomeContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const StyledSectionArticle = styled("div")(() => ({
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
    <StyledHomeContainer>
      <Headline label={contentAbout.label} />
      <StyledSectionArticle>
        <div style={{ gridArea: "main" }}>
          <SanitizedParagraph article={contentAbout.article} />
        </div>
        {contentAbout.img && (
          <PageImage
            imageUrl={contentAbout.img}
            backgroundPosition={
              isSmallScreen ? undefined : "center left -200px"
            }
          />
        )}
      </StyledSectionArticle>
    </StyledHomeContainer>
  );
};
