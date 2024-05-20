"use server";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";

export const createTask = async (taskCategories) => {
  try {
    await fetchMutation(api.tasks.createTask, {
      name: "test task",
      desc: "test desc",
      time: "today",
      category_id: taskCategories.find((cat) => cat._id)?._id as Id<"task_categories">,
    });
  } catch (error) {
    alert("Something went wrong");
  }

  revalidatePath("/tasks");
};
