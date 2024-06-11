import { createClient } from "@/utils/supabase/server";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import Link from "next/link";
import DeleteContactForm from "./delete-contact-form";
import EditContactForm from "./edit-contact-form";

export default async function ContactsTable() {
  const supabase = createClient();
  const { data: contacts } = await (await supabase).from("contacts").select("*");

  if (!contacts) return <>Loading...</>;

  return (
    <Table className="mt-8">
      <TableHead>
        <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Name
          </TableHeaderCell>
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Email
          </TableHeaderCell>
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Company
          </TableHeaderCell>
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Title
          </TableHeaderCell>
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Status
          </TableHeaderCell>
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Last called
          </TableHeaderCell>
          <TableHeaderCell className="text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Actions
          </TableHeaderCell>
        </TableRow>
      </TableHead>
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
