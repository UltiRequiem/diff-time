/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, PageProps, tw } from "../client_deps.ts";
import { Handlers } from "../server_deps.ts";
import {
  Button,
  DateMessage,
  DiffTimeHead,
  Footer,
} from "../components/mod.ts";
import ShareButton from "../islands/ShareButton.tsx";

interface IndexProps {
  date: string;
}

export const handler: Handlers<IndexProps> = {
  GET(request, context) {
    const url = new URL(request.url);

    const date = url.searchParams.get("date") ?? "";

    return context.render({ date });
  },
};

export default function IndexPage(props: PageProps<IndexProps>) {
  return (
    <>
      <DiffTimeHead />
      <div class={tw`h-screen bg-gray-700 text-center`}>
        <Body date={props.data.date} />
        <Footer />
      </div>
    </>
  );
}

function Body({ date }: IndexProps) {
  return (
    <>
      <main
        class={tw
          `flex items-center justify-center flex-col md:gap-12 gap-24 text-center pt-12 md:pt-30`}
      >
        <h1
          class={tw
            `font-bold leading-7 text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600 pb-4`}
        >
          How much time is left/gone?
        </h1>
        <form class={tw`flex flex-col gap-5`}>
          <label>
            <input
              class={tw`w-96 h-14 p-3 rounded-md shadow-md`}
              type="date"
              name="date"
              value={date}
            />
          </label>
          <Button />
        </form>
        {date && (
          <>
            <DateMessage date={date} />
            <ShareButton />
          </>
        )}
      </main>
    </>
  );
}
