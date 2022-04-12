/** @jsx h */
import { h } from "../client_deps.ts";
import { dateFmt, dateDiffInDays } from "../utils/mod.ts";

export interface DateMessageProps {
  date: string;
}

export function DateMessage({ date }: DateMessageProps) {
  const dateObj = new Date(date);

  const diff = dateDiffInDays(dateObj);

  const formattedDate = dateFmt.format(dateObj);

  const message = `${diff} days ${
    diff >= 0 ? "from" : "ago"
  } ${formattedDate}.`;

  return <p>{message}</p>;
}
