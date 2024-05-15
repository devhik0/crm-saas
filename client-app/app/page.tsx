import Image from "next/image";

export default function Home() {
  return (
    <div className="size-full bg-gray-900 p-4 text-center">
      <h3 className="text-lg">Welcome to Customer Nexus, please pick a tab from left to continue on your workflow.</h3>
      <div className="">
        <Image className="mx-auto bg-gray-900" src="/welcome.png" width={800} height={200} alt="welcome" />
      </div>
    </div>
  );
}
