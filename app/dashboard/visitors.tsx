"use client";

import { AreaChart, Card, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";

export default function Visitors() {
  const data = [
    {
      Month: "Jan 22",
      Visitors: 289,
      "Page Views": 1012,
      "Bounce Rate": 0.5,
    },
    {
      Month: "Jan 23",
      Visitors: 389,
      "Page Views": 1232,
      "Bounce Rate": 0.51,
    },
  ];

  const numberFormatter = (value) => Intl.NumberFormat("us").format(value).toString();

  const percentageFormatter = (value) =>
    `${Intl.NumberFormat("us")
      .format(value * 100)
      .toString()}%`;

  function sumArray(array, metric) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue[metric], 0);
  }

  return (
    <div className="mt-6">
      <Card className="p-0">
        <TabGroup>
          <TabList>
            <Tab className="p-4 text-left sm:p-6">
              <p className="text-sm sm:text-base">Visitors</p>
              <Metric className="mt-2 text-inherit">{numberFormatter(sumArray(data, "Visitors"))}</Metric>
            </Tab>
            <Tab className="p-4 text-left sm:p-6">
              <p className="text-sm sm:text-base">Page views</p>
              <Metric className="mt-2 text-inherit">{numberFormatter(sumArray(data, "Page Views"))}</Metric>
            </Tab>
            <Tab className="p-4 text-left sm:p-6">
              <p className="text-sm sm:text-base">Bounce rate</p>
              <Metric className="mt-2 text-inherit">
                {percentageFormatter(sumArray(data, "Bounce Rate") / data.length)}
              </Metric>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="p-6">
              <AreaChart
                className="mt-10 h-80"
                data={data}
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
                data={data}
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
                data={data}
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
