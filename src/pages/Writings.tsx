import { styled, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export interface ContentWritingsProps {
  substackLink: string;
}

export const Writings = () => {
  const [contentWritings, setContentWritings] =
    useState<ContentWritingsProps[]>();
  console.log(contentWritings);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const WritingsContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: isSmallScreen ? "32px" : "45px",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    // padding: 128,
  }));

  const SubstackPostWrapper = styled("div")(() => ({
    width: "100%",
    borderRadius: "12px",
    overflow: "clip",
  }));

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

  // useEffect(() => {
  //   fetch("/contentWritings.json")
  //     .then((response) => response.json())
  //     .then((data: ContentWritingsProps[]) => {
  //       setContentWritings(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching contentWritings: ", error);
  //     });
  // }, []);

  return (
    <WritingsContainer>
      <SubstackPostWrapper className="substack-post-embed">
        <p lang="en">The Dove of Peace by Omer Eilam</p>
        <a
          data-post-link
          href="https://omereilam.substack.com/p/on-earthly-and-cosmic-music"
        >
          Read on Substack
        </a>
      </SubstackPostWrapper>
    </WritingsContainer>
  );
};
