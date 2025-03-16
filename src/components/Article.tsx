import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { SanitizedParagraph } from "./typography/SanitizedParagraph";
import { ContentMusicProps } from "../data/contentMusic";
import { TextHead } from "./typography/TextHead";
import React from "react";

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
            <SanitizedParagraph
              key={`paragraph-${index}`}
              article={section.text}
              sx={{ mb: 2 }}
            />
            {section.img && (
              <Box
                component="img"
                src={section.img}
                sx={{
                  height: "auto",
                  width: isSmallScreen ? "100%" : "50%",
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
              sx={{ fontWeight: 600, fontSize: "1rem", lineHeight: "1.75rem" }}
            />
          ))}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8, mt: 10 }}>
          {detailObject.soundcloudSrc && (
            <iframe
              src={detailObject.soundcloudSrc}
              width="100%"
              height="180"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
            />
          )}
          {detailObject.youtubeSrc && (
            <iframe
              width="100%"
              height="380"
              src={detailObject.youtubeSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </Box>
      </Box>
      {detailObject.mainImg && (
        <Box
          component="img"
          src={detailObject.mainImg}
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
