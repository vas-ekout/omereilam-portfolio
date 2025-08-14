import dayjs from "dayjs";
import { Box, Link, styled, Typography } from "@mui/material";
import { Headline } from "../components/typography/Headline";
import { useEffect, useState } from "react";
import { CalendarCard } from "../components/CalendarCard";

interface StyledLinkProps {
  content: string;
  isActive: boolean;
}

interface ContentCalendarProps {
  name: string;
  date: string;
  time: string;
  location: string;
  city: string;
  eventText: string;
  credits?: string;
}

const CalendarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "45px",
  [theme.breakpoints.down("md")]: {
    gap: "32px",
  },
}));

const SectionArticle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "45px",
  marginBottom: "90px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "24px",
  },
}));

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<StyledLinkProps>(({ content, isActive }) => ({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  fontWeight: isActive ? 600 : 300,
  transition: "all 300ms",
  textAlign: "center",
  "&::before": {
    display: "block",
    content: `"${content}"`,
    height: 0,
    fontWeight: 600,
    overflow: "hidden",
    visibility: "hidden",
  },
  "&:hover": { fontWeight: 600 },
}));

type ActiveCalendar = "PAST" | "FUTURE";

export interface ExtendedCalendarEventProps extends ContentCalendarProps {
  dateTime: dayjs.Dayjs;
}

interface CalendarProps {
  isHomePage?: boolean;
}

export const Calendar = ({ isHomePage }: CalendarProps) => {
  const [calendarEvents, setCalendarEvents] =
    useState<ExtendedCalendarEventProps[]>();

  const [activeCalendar, setActiveCalendar] =
    useState<ActiveCalendar>("FUTURE");

  useEffect(() => {
    fetch("/contentCalendar.json")
      .then((response) => response.json())
      .then((data: ContentCalendarProps[]) => {
        const parsed = data
          .map((item) => ({
            ...item,
            dateTime: dayjs(`${item.date}T${item.time}`),
          }))
          .sort((a, b) => a.dateTime.valueOf() - b.dateTime.valueOf());
        setCalendarEvents(parsed);
      })
      .catch((error) => {
        console.error("Error fetching contentCalendar: ", error);
      });
  }, []);

  const today = dayjs().startOf("day");

  const pastEvents = calendarEvents
    ?.filter((e) => e.dateTime.isBefore(today))
    .sort((a, b) => b.dateTime.valueOf() - a.dateTime.valueOf());

  const futureEvents = calendarEvents?.filter(
    (e) => !e.dateTime.isBefore(today)
  );

  const noEvents = <Typography>More events coming soon!</Typography>;

  const displayedEvents = activeCalendar === "PAST" ? pastEvents : futureEvents;

  return (
    <CalendarContainer>
      <Headline label={"Calendar"} />
      <SectionArticle>
        <Box sx={{ width: { xs: "100%", md: isHomePage ? "100%" : "50%" } }}>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <StyledLink
              variant="body2"
              content="past events"
              isActive={activeCalendar === "PAST"}
              onClick={() => setActiveCalendar("PAST")}
            >
              past events
            </StyledLink>
            <Typography variant="body2">|</Typography>
            <StyledLink
              variant="body2"
              content="future events"
              isActive={activeCalendar === "FUTURE"}
              onClick={() => setActiveCalendar("FUTURE")}
            >
              future events
            </StyledLink>
          </Box>
          {activeCalendar === "FUTURE" && futureEvents?.length === 0
            ? noEvents
            : displayedEvents?.map((item, index) => (
                <CalendarCard key={index} calendarEvent={item} />
              ))}
        </Box>
        {!isHomePage && (
          <Box
            component="img"
            src="/images/calendar-01.jpg"
            sx={{
              objectFit: "cover",
              width: { xs: "100%", md: "50%" },
              height: { xs: "300px", md: "fit-content" },
            }}
          />
        )}
      </SectionArticle>
    </CalendarContainer>
  );
};
