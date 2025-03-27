import { Box, Divider, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface ReadMoreSublineProps {
  moreComingSoon?: boolean;
  to?: string;
}

export const ReadMoreSubline = ({
  moreComingSoon,
  to,
}: ReadMoreSublineProps) => {
  return (
    <Divider
      textAlign="right"
      sx={{
        translate: "0 8px",
        "&::after": {
          display: "none",
        },
      }}
    >
      <Box
        component={to ? RouterLink : "div"}
        sx={{ textDecoration: "none", color: "inherit" }}
        to={to}
      >
        <Typography variant="h6">
          {moreComingSoon ? "more coming soon" : "read more"}
        </Typography>
      </Box>
    </Divider>
  );
};
