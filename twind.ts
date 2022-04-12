import { IS_BROWSER } from "./client_deps.ts";
import { setup, tw } from "https://esm.sh/twind@0.16.16";

if (IS_BROWSER) {
  setup();
}

export { setup, tw };
