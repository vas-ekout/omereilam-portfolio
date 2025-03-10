import { Article } from "../components/Article";
import { Headline } from "../components/typography/Headline";
import contentMusic, { ContentMusicProps } from "../data/contentMusic";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export const Music = () => {
  const [detailViewIsOpen, setDetailViewIsOpen] = useState(false);
  const [detailObject, setDetailObject] = useState<ContentMusicProps | null>(
    null
  );

  console.log(detailObject);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const MusicContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
  }));

  const SectionGrid = styled("div")(() => ({
    display: "grid",
    gap: 45,
    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
  }));

  const NoImage = styled("div")(() => ({
    width: "100%",
    height: "100%",
    backgroundColor: "tomato",
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

  const handleOpenDetailView = (index: number) => {
    setDetailObject({
      title: contentMusic[index].title,
      article: contentMusic[index].article,
      mainImg: contentMusic[index].mainImg,
      imgs: contentMusic[index].imgs,
    });
  };

  return (
    <MusicContainer>
      <Headline
        label="Music"
        subLabel={detailObject?.title}
        onClick={() => setDetailObject(null)}
      />
      <SectionGrid>
        {detailObject ? (
          <Article
            article={detailObject.article}
            mainImg={detailObject.mainImg}
          />
        ) : (
          contentMusic.map((item, index) =>
            item.mainImg ? (
              <ItemContainer
                key={index}
                onClick={() => handleOpenDetailView(index)}
              >
                <StyledImage
                  src={item.mainImg}
                  alt={`Album cover of ${item.title}`}
                />
                <StyledTitle>{item.title}</StyledTitle>
              </ItemContainer>
            ) : (
              <ItemContainer key={index}>
                <NoImage />
                <StyledTitle>{item.title}</StyledTitle>
              </ItemContainer>
            )
          )
        )}
      </SectionGrid>
    </MusicContainer>
  );
};
