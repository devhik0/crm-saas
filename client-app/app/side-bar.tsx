"use client";

import {
  ArchiveIcon,
  CalendarIcon,
  ChatBubbleIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  GearIcon,
  ListBulletIcon,
  PersonIcon,
  PieChartIcon,
  QuestionMarkIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const routes = [
  { page: "Dashboard", link: "/dashboard", icon: <DashboardIcon className="size-6" /> },
  { page: "Calendar", link: "/calendar", icon: <CalendarIcon className="size-6" /> },
  { page: "Profile", link: "/profile", icon: <PersonIcon className="size-6" /> },
  { page: "Reports", link: "/reports", icon: <TableIcon className="size-6" /> },
  { page: "Charts", link: "/charts", icon: <PieChartIcon className="size-6" /> },
  { page: "Tasks", link: "/tasks", icon: <ListBulletIcon className="size-6" /> },
  { page: "Mails", link: "/mails", icon: <EnvelopeClosedIcon className="size-6" /> },
  { page: "Chat", link: "/chat", icon: <ChatBubbleIcon className="size-6" /> },
  { page: "Contacts", link: "/contacts", icon: <PersonIcon className="size-6" /> },
  { page: "Storage", link: "/storage", icon: <ArchiveIcon className="size-6" /> },
  { page: "Support", link: "/support", icon: <QuestionMarkIcon className="size-6" /> },
  // ---
  { page: "Settings", link: "/settings", icon: <GearIcon className="size-6" /> },
  { page: "Logout", link: "/", icon: <ExitIcon className="size-6" /> },
];

export default function Sidebar() {
  return (
    <div className="h-full bg-gray-900 text-gray-300">
      <div className="flex items-center justify-between gap-6 bg-gray-700 p-2 py-4">
        <Image src={"/logo.png"} alt="logo" width={48} height={48} /> <span>Customer Nexus</span>
      </div>
      <ul>
        {routes.map((item, idx) => (
          <li
            key={idx}
            className="mb-2 border-transparent p-2 text-center text-gray-300 transition duration-500 hover:border-l-2 hover:border-l-[#879ed8] active:border-l-2 active:border-l-[#879ed8]"
          >
            <Link href={item.link} className="flex items-center justify-normal gap-6">
              <span>{item.icon}</span>
              <span>{item.page}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
