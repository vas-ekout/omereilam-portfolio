import { Typography } from "@mui/material";
import DOMPurify from "dompurify";
import { Link as RouterLink } from "react-router-dom";

interface TextHeadProps {
  label: string;
  projectUrl?: string;
}

export const TextHead = ({ label, projectUrl }: TextHeadProps) => {
  // No URL? Just render a div
  if (!projectUrl) {
    return (
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "inherit" }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(label),
        }}
      />
    );
  }

  // Try to parse the URL; fallback to internal if parsing fails
  let isExternal = false;
  try {
    const url = new URL(projectUrl, window.location.href);
    isExternal = url.origin !== window.location.origin;
  } catch {
    // If projectUrl is a relative path (e.g. "/foo") URL constructor will still work,
    // but if it really is malformed, we treat it as internal.
    isExternal = false;
  }

  return (
    <Typography
      variant="h3"
      component={isExternal ? "a" : RouterLink}
      // for <a> you need href, for RouterLink you need to prop "to"
      {...(isExternal
        ? {
            href: projectUrl,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {
            to: projectUrl,
          })}
      sx={{ textDecoration: "none", color: "inherit" }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(label),
      }}
    />
  );
};
