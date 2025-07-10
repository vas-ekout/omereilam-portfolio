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
  // If there's no target URL, just render a div
  if (!to) {
    return (
      <Divider
        textAlign="right"
        sx={{
          translate: "0 8px",
          "&::after": { display: "none" },
        }}
      >
        <Box component="div" sx={{ color: "inherit" }}>
          <Typography variant="h6">
            {moreComingSoon ? "more coming soon" : "read more"}
          </Typography>
        </Box>
      </Divider>
    );
  }

  // Determine if the URL is external
  let isExternal = false;
  try {
    const url = new URL(to, window.location.href);
    isExternal = url.origin !== window.location.origin;
  } catch {
    // Malformed or truly relative → treat as internal
    isExternal = false;
  }

  return (
    <Divider
      textAlign="right"
      sx={{
        translate: "0 8px",
        "&::after": { display: "none" },
      }}
    >
      <Box
        component={isExternal ? "a" : RouterLink}
        {...(isExternal
          ? {
              href: to,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {
              to,
            })}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography variant="h6">
          {moreComingSoon ? "more coming soon" : "read more"}
        </Typography>
      </Box>
    </Divider>
  );
};
