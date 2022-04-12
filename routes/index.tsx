/** @jsx h */
import { h, PageProps, tw } from "../client_deps.ts";
import { Handlers } from "../server_deps.ts";
import { Button, DateMessage, Footer } from "../components/mod.ts";

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

export default function Page(props: PageProps<IndexProps>) {
  const { date } = props.data;

  return (
    <div
      class={tw
        `h-screen bg-red-300 flex items-center justify-center flex-col gap-5 text-center`}
    >
      <form class={tw`flex flex-col gap-3`}>
        <input type="date" name="date" value={date} />
        <Button />
      </form>
      {date && <DateMessage date={date} />}
      <Footer />
    </div>
  );
}
