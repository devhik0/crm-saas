import { Button } from "@/components/ui/button";
import { authorize, listLabels } from "./listLabels";

export default async function Inbox() {
  const threads = await authorize().then(listLabels).catch(console.error);

  return (
    <div className="w-[25%]">
      Inbox <Button>Sync</Button>
      <div>
        {threads.map((thread) => (
          <p className="m-2 h-[60px] overflow-hidden bg-gray-700 p-2" key={thread.id}>
            {thread.snippet}
          </p>
        ))}
      </div>
    </div>
  );
}
