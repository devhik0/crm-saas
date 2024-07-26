"use server";

export async function createEvent(formData: FormData) {
  const authUrl = "http://localhost:8080/nylas/auth";
  const calendarUrl = "http://localhost:8080/nylas/primary-calendar";
  const createEventUrl = "http://localhost:8080/nylas/create-event";

  const name = formData.get("title")!;
  const startTime = formData.get("startTime")!;
  const endTime = formData.get("endTime")!;

  console.log("evt: ", { name, startTime, endTime });

  const response = await fetch(authUrl);

  const response2 = await fetch(calendarUrl);
  const calendar = await response2.json();
  console.log("calendar : ", calendar);

  // const response4 = await fetch(createEventUrl, {
  //   cache: "no-store",
  //   body: {
  //     title,
  //     when: {
  //       startTime,
  //       endTime,
  //     },
  //   },
  // });
  // const createdEvent = await response4.json();
  // console.log("createdEvent : ", createdEvent.data);

  const response5 = await fetch("https://api.magicbell.com/broadcasts", {
    method: "POST",
    headers: {
      "X-MAGICBELL-API-KEY": "98cbd6c1a28e50c1fe35f5406c707499e2ac4791",
      "X-MAGICBELL-API-SECRET": "BcZwQq0u8XSvfU2Y2soGjp5R8lL1MExZYc5lXxjd",
    },
    body: JSON.stringify({
      broadcast: {
        title: "Event created !",
        content: `Here is your event details: ${name} ${startTime} ${endTime}`,
        recipients: [
          {
            email: "aydin96tr@gmail.com",
          },
        ],
      },
    }),
  });

  const notifications = await response5.json();

  console.log("notifications: ", notifications);
}
