"use client";

import { BarChart, Card, Text, Title } from "@tremor/react";

export default function Charts() {
  const data = [
    {
      Month: "Jan 21",
      Failed: 2890,
      Completed: 1400,
      "In Progress": 4938,
    },
    {
      Month: "Feb 21",
      Failed: 1890,
      Completed: 998,
      "In Progress": 2938,
    },
    // ...
    {
      Month: "Jan 22",
      Failed: 3890,
      Completed: 2980,
      "In Progress": 2645,
    },
  ];

  const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

  return (
    <Card>
      <Title>Ticket Monitoring</Title>
      <Text>Tickets by Status</Text>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Month"
        categories={["Completed", "In Progress", "Failed"]}
        colors={["sky", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        stack={true}
      />
    </Card>
  );
}
