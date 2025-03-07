import { Typography } from "@mui/material";
import DOMPurify from "dompurify";

interface SanitizedParagraphProps {
  article: string;
}

export const SanitizedParagraph = ({ article }: SanitizedParagraphProps) => {
  return (
    <Typography
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(article),
      }}
    />
  );
};
