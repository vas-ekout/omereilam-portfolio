import { IconButton, styled, Tooltip, Zoom } from "@mui/material";
import { ReactNode } from "react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: 36,
  height: 36,
}));

interface SocialMediaIconButtonProps {
  icon: ReactNode;
  urlString: string;
  tooltip: string;
}

export const SocialMediaIconButton = ({
  icon,
  urlString,
  tooltip,
}: SocialMediaIconButtonProps) => {
  const handleIconClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Tooltip
      title={tooltip}
      placement="right"
      slots={{ transition: Zoom }}
      slotProps={{
        tooltip: {
          sx: { py: 0, borderRadius: 0.5, bgcolor: "background.paper" },
        },
      }}
    >
      <StyledIconButton onClick={() => handleIconClick(urlString)}>
        {icon}
      </StyledIconButton>
    </Tooltip>
  );
};
