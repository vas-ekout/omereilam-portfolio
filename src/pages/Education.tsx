import { slugify } from "../utils/slugify";
import { Article, GridContentProps } from "../components/Article";
import { Headline } from "../components/typography/Headline";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Education = () => {
  const [detailObject, setDetailObject] = useState<any | null>(null);
  const [contentEducation, setContentEducation] =
    useState<GridContentProps[]>();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetch("/contentEducation.json")
      .then((response) => response.json())
      .then((data: GridContentProps[]) => {
        setContentEducation(data);
        if (id) {
          const foundItem = data.find((item) => slugify(item.title) === id);
          setDetailObject(foundItem || null);
        } else {
          setDetailObject(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching contentMusic: ", error);
      });
  }, [id]);

  const handleOpenDetailView = (item: any) => {
    navigate(`/education/${slugify(item.title)}`);
  };

  const handleCloseDetailView = () => {
    navigate(-1);
  };

  const EducationContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const SectionGrid = styled("div")(() => ({
    display: "grid",
    gap: 45,
    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
  }));

  const StyledImage = styled("img")(() => ({
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    cursor: "pointer",
    transition: theme.transitions.create(["transform"], {
      duration: 800,
      easing: theme.transitions.easing.easeOut,
    }),
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: 1,
    },
  }));

  const StyledTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: theme.palette.background.paper,
    zIndex: 2,
  }));

  const ItemContainer = styled(Box)(({ theme }) => ({
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  }));

  return (
    <EducationContainer>
      <Headline
        label="Education"
        subLabel={detailObject?.title}
        onClick={handleCloseDetailView}
      />
      <SectionGrid>
        {detailObject ? (
          <Article detailObject={detailObject} />
        ) : (
          contentEducation?.map(
            (item, index) =>
              item.mainImg && (
                <ItemContainer
                  key={index}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    handleOpenDetailView(item);
                  }}
                >
                  <StyledImage
                    src={`/images/${item.mainImg}`}
                    alt={`Album cover of ${item.title}`}
                  />
                  <StyledTitle>{item.title}</StyledTitle>
                </ItemContainer>
              )
          )
        )}
      </SectionGrid>
    </EducationContainer>
  );
};
