import { TicketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

export default function SupportLayout({ children }: { children: ReactNode }) {
  const routes = [
    { page: "All tickets", link: "/support/tickets", icon: <TicketIcon className="size-5 text-gray-500" /> },
    { page: "Open", link: "/support/tickets?state=open", icon: <TicketIcon className="size-5 text-blue-600" /> },
    {
      page: "Waiting",
      link: "/support/tickets?state=waiting",
      icon: <TicketIcon className="size-5 text-orange-600" />,
    },
    { page: "Solved", link: "/support/tickets?state=solved", icon: <TicketIcon className="size-5 text-green-600" /> },
  ];

  return (
    <div className="my-2 mt-10 flex h-full flex-row gap-4 p-2 dark:bg-gray-900">
      <div className="">
        <h3 className="text-lg">Tickets</h3>
        <div className="p-1">
          {routes.map((item, idx) => (
            <div
              key={idx}
              className=" p-2 transition duration-500 hover:border-l-2 hover:border-l-[#879ed8] active:border-l-2 active:border-l-[#879ed8]"
            >
              <Link href={item.link} className="flex items-center justify-between gap-4">
                {item.icon} <span>{item.page}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
