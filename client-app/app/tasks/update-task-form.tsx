"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tables } from "@/utils/supabase/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Textarea } from "@tremor/react";
import { useState } from "react";
import { Task } from "./page";
import { updateTask } from "./taskActions";

export default function UpdateTaskForm({
  item,
  taskCategories,
  taskStatuses,
}: {
  item: Task;
  taskCategories: Tables<"task_categories">[];
  taskStatuses: Tables<"task_statuses">[];
}) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.task_categories!.name);
  const [status, setStatus] = useState(item.task_statuses!.name);

  console.log("cat, stat:", { category, status });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <PencilSquareIcon className="size-5 self-end" />
      </PopoverTrigger>
      <PopoverContent className=" border-none bg-gray-900">
        <div className="grid gap-4">
          <div className="space-y-2">
            <form action={updateTask}>
              <Input
                name="name"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <Textarea
                name="description"
                value={description}
                placeholder="Task Description"
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
              <Select name="category">
                <SelectTrigger
                  className="w-[180px]"
                  value={category}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                >
                  <SelectValue placeholder={category} />
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
                <SelectTrigger className="w-[180px]" value={status} onChange={(e) => setStatus(e.currentTarget.value)}>
                  <SelectValue placeholder={status} />
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
              <Input type="hidden" value={item._id} name="task_id" />
              <Button className="bg-blue-600">Update task</Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
