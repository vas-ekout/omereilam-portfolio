import { Divider, Typography } from "@mui/material";

export const ReadMoreSubline = () => {
  return (
    <Divider
      textAlign="right"
      sx={{
        translate: "0 8px",
        mt: "45px",
        "&::after": {
          display: "none",
        },
      }}
    >
      <Typography variant="h6" onClick={() => console.log("handle click")}>
        {/* read more */}
        more coming soon
      </Typography>
    </Divider>
  );
};
