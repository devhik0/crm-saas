"use client";

import { dataFormatter } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/utils/supabase/types";
import { AreaChart, Card } from "@tremor/react";
import { useEffect, useState } from "react";

export default function Reports() {
  // todo: continue for other categories like profit, customers
  const supabase = createClient();

  const [categories, setCategories] = useState<Tables<"categories">[]>([]);
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    const { data: categories1 } =
      (await supabase.from("categories").select("*").order("metric", {
        ascending: true,
      })) || [];
    setCategories(categories1 as Tables<"categories">[]);
    setLoading(true);
  };

  // const getProfits = async

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loading) return;
  console.log("CAT: ", categories[0].metricPrev);
  const chartData = [
    { date: "Jan 23", Sales: categories[0].metricPrev.slice(2) },
    { date: "Jun 24", Sales: categories[0].metric.slice(2) },
  ];

  return (
    <Card className="mt-10 h-full">
      <AreaChart
        className="h-80"
        data={chartData}
        index="date"
        categories={["Sales"]}
        colors={["emerald"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        showYAxis={false}
      />
    </Card>
  );
}
