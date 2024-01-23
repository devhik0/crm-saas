import BeakerIcon from "@heroicons/react/solid/BeakerIcon";
import Link from "next/link";
import { ReactNode } from "react";

export default function MailsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 flex flex-row items-center gap-1 border-2 border-gray-800">
      <div className="w-[15%] border-r-2 border-blue-600 p-2">
        <ul>
          {["Inbox", "Starred", "Sent", "Spam", "Draft", "Trash"].map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-l-2 border-gray-400 bg-gray-700 hover:text-blue-600 active:text-blue-600"
              >
                <li className="m-2 flex justify-between gap-2 p-2">
                  <BeakerIcon className="h-6 w-6 text-gray-400" />
                  <Link href={`/mails/${item.toLocaleLowerCase()}`}>{item}</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      {children}
      <div className="border-l-2 border-blue-600">Reading field</div>
    </div>
  );
}
