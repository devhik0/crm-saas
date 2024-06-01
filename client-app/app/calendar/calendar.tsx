"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import AddEventForm from "./add-event-form";

export default function CalendarC({}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 ml-2 h-full bg-blue-900 p-4">
      <div className="flex h-full flex-row gap-4">
        <div className="size-full">
          <FullCalendar
            height={"100%"}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              { title: "event 2", date: "2024-05-05", color: "orange" },
              { title: "event 3", date: "2024-05-16", color: "coral" },
              { title: "event 4", date: "2024-05-25", color: "teal" },
            ]}
            // eventContent={function renderEventContent(eventInfo) {
            //   return (
            //     <>
            //       <b>{eventInfo.timeText}</b>
            //       <i>{eventInfo.event.title}</i>
            //     </>
            //   );
            // }}
            dateClick={() => {
              setOpen(true);
              alert("Today is that day");
            }}
          />
        </div>
        <div className="w-1/3 bg-gray-800 p-2">
          <h3 className="text-base">Your Events (this month)</h3>
          <ul>
            {[
              { title: "event 2", date: "2024-05-05" },
              { title: "event 3", date: "2024-05-16" },
              { title: "event 4", date: "2024-05-25" },
            ].map((item) => (
              <li key={item.title} className="my-2 rounded-sm bg-gray-700 p-2 text-sm">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AddEventForm open={open} setOpen={setOpen} />
    </div>
  );
}
