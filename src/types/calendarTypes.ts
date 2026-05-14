import dayjs from "dayjs";

export interface ContentCalendarProps {
  name: string;
  date: string;
  time: string;
  location: string;
  city: string;
  eventText: string;
  credits?: string;
}

export interface ExtendedCalendarEventProps extends ContentCalendarProps {
  dateTime: dayjs.Dayjs;
}
