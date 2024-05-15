"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";

export default function CalendarC({}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 ml-2 h-full bg-gray-900 p-4">
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
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent className="border-none bg-gray-900 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
            <DialogDescription>Specify your event details to create it.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Date
              </Label>
              <Input type="date" id="username" defaultValue="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                setOpen(!open);
                alert("Event created !");
              }}
              className="bg-gray-800"
              type="submit"
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
