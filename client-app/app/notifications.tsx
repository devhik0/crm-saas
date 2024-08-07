"use client";

import { useUser } from "@clerk/nextjs";
import { BellIcon } from "@heroicons/react/24/outline";
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";
import { isSupported, WebPushClient } from "@magicbell/webpush";
import { useEffect } from "react";

export default function Notifications() {
  const { user } = useUser();

  const client = new WebPushClient({
    apiKey: process.env.NEXT_PUBLIC_MAGICBELL_API_KEY as string,
    userEmail: user?.primaryEmailAddress?.emailAddress as string,
  });

  useEffect(() => {
    if (isSupported()) {
      client.subscribe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user?.primaryEmailAddress) return <>Please login first</>;

  return (
    <MagicBell
      BellIcon={<BellIcon />}
      apiKey={process.env.NEXT_PUBLIC_MAGICBELL_API_KEY as string}
      userEmail={"aydin96tr@gmail.com"}
      theme={{
        icon: { width: "1.2rem" },
      }}
    >
      {(props) => <FloatingNotificationInbox height={300} {...props} />}
    </MagicBell>
  );
}
