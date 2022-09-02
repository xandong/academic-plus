import { ReactNode } from "react";

interface IMainProps {
  children: ReactNode;
}

export default function Main({ children }: IMainProps) {
  return (
    <main
      className="min-h-[90vh] flex-1 py-10 md:px-40 sm:px-8 bg-white
    flex justify-center flex-col items-center gap-10 
    relative"
    >
      {children}
    </main>
  );
}
