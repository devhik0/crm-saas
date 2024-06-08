import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { createClient } from "@/utils/supabase/server";
import { DotFilledIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import Link from "next/link";

export type Ticket = {
  requester: string;
  subject: string;
  assignee: string;
  status: string;
  lastEdited: string;
  id: number;
};
export default async function TicketTable({ status }: { status?: "open" | "waiting" | "solved" }) {
  const supabase = createClient();
  const { data: helpTickets } = await (await supabase).from("helpTickets").select("*");

  if (!helpTickets) return;

  return (
    <div className="mt-1 bg-gray-900 p-2">
      <div className=" sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Tickets</h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of your all tickets
          </p>
        </div>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Requester
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Subject
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Asssignee
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Status
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Last message
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {status
            ? helpTickets
                .filter((t) => t.status === status)
                .map((item) => {
                  const ticketColors = {
                    open: "text-center text-blue-600",
                    waiting: "text-center text-orange-600",
                    solved: "text-center text-green-600",
                  } as { [key: string]: string };

                  return (
                    <TableRow key={item.requester}>
                      <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        <Link href={`/support/tickets/${item.id}`}>{item.requester}</Link>
                      </TableCell>
                      <TableCell>{item.subject}</TableCell>
                      <TableCell>{item.assignee}</TableCell>
                      <TableCell className="flex flex-row items-center gap-2">
                        <DotFilledIcon className={ticketColors[item.status]} />
                        <span className={ticketColors[item.status]}>{item.status}</span>
                      </TableCell>
                      <TableCell>{item.lastEdited}</TableCell>
                      <TableCell className="flex items-center justify-center">
                        <Popover>
                          <PopoverTrigger>
                            <DotsHorizontalIcon className="size-5" />
                          </PopoverTrigger>
                          <PopoverContent className=" flex w-full flex-col gap-2 border-gray-800 bg-gray-900">
                            <Link href={`/support/tickets/${item.id}`}>
                              <span>View Details</span>
                            </Link>
                            <span>Change Status</span>
                            <span>Mark as Read</span>
                            <span>Remove</span>
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                    </TableRow>
                  );
                })
            : helpTickets.map((item) => {
                const ticketColors = {
                  open: "text-center text-blue-600",
                  waiting: "text-center text-orange-600",
                  solved: "text-center text-green-600",
                } as { [key: string]: string };

                return (
                  <TableRow key={item.requester}>
                    <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      <Link href={`/support/tickets/${item.id}`}>{item.requester}</Link>
                    </TableCell>
                    <TableCell>{item.subject}</TableCell>
                    <TableCell>{item.assignee}</TableCell>
                    <TableCell className="flex flex-row items-center gap-2">
                      <DotFilledIcon className={ticketColors[item.status]} />
                      <span className={ticketColors[item.status]}>{item.status}</span>
                    </TableCell>
                    <TableCell>{item.lastEdited}</TableCell>
                    <TableCell className="flex items-center justify-center">
                      <Popover>
                        <PopoverTrigger>
                          <DotsHorizontalIcon className="size-5" />
                        </PopoverTrigger>
                        <PopoverContent className=" flex w-full flex-col gap-2 border-gray-800 bg-gray-900">
                          <Link href={`/support/tickets/${item.id}`}>
                            <span>View Details</span>
                          </Link>
                          <span>Change Status</span>
                          <span>Mark as Read</span>
                          <span>Remove</span>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
    </div>
  );
}
