/** @jsx h */
import { h, tw } from "../client_deps.ts";

export function Button() {
  return (
    <button
      type="submit"
      class={tw
        `text-white h-18 w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
    >
      Go!
    </button>
  );
}
