"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

export default function CalendarC({ events }) {
  // console.log("Calendar events: ", events);

  if (!events) return <>No event</>;

  const eventsList = events.map((event) => {
    const start = event.start.date;
    const end = event.end.date;
    return { title: event.summary, start: start, end: end };
  });
  // console.log("list: ", eventsList);

  return (
    <div className="my-4 h-full bg-gray-900 p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={eventsList}
        // events={[
        //   // {  },
        //   { title: "event 2", date: "2024-01-05" },
        //   { title: "event 3", date: "2024-01-16" },
        //   { title: "event 4", date: "2024-01-25" },
        // ]}
        // dateClick={() => {
        //   alert("Today is that day");
        // }}
      />
    </div>
  );
}
