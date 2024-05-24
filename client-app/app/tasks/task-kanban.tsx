import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AvatarIcon, ClockIcon, DotsHorizontalIcon, PlusIcon } from "@radix-ui/react-icons";
import { Card, Textarea } from "@tremor/react";
// import dayjs from "dayjs"
// import relativeTime from "dayjs/plugin/relativeTime"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { addTask, deleteTask, getTaskCategories, getTaskStatuses, getTasks } from "./taskActions";
import UpdateTaskForm from "./update-task-form";

dayjs.extend(relativeTime);

export default async function TaskKanban() {
  const tasks = await getTasks();
  const taskCategories = await getTaskCategories();
  const taskStatuses = await getTaskStatuses();

  if (!tasks || !taskCategories || !taskStatuses) return <>Loading data...</>;

  // todo: add filter and search

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-2 flex flex-col items-center gap-2 rounded-md bg-gray-800 p-3 ">
          <h4 className="text-sm">Category</h4>
          <RadioGroup defaultValue="" className="flex flex-row gap-2 text-sm">
            {taskCategories.map((cat) => {
              return (
                <div key={cat._id} className="flex items-center space-x-2">
                  <RadioGroupItem value={cat._id} id={cat.name} />
                  <Label htmlFor={cat.name}>{cat.name}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 rounded-md bg-gray-800 p-2 py-4">
          <Input type="search" placeholder="Search in tasks..." />
          <Button type="submit" className="bg-gray-700">
            Search
          </Button>
        </div>
      </div>
      <div className="mt-2 flex w-full flex-row items-center gap-6">
        {["TODO", "IN PROGRESS", "REVIEW", "DONE"].map((item, idx) => {
          return (
            <div key={idx} className="flex w-full flex-col items-center gap-4 rounded-md bg-gray-800 p-2">
              <div className="flex w-full flex-row items-center justify-between gap-8">
                <div className="flex flex-row items-center gap-2">
                  <h3 className="text-base">{item}</h3>
                  <Badge className="rounded-full bg-gray-300 text-gray-800">{tasks.length}</Badge>
                </div>
                <div className="mr-1 flex flex-row items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild className="">
                      <PlusIcon className="size-4" />
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

                  <Popover>
                    <PopoverTrigger asChild className="">
                      <DotsHorizontalIcon className="size-4" />
                    </PopoverTrigger>
                    <PopoverContent className=" border-none bg-gray-900">
                      <div className="grid gap-4">
                        <div className="space-y-2">menu</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              {tasks.map((item, idx) => {
                return (
                  <Card key={idx} className="flex w-full flex-col gap-3 p-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <DotsHorizontalIcon className="size-5 self-end" />
                      </PopoverTrigger>
                      <PopoverContent className=" border-none bg-gray-900">
                        <div className="grid gap-4">
                          <div className="flex flex-row items-center gap-6 space-y-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <PencilSquareIcon className="size-5 self-end" />
                              </PopoverTrigger>
                              <PopoverContent className=" border-none bg-gray-900">
                                <div className="grid gap-4">
                                  <div className="space-y-2">
                                    <UpdateTaskForm
                                      item={item}
                                      taskCategories={taskCategories}
                                      taskStatuses={taskStatuses}
                                    />
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                            <Dialog>
                              <DialogTrigger>
                                <TrashIcon className="size-5 text-red-600" />
                              </DialogTrigger>
                              <DialogContent className="border-none bg-gray-900">
                                <DialogHeader>
                                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                                  <DialogDescription>
                                    This action cannot be undone. This will permanently delete this task from our
                                    servers.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <form action={deleteTask}>
                                    <Input type="hidden" value={item._id} name="task_id" />
                                    <Button className="bg-red-600">Delete</Button>
                                  </form>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <h4 className="text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <div className="flex flex-row items-center justify-between">
                      <Badge className="bg-blue-600">{item.task_categories?.name}</Badge>
                      <AvatarIcon className="size-4" />
                      <div className="flex flex-row items-center gap-1">
                        <ClockIcon className="size-4" />
                        <span className="text-xs">{dayjs(item.time).fromNow()}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
