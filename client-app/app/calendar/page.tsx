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
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createEvent } from "./createEvent";

export default function Calendar() {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([{}]);

  const router = useRouter();

  async function auth() {
    const authUrl = "http://localhost:8080/nylas/auth";

    try {
      const response = await fetch(authUrl);
      router.push(response.url);
      return response;
    } catch (error) {
      console.log("Error auth: ", error);
    }
  }

  const getEvents = async () => {
    const calendarUrl = "http://localhost:8080/nylas/primary-calendar";
    const eventUrl = "http://localhost:8080/nylas/list-events";

    const response2 = await fetch(calendarUrl);
    const calendar = await response2.json();
    console.log("calendar : ", calendar, response2);

    const response3 = await fetch(eventUrl, { cache: "no-store" });
    const events = await response3.json();
    console.log("events : ", events.data);

    const eventArr = events.data.map(({ title, when }: { title: string; when: { startTime: number } }) => ({
      title,
      date: new Date(when.startTime * 1000).toISOString(),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }));
    console.log("eventarr : ", eventArr);

    setData(eventArr);
    return eventArr;
  };

  return (
    <div className="my-4 ml-2 h-full p-4 dark:bg-gray-900">
      <div className="flex h-full flex-row gap-4">
        <div className="size-full">
          <h3>Please sign in to sync your calendar</h3>
          <div className="flex flex-row items-center gap-2">
            <Button className="text-xs dark:bg-blue-500 dark:text-gray-300" onClick={auth}>
              Sign In
            </Button>
            <Button onClick={getEvents} className="bg-blue-600 text-xs">
              <ArrowPathIcon className="mr-2 size-4" />
              Sync
            </Button>
          </div>
          <FullCalendar
            height={"100%"}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={data}
            dateClick={() => {
              setOpen(true);
              alert("Today is that day");
            }}
          />
        </div>
        <div className="w-1/3 p-2 dark:bg-gray-800">
          <h3 className="text-base">Your Events</h3>
          <ul>
            {data.map((item, idx) => (
              <li key={idx} className="my-2 rounded-sm bg-gray-200 p-2 text-sm dark:bg-gray-700">
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
          <form action={createEvent}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" placeholder="some event" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  Start Date
                </Label>
                <Input type="date" id="startDate" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  End Date
                </Label>
                <Input type="date" id="endDate" className="col-span-3" />
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
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
