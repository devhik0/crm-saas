import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="m-6 mt-10 flex w-full flex-col items-center justify-center gap-4 border-red-400 p-4">
      <Image src={`/404.png`} width={600} height={600} alt="404" />
      <p>There is no page like that</p>
      <span>
        try{" "}
        <Link href="/" className="text-blue-400">
          home
        </Link>
      </span>
    </div>
  );
}
