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
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Calendar() {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  async function getCalendar() {
    const authUrl = "http://localhost:8080/nylas/auth";
    const calendarUrl = "http://localhost:8080/nylas/primary-calendar";
    const eventUrl = "http://localhost:8080/nylas/list-events";

    try {
      const response = await fetch(authUrl);
      router.push(response.url);

      const response2 = await fetch(calendarUrl);
      const calendar = await response2.json();
      console.log("calendar : ", calendar);

      const response3 = await fetch(eventUrl, { cache: "no-store" });
      const events = await response3.json();
      console.log("events : ", events.data);

      const eventArr = events.data.map(({ title, when }: { title: string; when: { startTime: number } }) => ({
        title,
        date: new Date(when.startTime * 1000).toISOString(),
      }));
      console.log("eventarr : ", eventArr);

      setData(eventArr);
      setLoading(false);
    } catch (error) {
      console.log("Error auth: ", error);
    }
  }
  console.log("DATA: ", data);

  async function createEvent() {
    const authUrl = "http://localhost:8080/nylas/auth";
    const calendarUrl = "http://localhost:8080/nylas/primary-calendar";
    const createEventUrl = "http://localhost:8080/nylas/create-event";

    try {
      const response = await fetch(authUrl);
      console.log("auth : ", response);
      router.push(response.url);
      router.push("/calendar");
    } catch (error) {
      console.log("Error: ", error);
    }

    const response2 = await fetch(calendarUrl);
    const calendar = await response2.json();
    console.log("calendar : ", calendar);

    const response4 = await fetch(createEventUrl, { cache: "no-store" });
    const createdEvent = await response4.json();
    console.log("createdEvent : ", createdEvent.data);

    setLoading(false);
  }

  return (
    <div className="my-4 ml-2 h-full p-4 dark:bg-gray-900">
      <div className="flex h-full flex-row gap-4">
        <div className="size-full">
          <Button className="dark:bg-blue-500 dark:text-gray-300" onClick={getCalendar}>
            Sync
          </Button>
          <FullCalendar
            height={"100%"}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={data}
            eventContent={function renderEventContent(eventInfo) {
              return (
                <>
                  <b>{eventInfo.timeText}</b>
                  <i>{eventInfo.event.title}</i>
                </>
              );
            }}
            dateClick={() => {
              setOpen(true);
              alert("Today is that day");
            }}
          />
        </div>
        <div className="w-1/3 p-2 dark:bg-gray-800">
          <h3 className="text-base">Your Events (this month)</h3>
          <ul>
            {[
              { title: "event 2", date: "2024-05-05" },
              { title: "event 3", date: "2024-05-16" },
              { title: "event 4", date: "2024-05-25" },
            ].map((item) => (
              <li key={item.title} className="my-2 rounded-sm bg-gray-200 p-2 text-sm dark:bg-gray-700">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent className="border-none dark:bg-gray-900 dark:text-gray-300 sm:max-w-[425px]">
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
                createEvent();
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
