import {
  Box,
  Button,
  Link,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Headline } from "../components/typography/Headline";
import { SanitizedParagraph } from "../components/typography/SanitizedParagraph";
import { useEffect, useState } from "react";
import { PageImage } from "../components/PageImage";

interface ContentContactProps {
  text: string[];
  img: string;
}

export const Contact = () => {
  const [contentContact, setContentContact] = useState<ContentContactProps>();

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
    marginBottom: "90px",
  }));

  return (
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
          <Box>
            <Typography variant="h5" sx={{ mb: 0 }}>
              Omer Eilam
            </Typography>
            <Link
              variant="h5"
              href="mailto:omereilam1@gmail.com"
              sx={{
                color: "text.primary",
                textDecorationThickness: 0.75,
                textUnderlineOffset: 2.5,
                textDecorationColor: theme.palette.text.primary,
              }}
            >
              omereilam1@gmail.com
            </Link>
          </Box>
          {/* <Box>
            {contentContact?.text.map((p) => (
              <SanitizedParagraph article={p} />
            ))}
            <TextField fullWidth size="small" label="E-Mail" />
            <Button
              variant="contained"
              fullWidth
              size="large"
              color="primary"
              sx={{
                mt: 1,
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: 0.75,
                height: 44,
              }}
            >
              Subscribe
            </Button>
          </Box> */}
        </Box>
        {contentContact?.img && (
          <PageImage
            imageUrl={`${contentContact.img}`}
            sx={{ height: isSmallScreen ? "230px" : "380px", minHeight: "" }}
          />
        )}
      </SectionArticle>
    </ContactContainer>
  );
};
