import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full bg-gray-900 p-4 text-center">
      <Card>
        <div className="absolute right-0 top-0 pr-3 pt-3">
          <Button className="bg-gray-800">X</Button>
        </div>
        <h3>Welcome to your workspace</h3>
        <p>Pick a tab from left or click below to continue on your workflow.</p>
        <div className="mt-6 flex items-center space-x-5">
          <Link href={`/dashboard`}>
            <Button>Get started</Button>
          </Link>
        </div>
      </Card>
      <div className="">
        <Image className="mx-auto bg-gray-900" src="/welcome.png" width={800} height={200} alt="welcome" />
      </div>
    </div>
  );
}
