/** @jsx h */
import { h, Head } from "../client_deps.ts";

export function DiffTimeHead() {
  const [titleApp, questionOne, questionTwo, ...rest] = [
    "Diff Time",
    "How much time since",
    "How much time until",
    "How much time is left",
    "How much time is left until",
    "How much time is left since",
  ];

  return (
    <Head>
      <title>{titleApp}</title>

      <meta
        name="description"
        content={`${titleApp}, ${questionOne} X? ${questionTwo} X?`}
      />
      <meta name="author" content="Eliaz Bobadilla" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content={[questionOne, questionTwo, ...rest].join(", ")}
      />
    </Head>
  );
}
