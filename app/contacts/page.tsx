/* eslint-disable tailwindcss/no-custom-classname */
// 'use client';
import { Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { kv } from "@vercel/kv";
import Link from "next/link";

const data = [
  {
    owner: "John Doe",
    status: "live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "99%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    owner: "Jane Smith",
    status: "live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "80%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    owner: "Mike Johnson",
    status: "live",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    owner: "Alice Brown",
    status: "live",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    owner: "David Clark",
    status: "inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40%",
    lastEdited: "25/09/2023 16:20",
  },
];

export default async function Contacts() {
  await kv.hset("Data", data[0]);
  const myData = (await kv.hgetall("Data")) as (typeof data)[0];
  console.log("My data: ", myData);

  const cache = false; // acts as response cache

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Contacts</h3>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-1 leading-6">
            Overview of all registered workspaces within your organization.
          </p>
        </div>
        <button
          type="button"
          className="rounded-tremor-small bg-tremor-brand text-tremor-default text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis mt-4 w-full whitespace-nowrap px-2 py-1 font-medium sm:mt-0 sm:w-fit"
        >
          Add Customer
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-tremor-border dark:border-dark-tremor-border border-b">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Customer
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Status
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Region
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Capacity
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-right">
              Costs
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-right">
              Last called
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-right">
              Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cache ? (
            <TableRow key={myData.owner}>
              <TableCell>{myData.owner}</TableCell>
              <TableCell>{myData.status}</TableCell>
              <TableCell>{myData.region}</TableCell>
              <TableCell>{myData.capacity}</TableCell>
              <TableCell className="text-right">{myData.costs}</TableCell>
              <TableCell className="text-right">{myData.lastEdited}</TableCell>
              <TableCell className="text-right">
                <Link href={`/contacts/call`}>
                  <Button variant="primary" size="xs">
                    Call
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.owner}>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/contacts/call`}>
                    <Button variant="primary" size="xs">
                      Call
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
}
