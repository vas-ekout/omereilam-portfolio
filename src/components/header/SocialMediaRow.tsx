import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SoundcloudIcon from "../../assets/icons/soundcloud-icon.svg?react";
import SubstackIcon from "../../assets/icons/substack-icon.svg?react";
import BandcampIcon from "../../assets/icons/bandcamp-icon.svg?react";

import {
  Box,
  IconButton,
  styled,
  SvgIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SocialMediaIconButton } from "./SocialMediaIconButton";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: 36,
  height: 36,
}));

export const SocialMediaRow = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        zIndex: 10,
        position: "fixed",
        top: isSmallScreen ? 13 : 84,
        px: 2,
        width: isSmallScreen ? "100%" : "fit-content",
        display: "flex",
        flexDirection: isSmallScreen ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <SocialMediaIconButton
        icon={<InstagramIcon sx={{ fontSize: 20 }} />}
        urlString="https://www.instagram.com/omereilam1/"
        tooltip="Instagram"
      />
      <SocialMediaIconButton
        icon={<YouTubeIcon sx={{ fontSize: 22 }} />}
        urlString="https://www.youtube.com/@OmerEilam"
        tooltip="YouTube"
      />
      <SocialMediaIconButton
        icon={
          <SvgIcon sx={{ fontSize: 24 }}>
            <SoundcloudIcon />
          </SvgIcon>
        }
        urlString="https://soundcloud.com/omereilam"
        tooltip="SoundCloud"
      />
      <SocialMediaIconButton
        icon={
          <SvgIcon sx={{ fontSize: 15 }}>
            <SubstackIcon />
          </SvgIcon>
        }
        urlString="https://omereilam.substack.com/"
        tooltip="Substack"
      />
      <SocialMediaIconButton
        icon={
          <SvgIcon sx={{ fontSize: 15 }}>
            <BandcampIcon style={{}} />
          </SvgIcon>
        }
        urlString="https://omereilam.bandcamp.com/"
        tooltip="Bandcamp"
      />
    </Box>
  );
};
