"use client";

import { Button } from "@/components/ui/button";
import { dataFormatter, valueFormatter } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/utils/supabase/types";
import { DocumentIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AreaChart, Card } from "@tremor/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Reports() {
  const supabase = createClient();

  const [categories, setCategories] = useState<Tables<"categories">[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    const { data: categories1 } =
      (await supabase.from("categories").select("*").order("metric", { ascending: true })) || [];
    setCategories(categories1 as Tables<"categories">[]);
    setLoading(false);
  };

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

  return (
    <div className="m-4">
      <h2>Your reports</h2>
      <Card className="mt-4 h-full p-2">
        <div className="flex flex-row items-center justify-between gap-2">
          <h3>Sales overview</h3>
          <Link href={`/storage`}>
            <DocumentIcon className="size-5" />
          </Link>
        </div>
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
        <div className="flex flex-row items-center justify-between gap-2">
          <h3>Profits overview</h3>
          <Link href={`/storage`}>
            <DocumentIcon className="size-5" />
          </Link>
        </div>
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
        <div className="flex flex-row items-center justify-between gap-2">
          <h3>Customers overview</h3>
          <Link href={`/storage`}>
            <DocumentIcon className="size-5" />
          </Link>
        </div>
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

      <div className="mt-6 flex flex-col items-center gap-2 rounded-lg border-2 border-dashed border-gray-700 p-4">
        <p>Add another chart</p>
        <Button variant={"outline"} className="border-gray-700">
          <PlusIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
