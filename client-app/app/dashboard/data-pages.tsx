import { api } from "@/convex/_generated/api";
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
import { fetchQuery } from "convex/nextjs";
import Visitors from "./visitors";

type Transaction = {
  transactionID: string;
  user: string;
  item: string;
  status: string;
  amount: string;
  link: string;
};

type Category = {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: string;
};

export default async function DataPages() {
  const transactions = (await fetchQuery(api.transactions.get)) as Transaction[];
  const categories = (await fetchQuery(api.categories.get)) as Category[];

  if (!transactions || !categories) return;

  const colors = {
    "Ready for dispatch": "gray",
    Cancelled: "rose",
    Shipped: "emerald",
  } as { [key: string]: string };

  return (
    <TabGroup className="mt-6">
      <TabList>
        <Tab>Summary</Tab>
        <Tab>Purchases</Tab>
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
          <div className="mt-6 bg-gray-900 text-gray-300">
            <Card className="overflow-y-scroll">
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
