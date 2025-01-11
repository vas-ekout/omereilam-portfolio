import { styled, useTheme } from "@mui/material/styles";
import headerImage from "./assets/header-main-img.jpg";
import { useMediaQuery } from "@mui/material";

export const HeaderContent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledHeaderContent = styled("div")(() => ({
    display: isSmallScreen ? "block" : "grid",
    gridTemplateColumns: "90px 1fr 90px",
    gridTemplateRows: "auto auto",
    paddingInline: isSmallScreen ? "10px" : "0",
    paddingTop: isSmallScreen ? "10px" : "0",
  }));

  const HeaderImage = styled("div")(() => ({
    minHeight: "300px",
    height: "70vh",
    maxHeight: "800px",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: isSmallScreen
      ? isXsScreen
        ? "center right -105px"
        : "center right"
      : "center center",
  }));

  const StyledHeader = styled("h1")(() => ({
    position: "relative",
    top: "-27px",
    gridColumn: "1 / -1",
    fontSize: "3em",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    paddingLeft: "2.25rem",
    lineHeight: "1em",
    zIndex: 1,
  }));

  const StyledSubHeader = styled("h2")(() => ({
    gridColumn: "1 / -1",
    paddingLeft: "2.25rem",
  }));

  return (
    <StyledHeaderContent>
      <aside></aside>
      <HeaderImage />
      <aside></aside>
      <StyledHeader>Omer Eilam</StyledHeader>
      <StyledSubHeader>coming soon</StyledSubHeader>
    </StyledHeaderContent>
  );
};
