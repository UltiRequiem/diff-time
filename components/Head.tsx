/** @jsx h */
import { h, Head } from "../client_deps.ts";

export function DiffTimeHead() {
  const titleApp = "Diff Time";

  const [questionOne, questionTwo, ...rest] = [
    "How much time since",
    "How much time until",
    "How much time is left",
    "How much time is left until",
  ];

  return (
    <Head>
      <title>{titleApp}</title>

      <meta
        name="description"
        content={`${titleApp}, ${questionOne} X? ${questionTwo} X?`}
      />
      <meta name="author" content="Eliaz Bobadilla" />
      <meta
        name="keywords"
        content={[questionOne, questionTwo, ...rest].join(", ")}
      />
    </Head>
  );
}
