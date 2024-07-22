import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function TaskStatusCardMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild className="">
        <DotsHorizontalIcon className="size-4" />
      </PopoverTrigger>
      <PopoverContent className=" border-none bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
        <div className="grid gap-4">
          <div className="space-y-2">menu</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
