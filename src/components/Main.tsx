import { ReactNode } from "react";

interface IMainProps {
  title: string;
  children: ReactNode;
}

export default function Main({ title, children }: IMainProps) {
  return (
    <main
      className=" flex-1 min-h-[90vh] md:py-36 sm:py-32 py-24 md:px-20 sm:px-8 px-2
      flex flex-col items-center gap-10 
    bg-white dark:bg-black
      relative"
    >
      <h1 className="text-center md:text-4xl sm:text-3xl text-2xl text-primary-500 dark:text-primary-200 font-bold ">
        {title}
      </h1>
      {children}
    </main>
  );
}
