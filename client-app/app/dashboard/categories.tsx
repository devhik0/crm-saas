import { api } from "@/convex/_generated/api";
import { BadgeDelta, Card, Flex, Grid, Metric, Text } from "@tremor/react";
import { fetchQuery } from "convex/nextjs";

type Category = {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: string;
};

export default async function Categories() {
  const categories = (await fetchQuery(api.categories.get)) as Category[];

  if (!categories) return <>Loading data...</>;

  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex justifyContent="start" alignItems="baseline" className="space-x-3 truncate">
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
