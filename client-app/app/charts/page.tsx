"use client";

import { valueFormatter } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { BarChart, Card, LineChart, Text, Title } from "@tremor/react";
import { useEffect, useState } from "react";

type Ticket = {
  Month: string;
  Failed: number;
  Completed: number;
  "In Progress": number;
  _id: string;
};
export default function Charts() {
  const supabase = createClient();

  const [tickets, setTickets] = useState<Ticket[]>([]);

  const getTickets = async () => {
    const {
      data: tickets1,
      error,
      status,
    } = (await supabase.from("tickets").select("*").order("Month", { ascending: true })) || [];
    setTickets(tickets1 as Ticket[]);
    console.log("tickets: ", { tickets1, status, error });
  };

  useEffect(() => {
    getTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    { date: "Jun 24", "IPhone 12": 3405, "Red Sofa": 81 },
    { date: "Jul 24", "IPhone 12": 3205, "Red Sofa": 41 },
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
