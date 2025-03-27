import { styled, useTheme } from "@mui/material/styles";
import headerImage from "../../assets/images/header-main-img.jpg";
import { Typography, useMediaQuery } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

const StyledHeaderContent = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "90px 1fr 90px",
  gridTemplateRows: "auto auto",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const HeaderImage = styled(RouterLink, {
  shouldForwardProp: (prop) => !["isHome"].includes(prop.toString()),
})<{
  isHome: boolean;
}>(({ theme, isHome }) => ({
  minHeight: isHome ? "300px" : "140px",
  height: isHome ? "60vh" : "140px",
  maxHeight: "800px",
  backgroundImage: `url(${headerImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center right",
  transition: theme.transitions.create(["height", "min-height"], {
    duration: 500,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  }),
}));

export const HeaderContent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <StyledHeaderContent>
      <aside />
      <HeaderImage isHome={isHome} to="/" />
      <aside />
      <Typography
        component={RouterLink}
        to="/"
        variant="h1"
        sx={{
          display: "block",
          paddingLeft: isSmallScreen ? "12px" : "2.25rem",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Omer Eilam
      </Typography>
    </StyledHeaderContent>
  );
};
