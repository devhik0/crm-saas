import { createClient } from "@/utils/supabase/server";
import { ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Ticket } from "../ticket-table";

export default async function TicketDetails({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: helpTickets } = await (await supabase).from("helpTickets").select("*");

  if (!helpTickets) return;

  const data = helpTickets.find((ticket) => ticket.id.toString() === params.id) as Ticket;

  const ticketId = params.id;
  return (
    <div className="m-4 rounded-md bg-gray-800 p-2">
      <div className="flex w-full flex-row justify-between">
        <h3 className="mb-2">Ticket Details for {ticketId}</h3>
        <Link href={`/support/tickets`}>
          <ExitIcon className="size-6" />
        </Link>
      </div>
      <div className="flex h-full flex-col gap-2">
        <div>Requester: {data.requester}</div>
        <div>Subject: {data.subject}</div>
        <div>Assignee: {data.assignee}</div>
        <div>Status: {data.status}</div>
        <div>Last Edited: {data.lastEdited}</div>
      </div>
    </div>
  );
}
