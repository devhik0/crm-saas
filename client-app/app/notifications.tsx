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
    userEmail: user?.emailAddresses[0].emailAddress as string,
  });

  useEffect(() => {
    if (isSupported()) {
      client.subscribe();
    }
  }, []);

  return (
    <MagicBell
      BellIcon={<BellIcon />}
      apiKey={process.env.NEXT_PUBLIC_MAGICBELL_API_KEY as string}
      userEmail={user?.emailAddresses[0].emailAddress as string}
      theme={{
        icon: { width: "1.2rem" },
      }}
    >
      {(props) => <FloatingNotificationInbox height={300} {...props} />}
    </MagicBell>
  );
}
