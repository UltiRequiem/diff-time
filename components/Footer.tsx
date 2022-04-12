/** @jsx h */
import { h, tw } from "../client_deps.ts";

export function Footer() {
  return (
    <footer class={tw`text-gray-500`}>
      <address>
        <a
          class={tw`text-2xl hover:text-blue-700`}
          href="https://ultirequiem.com"
        >
          Eliaz Bobadilla
        </a>
      </address>

      <a
        class={tw`hover:text-green-500 text-xl`}
        href="https://github.com/UltiRequiem/ulticlock"
      >
        Source Code
      </a>
    </footer>
  );
}
