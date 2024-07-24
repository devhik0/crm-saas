"use server";

import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const authUrl = "http://localhost:8080/nylas/auth";
  const calendarUrl = "http://localhost:8080/nylas/primary-calendar";
  const createEventUrl = "http://localhost:8080/nylas/create-event";

  const name = formData.get("title")!;
  const startTime = formData.get("startTime")!;
  const endTime = formData.get("endTime")!;

  console.log("evt: ", { name, startTime, endTime });

  try {
    const response = await fetch(authUrl);
    console.log("auth : ", response);
    redirect(response.url);
  } catch (error) {
    console.log("Error: ", error);
  }

  const response2 = await fetch(calendarUrl);
  const calendar = await response2.json();
  console.log("calendar : ", calendar);

  const response4 = await fetch(createEventUrl, {
    cache: "no-store",
    body: {
      title,
      when: {
        startTime,
        endTime,
      },
    },
  });
  const createdEvent = await response4.json();
  console.log("createdEvent : ", createdEvent.data);
}
