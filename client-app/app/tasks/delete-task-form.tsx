import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "@radix-ui/react-icons";
import { Task } from "./page";
import { deleteTask } from "./taskActions";

export default function DeleteTaskForm({ item }: { item: Task }) {
  return (
    <Dialog>
      <DialogTrigger>
        <TrashIcon className="size-5 text-red-600" />
      </DialogTrigger>
      <DialogContent className="border-none bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this task from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form action={deleteTask}>
            <Input type="hidden" value={item._id} name="task_id" />
            <Button className="bg-red-600">Delete</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
