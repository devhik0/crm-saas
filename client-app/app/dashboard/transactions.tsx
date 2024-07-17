import { createClient } from "@/utils/supabase/server";
import {
  Badge,
  Card,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

export default async function Transactions() {
  const supabase = createClient();
  const { data: transactions } = await (await supabase).from("transactions").select("*");

  if (!transactions) return;

  const colors = {
    "Ready for dispatch": "gray",
    Cancelled: "rose",
    Shipped: "emerald",
  } as { [key: string]: string };

  return (
    <div className="mt-6 bg-gray-900 text-gray-300">
      <Card className="overflow-y-scroll">
        <Flex justifyContent="between" className="space-x-2">
          <div className="flex flex-row gap-2 items-center">
            <Title>Purchases</Title>
            <Badge color="blue">{transactions.length}</Badge>
          </div>
        </Flex>
        <Text className="mt-2">Overview of this months purchases</Text>
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Item</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell className="text-right">Amount</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((item) => (
              <TableRow key={item.transactionID}>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>
                  <Badge color={colors[item.status]} size="xs">
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
