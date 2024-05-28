import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TaskSearch() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 rounded-md bg-gray-800 p-2 py-4">
      <Input type="search" placeholder="Search in tasks..." />
      <Button type="submit" className="bg-gray-700">
        Search
      </Button>
    </div>
  );
}
