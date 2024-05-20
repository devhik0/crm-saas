import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const getTaskCategories = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("task_categories").collect();
  },
});

export const createTask = mutation({
  args: {
    category_id: v.id("task_categories"),
    desc: v.string(),
    name: v.string(),
    time: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("tasks", {
      name: args.name,
      category_id: args.category_id,
      desc: args.desc,
      time: args.time,
    });
  },
});
