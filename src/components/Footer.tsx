import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex w-full p-8">
      <Link href="#">
        <a>
          <Logo />
        </a>
      </Link>
    </footer>
  );
}
