import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/utils/supabase/types";
import TicketTable from "./ticket-table";

export default async function Tickets({
  searchParams,
}: {
  searchParams: { status?: Tables<"helpTickets">["status"] };
}) {
  const supabase = createClient();
  const { data: helpTickets } = await (await supabase).from("helpTickets").select("*");

  if (!helpTickets || helpTickets.length === 0) return;

  return (
    <div>
      {searchParams.status ? (
        searchParams.status[0].toUpperCase() + searchParams.status.slice(1)
      ) : (
        <p className="ml-2">All ({helpTickets.length})</p>
      )}
      <TicketTable status={searchParams.status} />
    </div>
  );
}
