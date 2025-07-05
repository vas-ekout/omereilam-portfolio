import { Headline } from "../components/typography/Headline";
import { useEffect, useState } from "react";
import { SectionGridWrapper } from "../components/SectionGridWrapper";
import { SectionGrid } from "../components/SectionGrid";
import { SubstackCard } from "../components/SubstackCard";

interface ContentWritingsProps {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const Writings = () => {
  const [contentWritings, setContentWritings] =
    useState<ContentWritingsProps[]>();

  useEffect(() => {
    fetch("/contentWritings.json")
      .then((response) => response.json())
      .then((data: ContentWritingsProps[]) => {
        setContentWritings(data);
      })
      .catch((error) => {
        console.error("Error fetching contentWritings: ", error);
      });
  }, []);

  return (
    <SectionGridWrapper>
      <Headline label="Writings" />
      <SectionGrid>
        {contentWritings?.map((item) => (
          <SubstackCard
            key={item.url}
            description={item.description}
            imageUrl={item.imageUrl}
            title={item.title}
            substackUrl={item.url}
          />
        ))}
      </SectionGrid>
    </SectionGridWrapper>
  );
};
