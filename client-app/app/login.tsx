"use client";

import Link from "next/link";

export default function Login() {
  // { login }: { login: boolean /* //todo: change later */ }
  return (
    <>
      Welcome to your Dashboard, please{" "}
      <Link href={`/dashboard`}>
        <button
          className="bg-gray-600 p-4"
          // onClick={() => {
          //   login = true;
          // }}
        >
          Login
        </button>
      </Link>
    </>
  );
}
