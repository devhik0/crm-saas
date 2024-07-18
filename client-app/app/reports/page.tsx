"use client";

import { dataFormatter, valueFormatter } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/utils/supabase/types";
import { AreaChart, Card } from "@tremor/react";
import { useEffect, useState } from "react";

export default function Reports() {
  // todo: continue for other categories like profit, customers
  const supabase = createClient();

  const [categories, setCategories] = useState<Tables<"categories">[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    const { data: categories1 } =
      (await supabase.from("categories").select("*").order("metric", {
        ascending: true,
      })) || [];
    setCategories(categories1 as Tables<"categories">[]);
    setLoading(false);
  };

  // const getProfits = async

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <>Loading data...</>;

  const sales = [
    { date: "Jan 23", Sales: categories[0].metricPrev.slice(2) },
    { date: "Jun 24", Sales: categories[0].metric.slice(2) },
  ];
  const profits = [
    { date: "Jan 23", Profits: categories[1].metricPrev.slice(2) },
    { date: "Jun 24", Profits: categories[1].metric.slice(2) },
  ];
  const customers = [
    { date: "Jan 23", Customers: categories[2].metricPrev.slice(2) },
    { date: "Jun 24", Customers: categories[2].metric.slice(2) },
  ];

  console.log("cat: ", categories);

  return (
    <div className="m-4">
      <h2>Your reports</h2>
      <Card className="mt-4 h-full p-2">
        <h3>Sales overview</h3>
        <AreaChart
          className="h-40"
          data={sales}
          index="date"
          categories={["Sales"]}
          colors={["emerald"]}
          valueFormatter={dataFormatter}
          autoMinValue
        />
      </Card>
      <Card className="mt-4 h-full p-2">
        <h3>Profits overview</h3>
        <AreaChart
          className="h-40"
          data={profits}
          index="date"
          categories={["Profits"]}
          colors={["indigo"]}
          valueFormatter={dataFormatter}
          autoMinValue
        />
      </Card>
      <Card className="mt-4 h-full p-2">
        <h3>Customers overview</h3>
        <AreaChart
          className="h-40"
          data={customers}
          index="date"
          categories={["Customers"]}
          colors={["rose"]}
          valueFormatter={valueFormatter}
          autoMinValue
        />
      </Card>
    </div>
  );
}
