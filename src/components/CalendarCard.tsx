import {
  alpha,
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ExtendedCalendarEventProps } from "../pages/Calendar";

interface CalendarCardProps {
  calendarEvent: ExtendedCalendarEventProps;
}

export const CalendarCard = ({ calendarEvent }: CalendarCardProps) => {
  const theme = useTheme();

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
      <Typography variant="h4">{calendarEvent.name}</Typography>
      <Divider sx={{ mt: 0.75, mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ fontStyle: "italic" }}>
          <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
            {calendarEvent.dateTime.format("DD. MMMM YYYY")}
          </Typography>
          <Typography sx={{ lineHeight: 1.5 }}>
            {calendarEvent.dateTime.format("h:mm A")}
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "end",
            fontStyle: "italic",
          }}
        >
          <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
            {calendarEvent.location}
          </Typography>
          <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
            {calendarEvent.city}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
          {calendarEvent.eventText}
        </Typography>
        {calendarEvent.credits && (
          <Typography sx={{ mb: 0, lineHeight: 1.5 }}>
            {calendarEvent.credits}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
