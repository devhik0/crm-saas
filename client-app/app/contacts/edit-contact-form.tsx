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
import { Label } from "@/components/ui/label";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function EditContactForm() {
  return (
    <Dialog>
      <DialogTrigger>
        <PencilSquareIcon className="size-4 text-orange-600" />
      </DialogTrigger>
      <DialogContent className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Contact</DialogTitle>
          <DialogDescription>Make changes to your Contact here. Click save when you done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              placeholder="John Doe"
              // value={item.owner}
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" placeholder="johndoe" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-blue-600">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
