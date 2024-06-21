import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...arguments_: ClassValue[]) {
  return twMerge(clsx(arguments_));
}
