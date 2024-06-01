"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

export default function ChatPageLayout({ children, params }: { children: ReactNode; params: { name: string } }) {
  return (
    <div className="flex w-full flex-col p-2">
      <div>
        <Card className="my-2 w-full rounded-none p-2">
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-sm">{params.name[0].toLocaleUpperCase() + params.name.slice(1)}</h3>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PencilSquareIcon className="size-5" />
              <TrashIcon className="size-5" />
            </div>
          </div>
        </Card>
      </div>
      {children}
    </div>
  );
}
