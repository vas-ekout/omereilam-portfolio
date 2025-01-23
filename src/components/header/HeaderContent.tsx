import { styled, useTheme } from "@mui/material/styles";
import headerImage from "../../assets/images/header-main-img.jpg";
import { Typography, useMediaQuery } from "@mui/material";

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
    height: "60vh",
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

  const StyledSubHeader = styled("h2")(() => ({
    gridColumn: "1 / -1",
    paddingLeft: "2.25rem",
  }));

  return (
    <StyledHeaderContent>
      <aside></aside>
      <HeaderImage />
      <aside></aside>
      <Typography
        variant="h1"
        sx={{ paddingLeft: isSmallScreen ? "6px" : "2.25rem" }}
      >
        Omer Eilam
      </Typography>
      {/* <StyledSubHeader>coming soon</StyledSubHeader> */}
    </StyledHeaderContent>
  );
};
