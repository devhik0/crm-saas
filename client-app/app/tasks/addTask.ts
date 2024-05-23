"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const addTask = async (formData: FormData) => {
  const supabase = createClient();

  const category_id = formData.get("category")?.toString() as string;
  const name = formData.get("name")?.toString() as string;
  const description = formData.get("description")?.toString() as string;

  const taskData = { category_id, name, description };

  const { error } = await (await supabase).from("tasks").insert([taskData]).select();

  if (error) throw error.message;

  revalidatePath("/tasks");
};
