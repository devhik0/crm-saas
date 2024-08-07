import { render } from "@testing-library/react";
import { test } from "vitest";
import DeleteTaskForm from "./delete-task-form";

test("Renders delete task form", () => {
  render(
    <DeleteTaskForm
      item={{
        _id: "81bb6385-307e-4d8c-bf78-3aa43246f25e",
        category_id: "6ba046b7-af21-4fbd-9234-52e824a7f41a",
        description: "task status desc",
        name: "a task to test status",
        time: "2024-05-28T21:16:27.829391+00:00",
        status_id: "9c23465b-0bc4-4732-8de5-b527d2d14742",
        task_statuses: { id: "9c23465b-0bc4-4732-8de5-b527d2d14742", name: "REVIEW" },
        task_categories: { _id: "6ba046b7-af21-4fbd-9234-52e824a7f41a", name: "Design" },
      }}
    />
  );
});
