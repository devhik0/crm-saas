import { Card } from "@/components/ui/card";
import { DocumentIcon } from "@heroicons/react/24/outline";

export default async function Storage() {
  return (
    <div>
      <h3 className="p-2 text-lg">Here is your files</h3>
      <div className="flex w-full flex-col gap-2 px-2 py-4">
        <Card className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <DocumentIcon className="size-5" />
            <p>Sales_Reports.xls</p>
          </div>
          <div className="flex w-1/3 flex-row items-center gap-4">
            <span>12.05.2018</span>
            <span>10:03</span>
            <span>3 MB</span>
            <span>Worksheet</span>
          </div>
        </Card>
        <Card className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <DocumentIcon className="size-5" />
            <p>Visitors.pdf</p>
          </div>
          <div className="flex w-1/3 flex-row items-center gap-4">
            <span>16.04.2016</span>
            <span>20:22</span>
            <span>1 MB</span>
            <span>Document</span>
          </div>
        </Card>
        <Card className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-4">
            <DocumentIcon className="size-5" />
            <p>Contacts.txt</p>
          </div>
          <div className="flex w-1/3 flex-row items-center gap-4">
            <span>03.09.2024</span>
            <span>21.43</span>
            <span>103 kB</span>
            <span>Text</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
