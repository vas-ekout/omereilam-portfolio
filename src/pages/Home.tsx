import { HomeSection } from "../sections/Home/HomeSection";
import contentHomeSections from "../data/contentHomeSections";

export const Home = () => {
  return (
    <>
      {contentHomeSections.map((section, index) => (
        <HomeSection key={index} section={section.section} />
      ))}
    </>
  );
};
