import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  categories: defineTable({
    delta: v.string(),
    deltaType: v.string(),
    metric: v.string(),
    metricPrev: v.string(),
    title: v.string(),
  }),
  contacts: defineTable({
    capacity: v.string(),
    costs: v.string(),
    lastEdited: v.string(),
    owner: v.string(),
    region: v.string(),
    status: v.string(),
  }),
  helpTickets: defineTable({
    assignee: v.string(),
    id: v.float64(),
    lastEdited: v.string(),
    requester: v.string(),
    status: v.string(),
    subject: v.string(),
  }),
  task_categories: defineTable({ name: v.string() }),
  tasks: defineTable({
    category: v.string(), // 1-1 ref
    desc: v.string(),
    name: v.string(),
    time: v.string(),
  }),
  tickets: defineTable(v.any()),
  trackers: defineTable({
    color: v.string(),
    tooltip: v.string(),
  }),
  transactions: defineTable({
    amount: v.string(),
    item: v.string(),
    link: v.string(),
    status: v.string(),
    transactionID: v.string(),
    user: v.string(),
  }),
  visitors: defineTable(v.any()),
});
