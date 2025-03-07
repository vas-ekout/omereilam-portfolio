import { styled } from "@mui/material";
import { HomeSection } from "../sections/Home/HomeSection";
import contentHomeSections from "../data/contentHomeSections";

const StyledHomeContainer = styled("div")(() => ({
  gridColumn: "2 / 3",
  display: "flex",
  flexDirection: "column",
  gap: "90px",
}));

export const Home = () => {
  return (
    <>
      {contentHomeSections.map((section) => (
        <HomeSection section={section.section} />
      ))}
    </>
  );
};
