import BeakerIcon from "@heroicons/react/solid/BeakerIcon";
import Link from "next/link";

export default function Inbox() {
  return (
    <div className="mt-2 flex flex-row items-center gap-1 border-2 border-gray-800">
      <div className="w-[20%] border-r-2 border-blue-600 p-2">
        <ul>
          {["Inbox", "Starred", "Sent", "Spam", "Trash"].map((item, idx) => {
            return (
              <div
                key={idx}
                className="border-l-2 border-gray-400 bg-gray-700 hover:text-blue-600 active:text-blue-600"
              >
                <li className="m-2 flex justify-between gap-2 p-2">
                  <BeakerIcon className="h-6 w-6 text-gray-400" />
                  <Link href={"inbox/#starred"}>{item}</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="p-2" id="inbox">
        Content
      </div>
    </div>
  );
}
