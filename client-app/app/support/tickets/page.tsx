import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import TicketTable, { Ticket } from "./ticket-table";

export default async function Tickets({ searchParams }: { searchParams: { state?: "open" | "waiting" | "solved" } }) {
  const helpTickets = (await fetchQuery(api.helpTickets.get)) as Ticket[];
  return (
    <div>
      {searchParams.state ? (
        searchParams.state[0].toUpperCase() + searchParams.state.slice(1)
      ) : (
        <p className="ml-2">All ({helpTickets.length})</p>
      )}
      <TicketTable status={searchParams.state} />
    </div>
  );
}
