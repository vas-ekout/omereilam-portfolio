import { Divider, Typography } from "@mui/material";

interface HeadlineProps {
  label: string;
}

export const Headline = ({ label }: HeadlineProps) => {
  return (
    <div style={{ gridColumn: "1 / 3" }}>
      <Typography variant="h2">{label}</Typography>
      <Divider sx={{ borderBottomWidth: "2px", py: "8px" }} />
    </div>
  );
};
