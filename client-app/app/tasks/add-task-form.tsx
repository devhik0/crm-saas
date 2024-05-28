import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Textarea } from "@tremor/react";
import { addTask, getTaskCategories, getTaskStatuses } from "./taskActions";

export default async function AddTaskForm() {
  const taskCategories = await getTaskCategories();
  const taskStatuses = await getTaskStatuses();

  if (!taskCategories || !taskStatuses) return <>Loading data...</>;

  return (
    <Popover>
      <PopoverTrigger className="flex flex-row items-center gap-2 rounded-md bg-blue-600 p-2">
        <PlusIcon className="size-4" />
        <span className="text-sm">Add Task</span>
      </PopoverTrigger>
      <PopoverContent className=" border-none bg-gray-900">
        <div className="grid gap-4">
          <div className="space-y-2">
            <form action={addTask}>
              <Input name="name" placeholder="Task Name" />
              <Textarea name="description" placeholder="Task Description" />
              <Select name="category">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="border-none bg-gray-900">
                  {taskCategories.map((cat, idx) => {
                    return (
                      <SelectItem className="hover:bg-gray-800" key={idx} value={cat._id}>
                        {cat.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <Select name="status">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="border-none bg-gray-900">
                  {taskStatuses.map((stat, idx) => {
                    return (
                      <SelectItem className="hover:bg-gray-800" key={idx} value={stat.id}>
                        {stat.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              <Button className="bg-blue-600">Add task</Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
