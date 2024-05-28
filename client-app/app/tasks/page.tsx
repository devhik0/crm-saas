import { Tables } from "@/utils/supabase/types";
import TaskKanban from "./task-kanban";

export type Task = Tables<"tasks"> & {
  task_categories: Tables<"task_categories"> | null;
  task_statuses: Tables<"task_statuses"> | null;
};

export default function Tasks() {
  // todo: add drag n drop to tasks
  return (
    <div className="mt-10 flex flex-row justify-between gap-2 bg-gray-900 p-2">
      <TaskKanban />
    </div>
  );
}
