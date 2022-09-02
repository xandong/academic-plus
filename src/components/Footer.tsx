import Link from "next/link";
import Logo from "./Logo";

import { ArrowUp } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="flex justify-around items-baseline w-full p-8">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Link href="#">
        <a>
          <ArrowUp
            size={32}
            weight="bold"
            className="p-1 bg-zinc-800 text-zinc-50 border-zinc-800 border-2
            hover:p-px hover:shadow-lg hover:bg-zinc-50 hover:text-zinc-800 
            shadow-md rounded-md
            animate-bounce transition-all duration-500"
          />
        </a>
      </Link>
    </footer>
  );
}
