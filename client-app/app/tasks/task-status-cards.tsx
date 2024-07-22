import { Badge } from "@tremor/react";
import TaskStatusCardMenu from "./task-status-card-menu";
import { getTaskStatuses, getTasksByStatus } from "./taskActions";
import TasksCard from "./tasks-card";

export default async function TaskStatusCards() {
  const taskStatuses = await getTaskStatuses();

  const tasks_status_td = await getTasksByStatus("TODO");
  const tasks_status_td_f = tasks_status_td?.filter((stat) => stat.task_statuses?.name === "TODO");

  const tasks_status_inp = await getTasksByStatus("IN PROGRESS");
  const tasks_status_inp_f = tasks_status_inp?.filter((stat) => stat.task_statuses?.name === "IN PROGRESS");

  const tasks_status_rw = await getTasksByStatus("REVIEW");
  const tasks_status_rw_f = tasks_status_rw?.filter((stat) => stat.task_statuses?.name === "REVIEW");

  const tasks_status_dn = await getTasksByStatus("DONE");
  const tasks_status_dn_f = tasks_status_dn?.filter((stat) => stat.task_statuses?.name === "DONE");

  const taskStatusData = {
    tasks_status_td,
    tasks_status_td_f,
    tasks_status_inp,
    tasks_status_inp_f,
    tasks_status_rw,
    tasks_status_rw_f,
    tasks_status_dn,
    tasks_status_dn_f,
  };

  if (!taskStatuses || !taskStatusData) return <>Loading data...</>;

  return (
    <div className="mt-2 flex flex-row items-start justify-around gap-6">
      <div className="mt-2 flex flex-row gap-6">
        <div className="flex flex-col items-center gap-4 rounded-md p-2 dark:bg-gray-800">
          <div className="flex w-full flex-row items-center justify-between gap-4 px-2">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-base">TODO</h3>
              <Badge className="rounded-full bg-gray-300 text-gray-800">{tasks_status_td_f?.length}</Badge>
            </div>
            <div className="mr-1 flex flex-row items-center gap-2">
              <TaskStatusCardMenu />
            </div>
          </div>
          <TasksCard status={"TODO"} />
        </div>
      </div>
      <div className="mt-2 flex flex-row gap-6">
        <div className="flex flex-col items-center gap-4 rounded-md p-2 dark:bg-gray-800">
          <div className="flex w-full flex-row items-center justify-between gap-4 px-2">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-base">IN PROGRESS</h3>
              <Badge className="rounded-full bg-gray-300 text-gray-800">{tasks_status_inp_f?.length}</Badge>
            </div>
            <div className="mr-1 flex flex-row items-center gap-2">
              <TaskStatusCardMenu />
            </div>
          </div>
          <TasksCard status={"IN PROGRESS"} />
        </div>
      </div>
      <div className="mt-2 flex flex-row gap-6">
        <div className="flex flex-col items-center gap-4 rounded-md p-2 dark:bg-gray-800">
          <div className="flex w-full flex-row items-center justify-between gap-4 px-2">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-base">REVIEW</h3>
              <Badge className="rounded-full bg-gray-300 text-gray-800">{tasks_status_rw_f?.length}</Badge>
            </div>
            <div className="mr-1 flex flex-row items-center gap-2">
              <TaskStatusCardMenu />
            </div>
          </div>
          <TasksCard status={"REVIEW"} />
        </div>
      </div>
      <div className="mt-2 flex flex-row gap-6">
        <div className="flex flex-col items-center gap-4 rounded-md p-2 dark:bg-gray-800">
          <div className="flex w-full flex-row items-center justify-between gap-4 px-2">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-base">DONE</h3>
              <Badge className="rounded-full bg-gray-300 text-gray-800">{tasks_status_dn_f?.length}</Badge>
            </div>
            <div className="mr-1 flex flex-row items-center gap-2">
              <TaskStatusCardMenu />
            </div>
          </div>
          <TasksCard status={"DONE"} />
        </div>
      </div>
    </div>
  );
}
