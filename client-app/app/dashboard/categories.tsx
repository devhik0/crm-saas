import { createClient } from "@/utils/supabase/server";
import { BadgeDelta, Card, Flex, Grid, Metric, Text } from "@tremor/react";

export default async function Categories() {
  const supabase = createClient();
  const { data: categories } = await (await supabase).from("categories").select("*");

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
