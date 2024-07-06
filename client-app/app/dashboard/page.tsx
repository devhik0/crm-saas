import { createClient } from "@/utils/supabase/server";
import { Tracker, type Color } from "@tremor/react";

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
      {/* //todo: fix that client/server issue from here <- */}
      {/* <TabGroup className="mt-6">
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Purchases</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Categories />
            <div className="flex flex-row items-center gap-2 pt-6">
              <Card className="m-0 flex size-full flex-col gap-2 p-10">
                <h3 className="text-lg">Target Sales Revenue</h3>
                <p className="flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  <span>$12,699 &bull; {((12699 / 20000) * 100).toPrecision(3)}%</span> <span>$20,000</span>
                </p>
                <ProgressBar value={Number(((12699 / 20000) * 100).toPrecision(3))} color="fuchsia" className="mt-3" />
              </Card>

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
            <div className="mt-6 bg-gray-900 text-gray-300">
              <Card className="overflow-y-scroll">
                <Flex justifyContent="start" className="space-x-2">
                  <Title>Purchases</Title>
                  <Badge color="gray">8</Badge>
                </Flex>
                <Text className="mt-2">Overview of this months purchases</Text>
                <Transactions />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup> */}
    </div>
  );
}
