"use client";

import { Visitor, numberFormatter, percentageFormatter, sumArray } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { AreaChart, Card, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { useEffect, useState } from "react";

export default function Visitors() {
  const supabase = createClient();

  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const getVisitors = async () => {
    const { data: visitors1 } = await supabase.from("visitors").select("*");
    setVisitors(visitors1 as Visitor[]);
  };
  useEffect(() => {
    getVisitors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visitors) return;

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
                colors={["emerald"]}
                valueFormatter={numberFormatter}
                showLegend={false}
                yAxisWidth={50}
                curveType="natural"
              />
            </TabPanel>
            <TabPanel className="p-6">
              <AreaChart
                className="mt-10 h-80"
                data={visitors}
                index="Month"
                categories={["Page Views"]}
                colors={["indigo"]}
                valueFormatter={numberFormatter}
                showLegend={false}
                yAxisWidth={50}
                curveType="natural"
              />
            </TabPanel>
            <TabPanel className="p-6">
              <AreaChart
                className="mt-10 h-80"
                data={visitors}
                index="Month"
                categories={["Bounce Rate"]}
                colors={["rose"]}
                valueFormatter={percentageFormatter}
                showLegend={false}
                yAxisWidth={40}
                curveType="natural"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}
