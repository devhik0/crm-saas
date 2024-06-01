import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
import { DotFilledIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
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
          <h3>Tickets</h3>
          <p>Overview of your all tickets</p>
        </div>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow>
            <TableHead>Requester</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Asssignee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last message</TableHead>
            <TableHead>Actions</TableHead>
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
                      <TableCell>
                        <Link href={`/support/tickets/${item.id}`}>{item.requester}</Link>
                      </TableCell>
                      <TableCell className="text-center">{item.subject}</TableCell>
                      <TableCell className="text-center">{item.assignee}</TableCell>
                      <TableCell className="flex flex-row items-center gap-2">
                        <DotFilledIcon className={ticketColors[item.status as string]} />
                        <span className={ticketColors[item.status as string]}>{item.status}</span>
                      </TableCell>
                      <TableCell className="text-center">{item.lastEdited}</TableCell>
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
                    <TableCell>
                      <Link href={`/support/tickets/${item.id}`}>{item.requester}</Link>
                    </TableCell>
                    <TableCell>{item.subject}</TableCell>
                    <TableCell>{item.assignee}</TableCell>
                    <TableCell className="flex flex-row items-center gap-2">
                      <DotFilledIcon className={ticketColors[item.status as string]} />
                      <span className={ticketColors[item.status as string]}>{item.status}</span>
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
