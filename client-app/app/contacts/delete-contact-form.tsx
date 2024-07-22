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
import { TrashIcon } from "@heroicons/react/24/outline";
export default function DeleteContactForm() {
  return (
    <Dialog>
      <DialogTrigger>
        <TrashIcon className="size-4 text-red-600" />
      </DialogTrigger>
      <DialogContent className="border-none bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently delete this contact from your list?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="bg-gray-600 text-gray-200">Cancel</Button>
          <Button type="submit" className="bg-red-500 text-gray-200">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
