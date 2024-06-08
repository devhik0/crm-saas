"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Card } from "@tremor/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="size-full p-2">
      Messages
      <div className="my-2 flex size-full flex-row bg-gray-900 ">
        <div className="w-5/12 border-r-2 border-r-blue-800 p-2">
          {[
            { name: "Jake", message: "Hello, man ! how are you ?" },
            { name: "Mary", message: "I will call you back sorry" },
            { name: "Daniel", message: "How its going bro ?" },
            { name: "Susan", message: "I will be there soon" },
          ].map((item, key) => {
            return (
              <Link key={key} href={`/chat/${item.name.toLocaleLowerCase()}`}>
                <Card className="my-2 w-full rounded-none p-2 transition duration-300 ease-in hover:bg-gray-800">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-center gap-2">
                        <h3 className="text-sm">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.message}</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="text-xs">3.13 PM</span>
                      <DotFilledIcon className="size-6 text-blue-600" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
