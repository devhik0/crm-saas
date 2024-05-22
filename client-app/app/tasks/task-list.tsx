import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createClient } from "@/utils/supabase/server";
import { AvatarIcon, ClockIcon, DotsHorizontalIcon, PlusIcon } from "@radix-ui/react-icons";
import { Card } from "@tremor/react";

type TaskCategory = {
  _id: string;
  name: string;
};

type Task = TaskCategory & {
  category_id: string;
  description: string;
  time: string;
};

export default async function TaskList() {
  // todo: first, make a one task component for both views
  // todo: continue on !
  // todo: add addTask feature

  const supabase = createClient();
  const { data: tasks } = await (await supabase).from("tasks").select("*");
  const { data: taskCategories } = await (await supabase).from("task_categories").select("*");

  if (!tasks || !taskCategories) return <>Loading data...</>;

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="my-2 flex w-full flex-col items-center gap-2 rounded-md bg-gray-800 p-3 ">
          <h4 className="text-sm">Category</h4>
          <RadioGroup defaultValue="" className="flex flex-row gap-2 text-sm">
            {taskCategories.map((cat: TaskCategory) => {
              return (
                <div key={cat._id} className="flex items-center space-x-2">
                  <RadioGroupItem value={cat.name} id={cat.name} />
                  <Label htmlFor={cat.name}>{cat.name}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
        <div className="flex w-full items-center space-x-2 rounded-md bg-gray-800 p-2 py-4">
          <Input type="search" placeholder="Search in tasks..." />
          <Button type="submit" className="bg-gray-700">
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {["TODO", "IN PROGRESS", "REVIEW", "DONE"].map((item, idx) => (
          <div key={idx} className="flex w-full flex-col items-center gap-4 rounded-md bg-gray-800 p-2">
            <div className="flex w-full flex-row items-center justify-between gap-8">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-base">{item}</h3>
                <Badge className="rounded-full bg-gray-300 text-gray-800">5</Badge>
              </div>
              <div className="mr-1 flex flex-row items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild className="">
                    <PlusIcon className="size-4" />
                  </PopoverTrigger>
                  <PopoverContent className=" border-none bg-gray-900">
                    <div className="grid gap-4">
                      <div className="space-y-2">menu</div>
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
            {tasks.map((item: Task, idx: number) => {
              const category = taskCategories.find((cat: TaskCategory) => cat._id === item.category_id)?.name;

              return (
                <Card key={idx} className="flex flex-row items-center justify-between gap-3 p-3">
                  <div className="flex w-full flex-col items-start gap-2">
                    <h4 className="text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  <div className="flex w-full flex-row items-center gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <Badge className="bg-blue-600">{category}</Badge>
                      <AvatarIcon className="size-4" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <ClockIcon className="size-4" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                  </div>
                  <div className="">
                    <Popover>
                      <PopoverTrigger asChild>
                        <DotsHorizontalIcon className="size-5 self-end" />
                      </PopoverTrigger>
                      <PopoverContent className=" border-none bg-gray-900">
                        <div className="grid gap-4">
                          <div className="space-y-2">menu</div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </Card>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
