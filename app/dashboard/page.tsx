"use client";

import {
  AreaChart,
  Badge,
  BadgeDelta,
  Button,
  Card,
  Flex,
  Grid,
  Metric,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import Link from "next/link";

export default function Dashboard() {
  const categories = [
    {
      title: "Sales",
      metric: "$ 12,699",
      metricPrev: "$ 9,456",
      delta: "34.3%",
      deltaType: "moderateIncrease",
    },
    {
      title: "Profit",
      metric: "$ 40,598",
      metricPrev: "$ 45,564",
      delta: "10.9%",
      deltaType: "moderateDecrease",
    },
    {
      title: "Customers",
      metric: "1,072",
      metricPrev: "856",
      delta: "25.3%",
      deltaType: "moderateIncrease",
    },
  ];

  const data = [
    {
      Month: "Jan 22",
      Visitors: 289,
      "Page Views": 1012,
      "Bounce Rate": 0.5,
    },
    //...
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

  const colors = {
    "Ready for dispatch": "gray",
    Cancelled: "rose",
    Shipped: "emerald",
  } as { [key: string]: string };

  const transactions = [
    {
      transactionID: "#123456",
      user: "Lena Mayer",
      item: "Under Armour Shorts",
      status: "Ready for dispatch",
      amount: "$ 49.90",
      link: "#",
    },
    {
      transactionID: "#234567",
      user: "Max Smith",
      item: "Book - Wealth of Nations",
      status: "Ready for dispatch",
      amount: "$ 19.90",
      link: "#",
    },
    {
      transactionID: "#345678",
      user: "Anna Stone",
      item: "Garmin Forerunner 945",
      status: "Cancelled",
      amount: "$ 499.90",
      link: "#",
    },
    {
      transactionID: "#4567890",
      user: "Truls Cumbersome",
      item: "Running Backpack",
      status: "Shipped",
      amount: "$ 89.90",
      link: "#",
    },
    {
      transactionID: "#5678901",
      user: "Peter Pikser",
      item: "Rolex Submariner Replica",
      status: "Cancelled",
      amount: "$ 299.90",
      link: "#",
    },
    {
      transactionID: "#6789012",
      user: "Phlipp Forest",
      item: "On Clouds Shoes",
      status: "Ready for dispatch",
      amount: "$ 290.90",
      link: "#",
    },
    {
      transactionID: "#78901234",
      user: "Mara Pacemaker",
      item: "Ortovox Backpack 40l",
      status: "Shipped",
      amount: "$ 150.00",
      link: "#",
    },
    {
      transactionID: "#89012345",
      user: "Sev Major",
      item: "Oakley Jawbreaker",
      status: "Ready for dispatch",
      amount: "$ 190.90",
      link: "#",
    },
  ];

  const routes = [
    { page: "Dashboard", link: "/dashboard" },
    { page: "Calendar", link: "/calendar" },
  ];

  return (
    <div className="flex flex-row gap-4">
      <div className="w-[30%] bg-gray-900 text-gray-300">
        {routes.map((item, idx) => (
          <div key={idx} className="m-2 rounded-lg bg-[#212b40] p-2 text-center text-gray-300">
            <Link href={item.link}>{item.page}</Link>
          </div>
        ))}
      </div>
      <div className="w-full p-4">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Page 1</Tab>
            <Tab>Page 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
                {categories.map((item) => (
                  <Card key={item.title}>
                    <Flex alignItems="start">
                      <Text>{item.title}</Text>
                      <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                    </Flex>
                    <Flex justifyContent="start" alignItems="baseline" className="space-x-3 truncate">
                      <Metric>{item.metric}</Metric>
                      <Text className="truncate">from {item.metricPrev}</Text>
                    </Flex>
                  </Card>
                ))}
              </Grid>
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
            </TabPanel>
            <TabPanel>
              <div className="mt-6 h-96 bg-gray-900 text-gray-300">
                <Card className="h-96 overflow-y-scroll">
                  <Flex justifyContent="start" className="space-x-2">
                    <Title>Purchases</Title>
                    <Badge color="gray">8</Badge>
                  </Flex>
                  <Text className="mt-2">Overview of this month's purchases</Text>
                  <Table className="mt-6">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Transaction ID</TableHeaderCell>
                        <TableHeaderCell>User</TableHeaderCell>
                        <TableHeaderCell>Item</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell className="text-right">Amount</TableHeaderCell>
                        <TableHeaderCell>Link</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transactions.map((item) => (
                        <TableRow key={item.transactionID}>
                          <TableCell>{item.transactionID}</TableCell>
                          <TableCell>{item.user}</TableCell>
                          <TableCell>{item.item}</TableCell>
                          <TableCell>
                            <Badge color={colors[item.status]} size="xs">
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">{item.amount}</TableCell>
                          <TableCell>
                            <Button size="xs" variant="secondary" color="gray">
                              See details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
