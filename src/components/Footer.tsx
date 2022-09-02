import Link from "next/link";
import Logo from "./Logo";

import { ArrowUp } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center w-full p-8">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Link href="#">
        <a>
          <ArrowUp
            size={32}
            className="p-1 bg-zinc-700 rounded-md text-zinc-50 shadow-md
        hover:shadow-lg hover:bg-zinc-800 transition-colors duration-200"
          />
        </a>
      </Link>
    </footer>
  );
}
