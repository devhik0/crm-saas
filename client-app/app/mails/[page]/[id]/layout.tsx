import {
  ArchiveBoxArrowDownIcon,
  ArrowLeftIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  NoSymbolIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

export default function DetailsLayout({ children, params }: { children: ReactNode; params: { page: string } }) {
  return (
    <div className="flex size-full flex-col gap-1 bg-gray-900">
      <div className="flex w-full items-center justify-between gap-2 bg-gray-800">
        <div className="flex flex-row justify-center gap-6 bg-gray-700 p-2">
          <ArchiveBoxArrowDownIcon className="size-5" />
          <NoSymbolIcon className="size-5" />
          <ArrowUturnLeftIcon className="size-5" />
          <ArrowUturnRightIcon className="size-5" />
          <TrashIcon className="size-5" />
        </div>
        <Link href={`/mails/${params.page}`}>
          <ArrowLeftIcon className="mr-2 size-5" />
        </Link>
      </div>
      {children}
    </div>
  );
}
