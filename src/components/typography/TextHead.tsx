import { Typography } from "@mui/material";
import DOMPurify from "dompurify";

interface TextHeadProps {
  label: string;
}

export const TextHead = ({ label }: TextHeadProps) => {
  return (
    <Typography
      variant="h3"
      component="div"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(label),
      }}
    />
  );
};
