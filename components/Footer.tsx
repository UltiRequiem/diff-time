/** @jsx h */
import { h, tw } from "../client_deps.ts";

export function Footer() {
  const link = tw`mr-4 hover:underline md:mr-6`;

  const year = new Date().getFullYear();

  return (
    <footer
      class={tw
        `rounded-t-lg shadow fixed bottom-0 h-16 w-full flex items-center justify-center space-x-12 md:justify-between md:p-6 bg-gray-800 text-gray-400`}
    >
      <div>
        <a href="https://ultirequiem.com" class={link}>
          © {year} Eliaz Bobadilla
        </a>
      </div>

      <ul class={tw`flex flex-wrap items-center mt-3 text-sm sm:mt-0`}>
        <li>
          <a href="https://github.com/UltiRequiem/diff-time" class={link}>
            Source Code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/UltiRequiem/diff-time/blob/main/license"
            class={link}
          >
            License
          </a>
        </li>
      </ul>
    </footer>
  );
}
