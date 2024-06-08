import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Card } from "@tremor/react";
import Link from "next/link";

// todo: add mail renderer / parser html (after integrating mail service)

export default function MailPage({ params }: { params: { page: string } }) {
  return (
    <div className="w-full p-2">
      <h2 className="mt-2 text-lg">{params.page[0].toLocaleUpperCase() + params.page.slice(1)}</h2>
      <h3 className="mt-2 text-sm">2500 messages, 2 unread</h3>
      {[1, 2, 3, 4].map((item, key) => {
        return (
          <Link key={key} href={`/mails/${params.page}/${item}`}>
            <Card className="my-2 rounded-none border-l-2 border-blue-600 p-2 transition duration-300 ease-in hover:bg-gray-800">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-row items-center justify-between gap-2">
                <h3 className="text-lg">Tyler from UI</h3>
                <div className="flex items-center gap-2">
                  <span>3.13 PM</span>
                  <DotFilledIcon className="size-4 text-blue-600" />
                </div>
              </div>
              <p className="text-sm">Mail header</p>
              <p className="pt-2 text-xs text-gray-600">
                Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
                perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
                repellendus sint. Laboriosam!
              </p>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
