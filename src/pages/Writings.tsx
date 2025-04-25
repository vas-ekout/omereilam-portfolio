import { styled, useMediaQuery, useTheme } from "@mui/material";
import { Headline } from "../components/typography/Headline";
import { useEffect, useState } from "react";

const WritingsContainer = styled("div")(({ theme }) => ({
  // display: "flex",
  // flexDirection: "column",
  // gap: "45px",
  // justifyContent: "center",
  // alignItems: "center",
  // [theme.breakpoints.down("md")]: { gap: "32px" },
  display: "flex",
  flexDirection: "column",
  gap: "45px",
  [theme.breakpoints.down("md")]: { gap: "32px" },
}));

const SubstackPostWrapper = styled("div")(() => ({
  width: "fit-content",
  borderRadius: "12px",
  overflow: "clip",
  border: "1px solid lime",
}));

const SectionGrid = styled("div")(() => ({
  display: "grid",
  gap: 45,
  gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
}));

export interface ContentWritingsProps {
  substackLink: string;
}

export const Writings = () => {
  const [contentWritings, setContentWritings] =
    useState<ContentWritingsProps[]>();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://substack.com/embedjs/embed.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <WritingsContainer>
      <Headline label="Writings" />
      <SectionGrid>
        {contentWritings?.map((item) => (
          <SubstackPostWrapper>
            <div className="substack-post-embed">
              <p lang="en">The Dove of Peace by Omer Eilam</p>
              <p></p>
              <a
                data-post-link
                href="https://omereilam.substack.com/p/the-dove-of-peace"
              >
                Read on Substack
              </a>
            </div>
            <script
              async
              src="https://substack.com/embedjs/embed.js"
              charSet="utf-8"
            ></script>
          </SubstackPostWrapper>
        ))}
      </SectionGrid>
    </WritingsContainer>
  );
};
