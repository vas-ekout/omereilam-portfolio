import { Box, Link, styled, useMediaQuery, useTheme } from "@mui/material";
import { Headline } from "../components/typography/Headline";
import { SanitizedParagraph } from "../components/typography/SanitizedParagraph";
import { useEffect, useState } from "react";
import { MailerLiteForm } from "../components/MailerLiteForm";
import { useLocation } from "react-router-dom";

interface ContentContactProps {
  one: string;
  two: string;
}

export const Contact = () => {
  const [contentContact, setContentContact] = useState<ContentContactProps>();

  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetch("/contentContact.json")
      .then((response) => response.json())
      .then((data: ContentContactProps) => {
        setContentContact(data);
      })
      .catch((error) => {
        console.error("Error fetching contentMusic: ", error);
      });
  }, []);

  const ContactContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const SectionArticle = styled("div")(() => ({
    display: "flex",
    flexDirection: isSmallScreen ? "column-reverse" : "row",
    gap: isSmallScreen ? "24px" : "45px",
    marginBottom: "24px",
  }));

  return (
    <Box>
      <ContactContainer>
        <Headline label={"Contact"} />
        <SectionArticle>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mb: 4 }}>
              {contentContact?.one && (
                <SanitizedParagraph
                  article={contentContact.one}
                  sx={{ mb: 0 }}
                />
              )}
              <Link
                variant="h5"
                href="mailto:omereilam1@gmail.com"
                sx={{
                  color: "text.primary",
                  textDecorationThickness: 0.5,
                  textUnderlineOffset: 3,
                  textDecorationColor: theme.palette.text.primary,
                }}
              >
                omereilam1@gmail.com
              </Link>
            </Box>
            <Box>
              {contentContact?.two && (
                <SanitizedParagraph article={contentContact.two} />
              )}
            </Box>
          </Box>
        </SectionArticle>
      </ContactContainer>
      <MailerLiteForm key={location.pathname} />
    </Box>
  );
};
