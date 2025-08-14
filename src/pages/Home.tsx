import { HomeSection, HomeSectionProps } from "../sections/Home/HomeSection";
import { useEffect, useState } from "react";
import { Calendar } from "./Calendar";

export const Home = () => {
  const [contentHome, setContentHome] = useState<HomeSectionProps[]>();

  useEffect(() => {
    fetch("/contentHome.json")
      .then((response) => response.json())
      .then((data: HomeSectionProps[]) => {
        setContentHome(data);
      })
      .catch((error) => {
        console.error("Error fetching contentMusic: ", error);
      });
  }, []);

  return (
    <>
      {contentHome?.map((section, index) => (
        <HomeSection key={index} section={section.section} />
      ))}
      <Calendar isHomePage />
    </>
  );
};
