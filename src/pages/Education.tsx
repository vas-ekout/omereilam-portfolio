import { slugify } from "../utils/slugify";
import { Article, GridContentProps } from "../components/Article";
import { Headline } from "../components/typography/Headline";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SectionGrid } from "../components/SectionGrid";
import { SectionGridWrapper } from "../components/SectionGridWrapper";
import { SectionGridImage } from "../components/SectionGridImage";
import { SectionGridTitle } from "../components/SectionGridTitle";
import { SectionGridItemWrapper } from "../components/SectionGridItemWrapper";

export const Education = () => {
  const [detailObject, setDetailObject] = useState<any | null>(null);
  const [contentEducation, setContentEducation] =
    useState<GridContentProps[]>();

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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

  return (
    <SectionGridWrapper>
      <Headline
        label="Education"
        subLabel={detailObject?.title}
        backButtonOnClick={handleCloseDetailView}
        routerLinkTo={detailObject?.title && "/education"}
      />
      <SectionGrid>
        {detailObject ? (
          <Article detailObject={detailObject} />
        ) : (
          contentEducation?.map(
            (item, index) =>
              item.mainImg && (
                <SectionGridItemWrapper
                  key={index}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    handleOpenDetailView(item);
                  }}
                >
                  <SectionGridImage
                    src={`/images/${item.mainImg}`}
                    alt={`Album cover of ${item.title}`}
                  />
                  <SectionGridTitle>{item.title}</SectionGridTitle>
                </SectionGridItemWrapper>
              )
          )
        )}
      </SectionGrid>
    </SectionGridWrapper>
  );
};
