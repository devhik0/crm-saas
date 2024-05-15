import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Card } from "@tremor/react";

export default function MailDetails() {
  // TODO: Add a mail renderer/parser here !
  return (
    <div className="h-full">
      <Card className="h-full rounded-none p-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <span>From: tyler@ui.dev</span>
        <span>To: mail@receiver.com</span>

        <div className="flex flex-row items-center justify-between gap-2">
          <h3 className="text-xl">Tyler from UI</h3>
          <div className="flex items-center gap-2">
            <span>3.13 PM</span>
            <DotFilledIcon className="size-4 text-blue-600" />
          </div>
        </div>
        <p className="text-lg">Mail header</p>
        <p className="pt-2 text-sm text-gray-600">
          Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
          perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
          repellendus sint. Laboriosam!
        </p>
        <div>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
          <p className="pt-2 text-sm text-gray-600">
            Content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia asperiores praesentium ad
            perspiciatis quis est eaque velit aspernatur minus, pariatur soluta assumenda, neque inventore unde, qui
            repellendus sint. Laboriosam!
          </p>
        </div>
      </Card>
    </div>
  );
}
