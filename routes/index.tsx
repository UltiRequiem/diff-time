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
      <Body date={props.data.date} />
    </>
  );
}

function Body({ date }: IndexProps) {
  return (
    <main
      class={tw
        `h-screen bg-red-300 flex items-center justify-center flex-col gap-9 text-center`}
    >
      <h1 class={tw`text-xl font-bold leading-7 text-gray-900 sm:text-3xl`}>
        How (much is missing/long ago) (was/will) be a date? 🤔
      </h1>
      <form class={tw`flex flex-col gap-5`}>
        <input
          class={tw`w-64 h-14 p-3 rounded-md shadow-md`}
          type="date"
          name="date"
          value={date}
        />
        <Button />
      </form>
      {date && <DateMessage date={date} />}
      <Footer />
    </main>
  );
}
