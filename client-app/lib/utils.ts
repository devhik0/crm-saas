/* eslint-disable @typescript-eslint/ban-ts-comment */
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
    .toString()}%`;

export type Visitor = {
  Month: string;
  Visitors: number;
  "Page Views": number;
  "Bounce Rate": number;
  _id: string;
};
export function sumArray(array: Visitor[], metric: string) {
  // @ts-expect-error
  return array.reduce((accumulator, currentValue) => accumulator + currentValue[metric], 0);
}