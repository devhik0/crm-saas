import { AvatarIcon, ClockIcon } from "@radix-ui/react-icons";
import { Badge, Card } from "@tremor/react";
import dayjs from "dayjs";
import TaskMenu from "./task-menu";
import { getTasks } from "./taskActions";

export default async function TasksCard() {
  const tasks = await getTasks();

  if (!tasks) return <>Loading data...</>;

  return (
    <div>
      {tasks.map((item, idx) => {
        return (
          <Card key={idx} className="flex w-full flex-col gap-3 p-3">
            <TaskMenu item={item} />
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
}
