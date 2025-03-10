import { SxProps, Typography } from "@mui/material";
import DOMPurify from "dompurify";

interface SanitizedParagraphProps {
  article: string;
  sx?: SxProps;
}

export const SanitizedParagraph = ({
  article,
  sx,
}: SanitizedParagraphProps) => {
  return (
    <Typography
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(article),
      }}
      sx={sx}
    />
  );
};
