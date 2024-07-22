import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import DeleteTaskForm from "./delete-task-form";
import { Task } from "./page";
import { getTaskCategories, getTaskStatuses } from "./taskActions";
import UpdateTaskForm from "./update-task-form";

export default async function TaskMenu({ item }: { item: Task }) {
  const taskCategories = await getTaskCategories();
  const taskStatuses = await getTaskStatuses();

  if (!taskCategories || !taskStatuses) return <>Loading data...</>;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <DotsHorizontalIcon className="size-5 self-end" />
      </PopoverTrigger>
      <PopoverContent className=" border-none bg-gray-100 dark:bg-gray-900">
        <div className="grid gap-4">
          <div className="flex flex-row items-center gap-6 space-y-2">
            <UpdateTaskForm item={item} taskCategories={taskCategories} taskStatuses={taskStatuses} />
            <DeleteTaskForm item={item} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
