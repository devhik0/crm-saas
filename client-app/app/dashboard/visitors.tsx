/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { api } from "@/convex/_generated/api";
import { AreaChart, Card, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { useQuery } from "convex/react";

type Visitor = {
  Month: string;
  Visitors: number;
  "Page Views": number;
  "Bounce Rate": number;
};
export default function Visitors() {
  const visitors = useQuery(api.visitors.get) as Visitor[];

  if (!visitors) return;

  const numberFormatter = (value: number | bigint) => Intl.NumberFormat("us").format(value).toString();

  const percentageFormatter = (value: number) =>
    `${Intl.NumberFormat("us")
      .format(value * 100)
      .toString()}%`;

  function sumArray(array: Visitor[], metric: string) {
    // @ts-expect-error
    return array.reduce((accumulator, currentValue) => accumulator + currentValue[metric], 0);
  }

  return (
    <div className="mt-6">
      <Card className="p-0">
        <TabGroup>
          <TabList>
            <Tab className="p-4 text-left sm:p-6">
              <p className="text-sm sm:text-base">Visitors</p>
              <Metric className="mt-2 text-inherit">{numberFormatter(sumArray(visitors, "Visitors"))}</Metric>
            </Tab>
            <Tab className="p-4 text-left sm:p-6">
              <p className="text-sm sm:text-base">Page views</p>
              <Metric className="mt-2 text-inherit">{numberFormatter(sumArray(visitors, "Page Views"))}</Metric>
            </Tab>
            <Tab className="p-4 text-left sm:p-6">
              <p className="text-sm sm:text-base">Bounce rate</p>
              <Metric className="mt-2 text-inherit">
                {percentageFormatter(sumArray(visitors, "Bounce Rate") / visitors.length)}
              </Metric>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="p-6">
              <AreaChart
                className="mt-10 h-80"
                data={visitors}
                index="Month"
                categories={["Visitors"]}
                colors={["blue"]}
                valueFormatter={numberFormatter}
                showLegend={false}
                yAxisWidth={50}
              />
            </TabPanel>
            <TabPanel className="p-6">
              <AreaChart
                className="mt-10 h-80"
                data={visitors}
                index="Month"
                categories={["Page Views"]}
                colors={["blue"]}
                valueFormatter={numberFormatter}
                showLegend={false}
                yAxisWidth={50}
              />
            </TabPanel>
            <TabPanel className="p-6">
              <AreaChart
                className="mt-10 h-80"
                data={visitors}
                index="Month"
                categories={["Bounce Rate"]}
                colors={["blue"]}
                valueFormatter={percentageFormatter}
                showLegend={false}
                yAxisWidth={40}
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}
