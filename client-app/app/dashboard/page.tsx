import { createClient } from "@/utils/supabase/server";

import { Card, Color, Tab, TabGroup, TabList, TabPanel, TabPanels, Tracker } from "@tremor/react";
import Categories from "./categories";
import Revenue from "./revenue";
import Transactions from "./transactions";
import Visitors from "./visitors";

interface Tracker {
  color: Color;
  tooltip: string;
}

export default async function Dashboard() {
  const supabase = createClient();
  const { data: trackers } = await (await supabase).from("trackers").select("*");

  if (!trackers) return <>Loading data...</>;
  return (
    <div className=" h-full p-2">
      <h3 className="text-lg">Overview</h3>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Purchases</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Categories />
            <div className="flex flex-row items-center gap-2 pt-6">
              <Revenue />
              <Card className="flex size-full flex-col gap-2">
                <h3 className="text-lg">Uptime SLA</h3>
                <p className="flex items-center justify-between text-tremor-default">
                  <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    allyouneed.com
                  </span>
                  <span className="text-tremor-content dark:text-dark-tremor-content">
                    uptime {((trackers.length / 30) * 100).toPrecision(3)}%
                  </span>
                </p>
                <Tracker data={trackers} className="mt-2" />
              </Card>
            </div>
            <Visitors />
          </TabPanel>
          <TabPanel>
            <Transactions />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
