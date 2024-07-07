"use client"

import { Card, ProgressBar } from "@tremor/react";

export default function Revenue(){
  return (
    <Card className="m-0 flex size-full flex-col gap-2 p-10">
                <h3 className="text-lg">Target Sales Revenue</h3>
                <p className="flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  <span>$12,699 &bull; {((12699 / 20000) * 100).toPrecision(3)}%</span> <span>$20,000</span>
                </p>
                <ProgressBar value={Number(((12699 / 20000) * 100).toPrecision(3))} color="fuchsia" className="mt-3" />
              </Card>
  )
}