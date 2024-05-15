import { Badge, Card, Flex, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from "@tremor/react";
import Categories from "./categories";
import Transactions from "./transactions";
import Visitors from "./visitors";

export default function Dashboard() {
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
      </TabGroup>
    </div>
  );
}
