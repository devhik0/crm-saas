import { Tables } from "@/utils/supabase/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AddTaskForm from "./add-task-form";
import TaskStatusCards from "./task-status-cards";

dayjs.extend(relativeTime);

export type Task = Tables<"tasks"> & {
  task_categories: Tables<"task_categories"> | null;
  task_statuses: Tables<"task_statuses"> | null;
};

export default function Tasks() {
  // todo: add drag n drop to tasks
  return (
    <div className="m-4 p-2">
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-end">
            <AddTaskForm />
          </div>
          <TaskStatusCards />
        </div>
      </div>
    </div>
  );
}
