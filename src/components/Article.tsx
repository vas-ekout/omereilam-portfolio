import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { SanitizedParagraph } from "./typography/SanitizedParagraph";
import { TextHead } from "./typography/TextHead";
import React from "react";
import { ContentMusicProps } from "../pages/Music";

interface ArticleProps {
  detailObject: ContentMusicProps;
}

export const Article = ({ detailObject }: ArticleProps) => {
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
        {detailObject.sections.map((section, index) => (
          <React.Fragment key={index + section.text}>
            {section.textHead && <TextHead label={section.textHead} />}
            <SanitizedParagraph article={section.text} />
            {section.img && (
              <Box
                component="img"
                src={`/images/${section.img}`}
                sx={{
                  height: "auto",
                  mt: 4,
                  mb: 4,
                  width: isSmallScreen ? "100%" : "100%",
                }}
              />
            )}
          </React.Fragment>
        ))}
        {detailObject.credits &&
          detailObject.credits.map((credit, index) => (
            <SanitizedParagraph
              key={index}
              article={credit}
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: "1.875rem",
                mb: 0,
              }}
            />
          ))}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8, mt: 10 }}>
          {detailObject.soundcloudSrc &&
            detailObject.soundcloudSrc.map((src, index) => (
              <iframe
                key={index}
                src={src}
                width="100%"
                height="180"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
              />
            ))}
          {detailObject.youtubeSrc &&
            detailObject.youtubeSrc.map((src, index) => (
              <iframe
                key={index}
                width="100%"
                height="380"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ))}
        </Box>
      </Box>
      {detailObject.mainImg && (
        <Box
          component="img"
          src={`/images/${detailObject.mainImg}`}
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
