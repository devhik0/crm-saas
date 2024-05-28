import { Badge } from "@/components/ui/badge";
import TaskStatusCardMenu from "./task-status-card-menu";
import { getTaskStatuses } from "./taskActions";
import TasksCard from "./tasks-card";

export default async function TaskStatusCards() {
  const taskStatuses = await getTaskStatuses();

  if (!taskStatuses) return <>Loading data...</>;

  return (
    <div className="mt-2 flex w-full flex-row items-center gap-6">
      {taskStatuses.map((item, idx) => {
        return (
          <div key={idx} className="flex w-full flex-col items-center gap-4 rounded-md bg-gray-800 p-2">
            <div className="flex w-full flex-row items-center justify-between gap-8">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-base">{item.name}</h3>
                <Badge className="rounded-full bg-gray-300 text-gray-800">5</Badge>
              </div>
              <div className="mr-1 flex flex-row items-center gap-2">
                <TaskStatusCardMenu />
              </div>
            </div>
            <TasksCard />
          </div>
        );
      })}
    </div>
  );
}
