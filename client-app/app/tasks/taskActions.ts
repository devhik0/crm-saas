"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

const supabase = createClient();

export const getTasks = async () => {
  const { data: tasks } = await (await supabase)
    .from("tasks")
    .select(`*, task_categories (*), task_statuses (*)`)
    .order("time", { ascending: false });

  return tasks;
};

export const getTaskCategories = async () => {
  const { data: taskCategories } = await (await supabase).from("task_categories").select("*");

  return taskCategories;
};

export const getTaskStatuses = async () => {
  const { data: taskStatuses } = await (await supabase).from("task_statuses").select("*");

  return taskStatuses;
};

export const getTasksByStatus = async (status: string) => {
  const { data } = await (await supabase)
    .from("tasks")
    .select("*, task_statuses(*), task_categories(*)")
    .eq("task_statuses.name", status)
    .order("time", { ascending: false });

  // console.log("filtered tasks: ", data);

  return data;
};

export const addTask = async (formData: FormData) => {
  const category_id = formData.get("category")?.toString() as string;
  const name = formData.get("name")?.toString() as string;
  const description = formData.get("description")?.toString() as string;
  const status_id = formData.get("status")?.toString() as string;

  const taskData = { category_id, name, description, status_id };

  const { error } = await (await supabase).from("tasks").insert(taskData).select();

  if (error) throw error.message;

  revalidatePath("/tasks");
};

export const updateTask = async (formData: FormData) => {
  const category_id = formData.get("category")?.toString() as string;
  const task_id = formData.get("task_id")?.toString() as string;
  const name = formData.get("name")?.toString() as string;
  const description = formData.get("description")?.toString() as string;
  const status_id = formData.get("status")?.toString() as string;

  const taskData = { category_id, name, description, status_id };

  const { error } = await (await supabase).from("tasks").update(taskData).eq("_id", task_id);
  if (error) throw error.message;

  revalidatePath("/tasks");
};

export const deleteTask = async (formData: FormData) => {
  const task_id = formData.get("task_id")?.toString() as string;

  const { error } = await (await supabase).from("tasks").delete().eq("_id", task_id);

  if (error) throw error.message;

  revalidatePath("/tasks");
};
