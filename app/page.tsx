import Link from "next/link";

export default function Home() {
  return (
    <>
      Welcome to your Dashboard, please{" "}
      <Link href={`/dashboard`}>
        <button className="bg-gray-600 p-4">Login</button>
      </Link>
    </>
  );
}
