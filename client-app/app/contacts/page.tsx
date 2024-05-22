/* eslint-disable tailwindcss/no-custom-classname */
// 'use client';
import { Button } from "@/components/ui/button";
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
import { createClient } from "@/utils/supabase/server";
import { PencilSquareIcon, PhoneIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { kv } from "@vercel/kv";
import Link from "next/link";

type Contact = {
  _id: string;
  owner: string;
  status: string;
  costs: string;
  region: string;
  capacity: string;
  lastEdited: string;
};

export default async function Contacts() {
  const supabase = createClient();
  const { data: contacts } = await (await supabase).from("contacts").select("*");

  console.log("contacts: ", contacts);

  if (!contacts) return <>Loading...</>;

  await kv.hset("Data", contacts[0]);
  const myData = (await kv.hgetall("Data")) as (typeof contacts)[0];
  // console.log("My data: ", myData);

  const cache = false; // acts as response cache

  return (
    <div className="mt-10 h-full bg-gray-900 p-2">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Contacts</h3>6
          total
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600">Add Contact</Button>
          </DialogTrigger>
          <DialogContent className="border-none bg-gray-900 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add contact</DialogTitle>
              <DialogDescription>Add contact here and click save when you re done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" placeholder="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="pedro.duarte@gmail.com" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Company
                </Label>
                <Input id="company" placeholder="Acme GmBH" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-600">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
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
          {cache ? (
            <TableRow key={myData.owner}>
              <TableCell className="text-center">{myData.owner}</TableCell>
              <TableCell className="text-center">{myData.status}</TableCell>
              <TableCell className="text-center">{myData.region}</TableCell>
              <TableCell className="text-center">{myData.capacity}</TableCell>
              <TableCell className="text-center">{myData.costs}</TableCell>
              <TableCell className="text-center">{myData.lastEdited}</TableCell>
              <TableCell className="text-center">
                <Link href={`/contacts/call`}>
                  <Button>Call</Button>
                </Link>
              </TableCell>
            </TableRow>
          ) : (
            contacts.map((item: Contact) => (
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
                  <Dialog>
                    <DialogTrigger>
                      <PencilSquareIcon className="size-4 text-orange-600" />
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Contact</DialogTitle>
                        <DialogDescription>
                          Make changes to your Contact here. Click save when you done.
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
                  <Dialog>
                    <DialogTrigger>
                      <TrashIcon className="size-4 text-red-600" />
                    </DialogTrigger>
                    <DialogContent className="border-none bg-gray-900">
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. Are you sure you want to permanently delete this contact from
                          your list?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button type="submit" className="bg-red-500 text-gray-200">
                          Delete
                        </Button>
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
