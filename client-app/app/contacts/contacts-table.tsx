/* eslint-disable tailwindcss/no-custom-classname */
import { TableCaption, TableHeader } from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@tremor/react";
import Link from "next/link";
import DeleteContactForm from "./delete-contact-form";
import EditContactForm from "./edit-contact-form";

export default async function ContactsTable() {
  const supabase = createClient();
  const { data: contacts } = await (await supabase).from("contacts").select("*");

  if (!contacts) return <>Loading...</>;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      </TableHeader>
      <TableBody>
        {contacts.map((item) => (
          <TableRow key={item.owner}>
            <TableCell className="text-center">{item.owner}</TableCell>
            <TableCell className="text-center">{item.status}</TableCell>
            <TableCell className="text-center">{item.region}</TableCell>
            <TableCell className="text-center">{item.capacity}</TableCell>
            <TableCell className="text-center">{item.costs}</TableCell>
            <TableCell className="text-center">{item.lastEdited}</TableCell>
            <TableCell className="flex flex-row items-center justify-center gap-8">
              <Link href={`/contacts/call`}>
                <PhoneIcon className="size-4 text-emerald-600" />
              </Link>
              <EditContactForm />
              <DeleteContactForm />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
