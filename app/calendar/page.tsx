"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

export default function Calendar() {
  return (
    <>
      <h3 className="mt-2 text-2xl font-semibold">Calendar</h3>
      <div className="my-4 h-full bg-gray-900 p-4">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: "event 1", date: "2024-01-01", backgroundColor: "orange" },
            { title: "event 2", date: "2024-01-05" },
            { title: "event 3", date: "2024-01-16" },
            { title: "event 4", date: "2024-01-25" },
          ]}
          // dateClick={() => {
          //   alert("Today is that day");
          // }}
        />
      </div>
    </>
  );
}
