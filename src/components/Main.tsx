import { ReactNode } from "react";

interface IMainProps {
  title: string;
  children: ReactNode;
}

export default function Main({ title, children }: IMainProps) {
  return (
    <main
      className=" flex-1 min-h-[90vh] md:py-20 sm:py-10 py-6 md:px-40 sm:px-8
      flex flex-col items-center gap-10 
    bg-white dark:bg-black
      relative"
    >
      <h1 className="text-center">Seja bem vindo de volta, {title}</h1>
      {children}
    </main>
  );
}
