"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckboxIcon, ListBulletIcon } from "@radix-ui/react-icons";
import TaskKanban from "./task-kanban";
import TaskList from "./task-list";

export default function Tasks() {
  // todo: add drag n drop to tasks
  return (
    <div className="mt-10 flex flex-row justify-between gap-2 bg-gray-900 p-2">
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="list" className="mr-4 focus:border-2 focus:border-blue-600">
            <ListBulletIcon className="mr-1 size-5" />
            List
          </TabsTrigger>
          <TabsTrigger value="kanban" className="focus:border-2 focus:border-blue-600">
            <CheckboxIcon className="mr-1 size-5" />
            Kanban
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="flex flex-col">
          <TaskList />
        </TabsContent>
        <TabsContent value="kanban" className="flex flex-col">
          <TaskKanban />
        </TabsContent>
      </Tabs>
    </div>
  );
}
