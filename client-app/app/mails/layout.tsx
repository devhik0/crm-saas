import {
  InboxArrowDownIcon,
  NoSymbolIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

export default function MailsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 flex h-full flex-row gap-1 border-2 border-gray-800 bg-gray-900">
      <div className="h-full w-[15%] border-r-2 border-blue-600 p-2">
        <div className="">
          {[
            { page: "Inbox", icon: <InboxArrowDownIcon className="size-6 text-gray-400" /> },
            { page: "Starred", icon: <StarIcon className="size-6 text-gray-400" /> },
            { page: "Sent", icon: <PaperAirplaneIcon className="size-6 text-gray-400" /> },
            { page: "Spam", icon: <NoSymbolIcon className="size-6 text-gray-400" /> },
            { page: "Draft", icon: <PencilSquareIcon className="size-6 text-gray-400" /> },
            { page: "Trash", icon: <TrashIcon className="size-6 text-gray-400" /> },
          ].map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-l-2 border-gray-400 bg-gray-700 hover:border-l-blue-600 hover:text-blue-600 active:text-blue-600"
              >
                <Link href={`/mails/${item.page.toLocaleLowerCase()}`}>
                  <li className="m-2 flex justify-between gap-2 p-2 hover:text-blue-600">
                    {item.icon}
                    {item.page}
                  </li>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {children}
      <div className="border-l-2 border-blue-600">Reading field</div>
    </div>
  );
}
