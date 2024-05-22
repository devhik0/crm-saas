import { createClient } from "@/utils/supabase/server";
import TicketTable from "./ticket-table";

export default async function Tickets({ searchParams }: { searchParams: { state?: "open" | "waiting" | "solved" } }) {
  const supabase = createClient();
  const { data: helpTickets } = await (await supabase).from("helpTickets").select("*");

  if (!helpTickets || helpTickets.length === 0) return;

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
