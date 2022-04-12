/** @jsx h */
import { h, tw } from "../client_deps.ts";
import { dateDiffInDays, dateFmt } from "../utils/mod.ts";

export interface DateMessageProps {
  date: string;
}

export function DateMessage({ date }: DateMessageProps) {
  const dateObj = new Date(date);

  const diff = dateDiffInDays(dateObj);

  const formattedDate = dateFmt.format(dateObj);

  const message = `${Math.abs(diff)} days ${
    diff >= 0 ? "left for" : "passed since"
  } ${formattedDate}.`;

  return (
    <div>
      <p class={tw`text-xl md:text-6xl text-gray-200 font-bold`}>{message}</p>
    </div>
  );
}
