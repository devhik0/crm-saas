"use client";

import {
  ArchiveIcon,
  CalendarIcon,
  ChatBubbleIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  ListBulletIcon,
  PersonIcon,
  PieChartIcon,
  QuestionMarkIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const routes = [
    { page: "Dashboard", link: "/dashboard", icon: <DashboardIcon className="size-5" /> },
    { page: "Calendar", link: "/calendar", icon: <CalendarIcon className="size-5" /> },
    { page: "Reports", link: "/reports", icon: <TableIcon className="size-5" /> },
    { page: "Charts", link: "/charts", icon: <PieChartIcon className="size-5" /> },
    { page: "Tasks", link: "/tasks", icon: <ListBulletIcon className="size-5" /> },
    { page: "Mails", link: "/mails", icon: <EnvelopeClosedIcon className="size-5" /> },
    { page: "Chat", link: "/chat", icon: <ChatBubbleIcon className="size-5" /> },
    { page: "Contacts", link: "/contacts", icon: <PersonIcon className="size-5" /> },
    { page: "Storage", link: "/storage", icon: <ArchiveIcon className="size-5" /> },
    { page: "Support", link: "/support", icon: <QuestionMarkIcon className="size-5" /> },
  ];

  return (
    <div className="h-full dark:bg-gray-900 dark:text-gray-100">
      <Link href={`/`}>
        <div className="flex items-center justify-between gap-6 p-2 py-4">
          <Image src={"/logo.png"} alt="logo" width={48} height={48} priority /> <span>Customer Nexus</span>
        </div>
      </Link>
      <ul>
        {routes.map((item, idx) => (
          <li
            key={idx}
            className="mb-2 border-transparent p-2 text-center transition duration-500 hover:border-l-2 hover:border-l-[#294078] active:border-l-2 active:border-l-[#294078]"
          >
            <Link href={item.link} className="flex items-center justify-normal gap-4 text-base">
              <span>{item.icon}</span>
              <span>{item.page}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
