import { MoonStars, Sun, User } from "phosphor-react";
import { useState } from "react";
import Link from "next/link";
import logoPNG from "../../public/logo.png";
import Image from "next/image";

export default function Header() {
  const [themeDark, setThemeDark] = useState(false);
  const [user, setUser] = useState("Alexandre");
  const [toggleMenuUser, setToggleMenuUser] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const isMinScreen = isBrowser()
    ? window.matchMedia("(min-width: 640px)").matches
    : true;

  function disconnected() {
    setUser("");
    console.log("Desconectado");
  }

  return (
    /* .card {
    backdrop-filter: blur(16px) saturate(149%);
    -webkit-backdrop-filter: blur(16px) saturate(149%);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
} */
    <header className="flex justify-between sm:justify-center items-center relative p-4 shadow border-b-2 bg-white border-zinc-100 z-10">
      <Image src={logoPNG} alt="Academic Plus" />

      <div className="relative sm:absolute right-0 sm:right-8 flex items-center sm:gap-8 gap-4 sm:pl-0 pl-2 text-[#007FFE]">
        <button
          onClick={() => setThemeDark(!themeDark)}
          className="p-1 bg-zinc-100 shadow rounded-full hover:scale-110 hover:shadow-md
          focus:scale-110
          focus:outline-zinc-300 transition-colors"
        >
          {themeDark ? <Sun size={24} /> : <MoonStars size={24} />}
        </button>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setToggleMenuUser(!toggleMenuUser)}
              className="p-1 bg-zinc-100 shadow rounded-full hover:scale-110 hover:shadow-md
              focus:scale-110
              focus:outline-zinc-300 transition-colors"
            >
              <div className="hover:scale-110 transition-all">
                {/*{ user.photo ? <img src={user.photo}> :  }*/}
                <User size={28} />
              </div>
            </button>
            {toggleMenuUser ? (
              <ul className="absolute top-12 right-0 flex flex-col gap-4 items-center rounded p-4 bg-zinc-50 border border-zinc-200 scale-100">
                <li className="px-4 flex-1 hover:shadow-[#007FFE]">
                  <Link href="/">
                    <a>Perfil</a>
                  </Link>
                </li>
                <li className="flex-1">
                  <Link href="/">
                    <a>Configurações</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <button onClick={() => disconnected()}>Sair</button>
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Link href="/login">
            <a>Entrar</a>
          </Link>
        )}
      </div>
    </header>
  );
}
