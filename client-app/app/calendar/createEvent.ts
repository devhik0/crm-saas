"use server";

export async function createEvent(formData: FormData) {
  const authUrl = `${process.env.NEXT_PUBLIC_API_URL as string}/nylas/auth`;
  const calendarUrl = `${process.env.NEXT_PUBLIC_API_URL as string}/nylas/primary-calendar`;

  const name = formData.get("title")!;
  const startTime = formData.get("startTime")!;
  const endTime = formData.get("endTime")!;

  await fetch(authUrl);

  await fetch(calendarUrl);

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

  await fetch("https://api.magicbell.com/broadcasts", {
    method: "POST",
    headers: {
      "X-MAGICBELL-API-KEY": `${process.env.NEXT_PUBLIC_MAGICBELL_API_KEY as string}`,
      "X-MAGICBELL-API-SECRET": `${process.env.MAGICBELL_API_SECRET as string}`,
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
}
