import {
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
import Visitors from "./visitors";

export default function DataPages() {
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

  return (
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
          <Visitors />
        </TabPanel>
        <TabPanel>
          <div className="mt-6 h-96 bg-gray-900 text-gray-300">
            <Card className="h-96 overflow-y-scroll">
              <Flex justifyContent="start" className="space-x-2">
                <Title>Purchases</Title>
                <Badge color="gray">8</Badge>
              </Flex>
              <Text className="mt-2">Overview of this months purchases</Text>
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
  );
}
