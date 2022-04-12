/** @jsx h */
import { h, PageProps } from "../client_deps.ts";
import { Handlers } from "../server_deps.ts";
import { DateMessage } from "../components/mod.ts";
import { tw } from "../twind.ts";

interface Data {
  date: string;
}

export const handler: Handlers<Data> = {
  GET(request, context) {
    const url = new URL(request.url);

    const date = url.searchParams.get("date") ?? "";

    return context.render({ date });
  },
};

export default function Page(props: PageProps<Data>) {
  const { date } = props.data;

  return (
    <div class={tw`font-sans`}>
      <form>
        <input type="date" name="date" value={date} />
        <button type="submit">Search</button>
      </form>
      {date && <DateMessage date={date} />}
    </div>
  );
}
