/* eslint-disable tailwindcss/no-custom-classname */
// 'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/convex/_generated/api";
import { Button, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { kv } from "@vercel/kv";
import { fetchQuery } from "convex/nextjs";
import Link from "next/link";

type Contact = {
  owner: string;
  status: string;
  costs: string;
  region: string;
  capacity: string;
  lastEdited: string;
};

export default async function Contacts() {
  // todo: continue here !

  const contacts = (await fetchQuery(api.contacts.get)) as Contact[];

  if (!contacts) return <>Loading...</>;

  await kv.hset("Data", contacts[0]);
  const myData = (await kv.hgetall("Data")) as (typeof contacts)[0];
  // console.log("My data: ", myData);

  const cache = false; // acts as response cache

  return (
    <div className="mt-10 h-full bg-gray-900 p-2">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Contacts</h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Your contacts
          </p>
        </div>
        <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-2 py-1 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis sm:mt-0 sm:w-fit dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
        >
          Add Customer
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
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
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Costs
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Last called
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
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
            contacts.map((item) => (
              <TableRow key={item.owner}>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/contacts/call`}>
                    <Button variant="primary" size="xs" className="mr-2">
                      Call
                    </Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger>Edit</DialogTrigger>
                    <DialogContent className="bg-gray-900 sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit customer</DialogTitle>
                        <DialogDescription>
                          Make changes to your customer here. Click save when you done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            className="col-span-3"
                            // value={item.owner}
                            // onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
