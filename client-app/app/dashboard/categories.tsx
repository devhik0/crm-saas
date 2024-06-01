import { createClient } from "@/utils/supabase/server";

export default async function Categories() {
  const supabase = createClient();
  const { data: categories } = await (await supabase).from("categories").select("*");

  if (!categories) return <>Loading data...</>;

  return (
    <div>
      {categories.map((cat, idx) => {
        return <div key={idx}>{cat.title}</div>;
      })}
    </div>
  );
}
