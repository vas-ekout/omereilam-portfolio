import { SanitizedParagraph } from "../components/typography/SanitizedParagraph";
import { Headline } from "../components/typography/Headline";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { PageImage } from "../components/PageImage";
import { useEffect, useState } from "react";

interface ContentAboutProps {
  article: string[];
  img?: string;
  imageFirst?: boolean;
}

export const About = () => {
  const [contentAbout, setContentAbout] = useState<ContentAboutProps>();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetch("/contentAbout.json")
      .then((response) => response.json())
      .then((data: ContentAboutProps) => {
        setContentAbout(data);
      })
      .catch((error) => {
        console.error("Error fetching contentMusic: ", error);
      });
  }, []);

  const AboutContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const SectionArticle = styled("div")(() => ({
    display: "flex",
    flexDirection: isSmallScreen
      ? "column-reverse"
      : contentAbout?.imageFirst
        ? "row-reverse"
        : "row",
    gap: isSmallScreen ? "24px" : "45px",
    marginBottom: "90px",
  }));

  return (
    <AboutContainer>
      <Headline label="About" />
      <SectionArticle>
        <Box>
          {contentAbout?.article.map((p, index) => (
            <SanitizedParagraph article={p} key={index} />
          ))}
        </Box>
        {contentAbout?.img && (
          <PageImage
            imageUrl={`/images/${contentAbout.img}`}
            backgroundPosition={isSmallScreen ? undefined : "center center"}
          />
        )}
      </SectionArticle>
    </AboutContainer>
  );
};
