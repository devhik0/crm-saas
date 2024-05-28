import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getTaskCategories } from "./taskActions";

export default async function TaskFilters() {
  const taskCategories = await getTaskCategories();

  if (!taskCategories) return <>Loading data...</>;

  return (
    <div className="my-2 flex flex-col items-center gap-2 rounded-md bg-gray-800 p-3 ">
      <h4 className="text-sm">Category</h4>
      <RadioGroup defaultValue="" className="flex flex-row gap-2 text-sm">
        {taskCategories.map((cat) => {
          return (
            <div key={cat._id} className="flex items-center space-x-2">
              <RadioGroupItem value={cat._id} id={cat.name} />
              <Label htmlFor={cat.name}>{cat.name}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}
