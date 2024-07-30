/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Tables } from "@/utils/supabase/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dataFormatter = (number: number | bigint) => `$${Intl.NumberFormat("us").format(number).toString()}`;

export const numberFormatter = (value: number | bigint) => Intl.NumberFormat("us").format(value).toString();

export const valueFormatter = (number: number | bigint) => Intl.NumberFormat("us").format(number).toString();

export const percentageFormatter = (value: number) =>
  `${Intl.NumberFormat("us")
    .format(value * 100)
    .toString()
    .slice(0, 4)}%`;

export function sumArray(array: Tables<"visitors">[], metric: string) {
  // @ts-expect-error
  return array.reduce((accumulator, currentValue) => accumulator + currentValue[metric], 0);
}
