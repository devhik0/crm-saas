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

export default function AddContactForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600">Add Contact</Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-gray-100 dark:bg-gray-900 dark:text-gray-300 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add contact</DialogTitle>
          <DialogDescription>Add contact here and click save when you re done.</DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" placeholder="pedro.duarte@gmail.com" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Company
              </Label>
              <Input id="company" placeholder="Acme GmBH" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600">
              Add Contact
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
