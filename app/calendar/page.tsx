"use client";

import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import CalendarC from "./calendar";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  // get events from Google Calendar
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string;
  const calendarID = process.env.NEXT_PUBLIC_CALENDAR_ID as string;

  // console.log("cid, apikey: ", { calendarID, apiKey });

  const getEvents = (calendarID: string, apiKey: string) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            const events = response.result.items;
            // console.log("RESPONSE: ", events);
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, [apiKey, calendarID]);

  // console.log("Event list: ", eventNames);

  return (
    <>
      <h3 className="mt-2 text-2xl font-semibold">Calendar</h3>
      <button onClick={() => getEvents(calendarID, apiKey)} className="my-2 rounded-lg bg-gray-900 p-2">
        Sync Calendars
      </button>
      <CalendarC events={events} />
    </>
  );
}
