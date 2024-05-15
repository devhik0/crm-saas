import { api } from "@/convex/_generated/api";
import { Badge, Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { fetchQuery } from "convex/nextjs";

type Transaction = {
  transactionID: string;
  user: string;
  item: string;
  status: string;
  amount: string;
  link: string;
};

export default async function Transactions() {
  const transactions = (await fetchQuery(api.transactions.get)) as Transaction[];

  const colors = {
    "Ready for dispatch": "gray",
    Cancelled: "rose",
    Shipped: "emerald",
  } as { [key: string]: string };

  return (
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
  );
}
