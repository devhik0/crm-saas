"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";
import { isSupported, WebPushClient } from "@magicbell/webpush";
import { useEffect } from "react";

const client = new WebPushClient({
  apiKey: "98cbd6c1a28e50c1fe35f5406c707499e2ac4791",
  userEmail: "aydin96tr@gmail.com",
});

export default function Notifications() {
  useEffect(() => {
    if (isSupported()) {
      client.subscribe();
    }

    return () => client.unsubscribe();
  }, []);
  return (
    <MagicBell
      BellIcon={<BellIcon />}
      apiKey={"98cbd6c1a28e50c1fe35f5406c707499e2ac4791"}
      userEmail="aydin96tr@gmail.com"
      theme={{
        icon: { width: "1.2rem" },
      }}
    >
      {(props) => <FloatingNotificationInbox height={300} {...props} />}
    </MagicBell>
  );
}
