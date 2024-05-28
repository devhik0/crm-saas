// import dayjs from "dayjs"
// import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import TaskFilters from "./task-filters";
import TaskSearch from "./task-search";
import TaskStatusCards from "./task-status-cards";

dayjs.extend(relativeTime);

export default async function TaskKanban() {
  // todo: add filter and search

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <TaskFilters />
        <TaskSearch />
      </div>
      <TaskStatusCards />
    </>
  );
}
