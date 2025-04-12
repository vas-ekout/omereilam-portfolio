import { Typography } from "@mui/material";
import DOMPurify from "dompurify";
import { Link as RouterLink } from "react-router-dom";

interface TextHeadProps {
  label: string;
  projectUrl?: string;
}

export const TextHead = ({ label, projectUrl }: TextHeadProps) => {
  return (
    <Typography
      variant="h3"
      component={projectUrl ? RouterLink : "div"}
      to={projectUrl ? projectUrl : undefined}
      sx={{ textDecoration: "none", color: "inherit" }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(label),
      }}
    />
  );
};
