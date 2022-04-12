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
      <p
        class={tw
          `text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-200 to-blue-600 font-bold pb-4`}
      >
        {message}
      </p>
    </div>
  );
}
