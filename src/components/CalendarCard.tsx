import {
  alpha,
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ExtendedCalendarEventProps } from "../types/calendarTypes";
import { SanitizedParagraph } from "./typography/SanitizedParagraph";
import { ImageDisplayer } from "./ImageDisplayer";

interface CalendarCardProps {
  calendarEvent: ExtendedCalendarEventProps;
  isHomePage?: boolean;
}

export const CalendarCard = ({
  calendarEvent,
  isHomePage = false,
}: CalendarCardProps) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const eventDetailsSx = { fontSize: 14, mb: 0, lineHeight: 1.5 };

  const showSmallThumbnail = () => {
    if (isHomePage) {
      if (isSmallScreen) return true;
      if (!isSmallScreen) return false;
    }
    if (!isHomePage) {
      if (isMediumScreen) return false;
    }
    return true;
  };

  return (
    <Box
      sx={{
        mb: 4,
        px: 2.5,
        py: 2.25,
        borderRadius: 1,
        bgcolor: alpha(theme.palette.text.primary, 0.04),
        transition: "all 300ms",
        "&:hover": {
          bgcolor: alpha(theme.palette.text.primary, 0.075),
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        {calendarEvent.img && !showSmallThumbnail() && (
          <ImageDisplayer
            section={{
              textHead: "textHead",
              text: "text",
              img: {
                src: `/${calendarEvent.img.src}`,
                credit: calendarEvent.img.credit,
                thumbnailSx: {
                  mt: 0,
                  mb: 0,
                  objectFit: "cover",
                  width: "none",
                  maxWidth: "25%",
                  maxHeight: "100%",
                  height: "fit-content",
                },
              },
            }}
          />
        )}

        <Box>
          <Box sx={{ display: "flex" }}>
            {calendarEvent.img && showSmallThumbnail() && (
              <ImageDisplayer
                section={{
                  textHead: "textHead",
                  text: "text",
                  img: {
                    src: `/${calendarEvent.img.src}`,
                    credit: calendarEvent.img.credit,
                    thumbnailSx: {
                      mt: 0,
                      mr: 2,
                      mb: 0.7,
                      ml: 0,
                      objectFit: "cover",
                      width: "none",
                      maxWidth: "25%",
                      maxHeight: 140,
                      height: "fit-content",
                    },
                  },
                }}
              />
            )}
            <Typography variant="h4">{calendarEvent.name}</Typography>
          </Box>

          <Divider sx={{ mt: 0.75, mb: 1 }} />

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ fontStyle: "italic" }}>
              <Typography sx={eventDetailsSx}>
                {calendarEvent.dateTime.format("DD. MMMM YYYY")}
              </Typography>
              <Typography sx={eventDetailsSx}>
                {calendarEvent.dateTime.format("h:mm A")}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "end",
                fontStyle: "italic",
              }}
            >
              <Typography sx={eventDetailsSx}>
                {calendarEvent.location}
              </Typography>
              <Typography sx={eventDetailsSx}>{calendarEvent.city}</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <SanitizedParagraph
              article={calendarEvent.eventText}
              sx={{ mb: 0, lineHeight: 1.5 }}
            />
            {calendarEvent.credits && (
              <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
                {calendarEvent.credits}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
