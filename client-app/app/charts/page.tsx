"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/utils/supabase/types";
import { useEffect, useState } from "react";

export default function Charts() {
  const supabase = createClient();

  const [tickets, setTickets] = useState<Tables<"tickets">[]>([]);

  const getTickets = async () => {
    const { data: tickets1 } = (await supabase.from("tickets").select("*").order("Month", { ascending: true })) || [];
    if (!tickets1) throw "There is no tickets";
    setTickets(tickets1);
  };

  useEffect(() => {
    getTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Card className="h-full">
        <CardHeader>Ticket Monitoring</CardHeader>
        <h3>Tickets by Status</h3>
      </Card>
      <Card>
        <h3 className="text-lg font-medium">Sales by month (Qty)</h3>
        <p>
          {tickets.map((t, idx) => (
            <span key={idx}>{t.Completed.toFixed(2)}</span>
          ))}
        </p>
      </Card>
    </div>
  );
}
