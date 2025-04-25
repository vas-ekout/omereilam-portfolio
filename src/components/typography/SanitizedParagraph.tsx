import { SxProps, Typography } from "@mui/material";
import DOMPurify from "dompurify";

// Auto-inject target and rel on every <a> tag for safe _blank links
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A") {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
  }
});

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
      sx={{
        "& a": {
          transition: "all 300ms",
          color: "inherit",
          fontWeight: 600,
          textDecoration: "none",
          textUnderlineOffset: 4,
          textDecorationThickness: 1,
        },
        "& a:hover": {
          textDecoration: "underline",
          textDecorationThickness: 1,
        },
        ...sx,
      }}
    />
  );
};
