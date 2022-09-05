import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  title: string;
  img: string;
  imgDark?: string;
  alt: string;
  rote: string;
}

export default function CardItem({
  title,
  img,
  alt,
  rote = "/",
}: CardItemProps) {
  return (
    <li className="mb-6">
      <Link href={rote}>
        <a
          className="w-[240px] h-[240px] bg-zinc-white dark:bg-zinc-700 border dark:border-zinc-600 shadow-md hover:shadow-xl rounded-lg flex flex-col gap-6 justify-center items-center transition-all
        hover:scale-105 focus:scale-105"
        >
          <Image src={img} alt={alt} width="183px" height="96px" />
          <h2 className="text-xl font-medium px-2">{title}</h2>
        </a>
      </Link>
    </li>
  );
}
