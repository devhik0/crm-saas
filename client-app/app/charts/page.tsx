"use client";

import { api } from "@/convex/_generated/api";
import { valueFormatter } from "@/lib/utils";
import { BarChart, Card, LineChart, Text, Title } from "@tremor/react";
import { useQuery } from "convex/react";

type Ticket = {
  Month: string;
  Failed: number;
  Completed: number;
  "In Progress": number;
};
export default function Charts() {
  const tickets = useQuery(api.tickets.get) as Ticket[];

  const chartdata = [
    { date: "Jun 23", "IPhone 12": 3129, "Red Sofa": 172 },
    { date: "Jul 23", "IPhone 12": 3490, "Red Sofa": 198 },
    { date: "Aug 23", "IPhone 12": 2903, "Red Sofa": 201 },
    { date: "Sep 23", "IPhone 12": 2643, "Red Sofa": 234 },
    { date: "Oct 23", "IPhone 12": 2837, "Red Sofa": 247 },
    { date: "Nov 23", "IPhone 12": 2954, "Red Sofa": 384 },
    { date: "Dec 23", "IPhone 12": 3239, "Red Sofa": 373 },
    { date: "Jan 24", "IPhone 12": 2890, "Red Sofa": 233 },
    { date: "Feb 24", "IPhone 12": 2756, "Red Sofa": 210 },
    { date: "Mar 24", "IPhone 12": 3322, "Red Sofa": 219 },
    { date: "Apr 24", "IPhone 12": 3470, "Red Sofa": 210 },
    { date: "May 24", "IPhone 12": 3475, "Red Sofa": 181 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Card className="h-full">
        <Title>Ticket Monitoring</Title>
        <Text>Tickets by Status</Text>
        <BarChart
          className="my-4 h-80"
          data={tickets}
          index="Month"
          categories={["Completed", "In Progress", "Failed"]}
          colors={["sky", "violet", "fuchsia"]}
          valueFormatter={valueFormatter}
          stack={true}
        />
      </Card>
      <Card>
        <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Sales by month (Qty)
        </h3>{" "}
        <LineChart
          className="my-4 h-72"
          data={chartdata}
          index="date"
          yAxisWidth={65}
          categories={["IPhone 12", "Red Sofa"]}
          colors={["indigo", "cyan"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  );
}
