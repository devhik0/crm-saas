import { Card } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full bg-gray-900 p-4 text-center">
      <Card>
        <div className="absolute right-0 top-0 pr-3 pt-3">
          <button
            type="button"
            className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Welcome to your workspace
        </h3>
        <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Pick a tab from left or click below to continue on your workflow.
        </p>
        <div className="mt-6 flex items-center space-x-5">
          <Link href={`/dashboard`}>
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Get started
            </button>
          </Link>
        </div>
      </Card>
      <div className="">
        <Image className="mx-auto bg-gray-900" src="/welcome.png" width={800} height={200} alt="welcome" />
      </div>
    </div>
  );
}
