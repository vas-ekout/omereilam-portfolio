import { HomeSection, HomeSectionProps } from "../sections/Home/HomeSection";
import contentHomeSections from "../data/contentHomeSections";
import { useEffect, useState } from "react";

export const Home = () => {
  const [contentAbout, setContentAbout] = useState<HomeSectionProps[]>();

  useEffect(() => {
    fetch("/contentHome.json")
      .then((response) => response.json())
      .then((data: HomeSectionProps[]) => {
        setContentAbout(data);
      })
      .catch((error) => {
        console.error("Error fetching contentMusic: ", error);
      });
  }, []);

  return (
    <>
      {contentAbout?.map((section, index) => (
        <HomeSection key={index} section={section.section} />
      ))}
    </>
  );
};
