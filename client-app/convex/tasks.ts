import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createTask = mutation({
  args: {
    category: v.string(), // 1-1 ref
    desc: v.string(),
    name: v.string(),
    time: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("tasks", {
      name: args.name,
      category: args.category,
      desc: args.desc,
      time: args.time,
    });
  },
});
