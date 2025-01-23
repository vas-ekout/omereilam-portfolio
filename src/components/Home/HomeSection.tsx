import {
  Divider,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export interface HomeSectionProps {
  section: {
    label: string;
    imageFirst?: boolean;
    articles: {
      headline?: string;
      article: string;
      img: string;
    }[];
  };
}

export const HomeSection = ({ section }: HomeSectionProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const StyledHomeSection = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "45px",
  }));

  const StyledSectionArticle = styled("div")(() => ({
    display: "flex",
    flexDirection: isSmallScreen
      ? "column-reverse"
      : section.imageFirst
        ? "row-reverse"
        : "row",
    gap: "45px",
    marginBottom: "90px",
  }));

  return (
    <StyledHomeSection>
      <div style={{ gridColumn: "1 / 3" }}>
        <Typography variant="h2">{section.label}</Typography>
        <Divider sx={{ borderBottomWidth: "2px", py: "8px" }} />
      </div>
      {section.articles.map((article) => (
        <StyledSectionArticle key={article.headline}>
          <div style={{ flexBasis: isSmallScreen ? "auto" : "40%" }}>
            {article.headline && (
              <Typography variant="h3">{article.headline}</Typography>
            )}
            <Typography variant="body1">{article.article}</Typography>
            <Divider
              textAlign="right"
              sx={{
                translate: "0 8px",
                mt: "45px",
                "&::after": {
                  display: "none",
                },
              }}
            >
              <Typography
                variant="h6"
                onClick={() => console.log("handle click")}
              >
                {/* read more */}
                more coming soon
              </Typography>
            </Divider>
          </div>
          <div
            data-cy="articel-image"
            style={{
              flexBasis: isSmallScreen ? "auto" : "60%",
              backgroundImage: `url(${article.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: isSmallScreen ? "400px" : "auto",
            }}
          />
        </StyledSectionArticle>
      ))}
    </StyledHomeSection>
  );
};
