import {createClient} from "@/utils/supabase/server";
import {Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow} from "@tremor/react";

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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
