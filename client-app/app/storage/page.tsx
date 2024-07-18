import { Button } from "@/components/ui/button";
import { ArrowDownIcon, DocumentIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Card } from "@tremor/react";

export default async function Storage() {
  // todo: add file preview here

  return (
    <div>
      <div className="flex flex-row items-center justify-between gap-2">
        <h3 className="p-2 text-lg">Here is your files</h3>
        <Button className="mr-2 bg-blue-600">
          <PlusIcon className="size-4" />
        </Button>
      </div>
      <div className="flex w-full flex-col gap-2 px-2 py-4">
        <Card className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <DocumentIcon className="size-5" />
            <p>Sales_Reports.xls</p>
          </div>
          <div className="flex w-1/2 flex-row items-center justify-between gap-4">
            <span>12.05.2018</span>
            <span>10:03</span>
            <span>3 MB</span>
            <span>Worksheet</span>
            <ArrowDownIcon className="size-4" />
            <TrashIcon className="ml-2 size-4 text-red-600" />
          </div>
        </Card>
        <Card className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <DocumentIcon className="size-5" />
            <p>Visitors.pdf</p>
          </div>
          <div className="flex w-1/2 flex-row items-center justify-between gap-4">
            <span>16.04.2016</span>
            <span>20:22</span>
            <span>1 MB</span>
            <span>Document</span>
            <ArrowDownIcon className="size-4" />
            <TrashIcon className="ml-2 size-4 text-red-600" />
          </div>
        </Card>
        <Card className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <DocumentIcon className="size-5" />
            <p>Contacts.txt</p>
          </div>
          <div className="flex w-1/2 flex-row items-center justify-between gap-4">
            <span>03.09.2024</span>
            <span>21.43</span>
            <span>103 kB</span>
            <span>Text</span>
            <ArrowDownIcon className="size-4" />
            <TrashIcon className="ml-2 size-4 text-red-600" />
          </div>
        </Card>
        <Card className="h-[60vh] px-4">File preview here</Card>
      </div>
    </div>
  );
}
