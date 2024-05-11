"use client";

import { api } from "@/convex/_generated/api";
import { BarChart, Card, Text, Title } from "@tremor/react";
import { useQuery } from "convex/react";

type Ticket = {
  Month: string;
  Failed: number;
  Completed: number;
  "In Progress": number;
};
export default function Charts() {
  const tickets = useQuery(api.tickets.get) as Ticket[];

  const valueFormatter = (number: number | bigint) => Intl.NumberFormat("us").format(number).toString();

  return (
    <Card className="mt-10 h-full">
      <Title>Ticket Monitoring</Title>
      <Text>Tickets by Status</Text>
      <BarChart
        className="mt-4 h-80"
        data={tickets}
        index="Month"
        categories={["Completed", "In Progress", "Failed"]}
        colors={["sky", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        stack={true}
      />
    </Card>
  );
}
